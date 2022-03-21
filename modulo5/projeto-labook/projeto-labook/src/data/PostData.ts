import { postInputDTO } from "../controller/PostController"
import BaseDatabase from "./BaseDatabase"

export default class PostData extends BaseDatabase {
    insertPost = async (post: any): Promise<any> => {
        await PostData.connection("labook_posts")
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.created_at,
                author_id: post.author_id
            })

    }

    postById = async (id: string): Promise<any> => {
        const result = await PostData.connection("labook_posts")
            .select("*")
            .where({ id })

        return result
    }
}