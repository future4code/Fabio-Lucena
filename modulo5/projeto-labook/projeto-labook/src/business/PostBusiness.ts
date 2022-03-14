import { postIdDTO, postInputDTO } from "../controller/PostController"
import PostData from "../data/PostData";
import { CustomError } from "../error/CustomError";
import { authenticationData } from "../model/Authentication";
import { post } from "../model/PostTypes";
import Authenticator from "../services/Authenticator";
import generateDate from "../services/generateDate";
import IdGeneretor from "../services/IdGenerator"


export default class PostBusiness {
    constructor(
        private postDB: PostData,
        private authenticator: Authenticator,
        private idGenerator: IdGeneretor,
    ) { }

    createPost = async (input: postInputDTO, token: string): Promise<any> => {

        if (!input.photo || !input.description || !input.type) {
            throw new CustomError(400, "'photo', 'description' and 'type' must be provided");
        }

        if (!token) {
            throw new CustomError(404, "Unauthorized");
        }

        const tokenData: authenticationData = this.authenticator.getTokenData(token)

        if (!tokenData) {
            throw new CustomError(404, "Unauthorized")
        }

        const id: string = this.idGenerator.generateId()

        const post: any = {
            id: id,
            photo: input.photo,
            description: input.description,
            type: input.type,
            author_id: tokenData.id
        }

        await this.postDB.insertPost(post)

    }

    getPostById = async (postInput: postIdDTO): Promise<any> => {

        if (!postInput.id || !postInput.token) {
            throw new CustomError(400, "'id' and 'token' must be provided");
        }

        const tokenData: authenticationData = this.authenticator.getTokenData(postInput.token)

        if (!tokenData) {
            throw new CustomError(401, "Unauthorized")
        }

        const queryResult: any = await this.postDB.postById(postInput.id)

        if (!queryResult[0]) {

            const message = "Post not found"
            throw new CustomError(404, message)
        }

        const post: post = {
            id: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
        }

        return post
    }


}