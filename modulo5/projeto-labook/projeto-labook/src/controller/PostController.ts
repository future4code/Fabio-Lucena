import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness"
import UserBusiness from "../business/UserBusiness"

export type postInputDTO = {
    photo: string,
    description: string,
    type: string
}

export type postIdDTO = {
    id: string,
    token: string
}

export default class PostController{
    constructor(private postBusiness: PostBusiness){}
    
    createPost = async (req: Request, res: Response) => {
           try {
              let message = "Success!"
        
              const { photo, description, type } = req.body
              const token: string = req.headers.authorization as string

              const input: postInputDTO = {
                  photo: photo,
                  description: description,
                  type: type
              }
              
               await this.postBusiness.createPost(input, token) 
        
              res.status(201).send({ message })
        
           } catch (error: any) {
              let message = error.sqlMessage
              res.statusCode = 400
        
              res.send({ message })
           }
        }

    getPostById = async (req: Request, res: Response) => {
           try {
              let message = "Success!"
        
              const { id } = req.params
              const token: any = req.headers.authorization

              const postToSend: postIdDTO = {
                id: id,
                token: token
              }

              const post = await this.postBusiness.getPostById(postToSend)
              
              res.status(200).send({ message, post })
        
           } catch (error: any) {
              let message = error.sqlMessage || error.message
              res.statusCode = 400
        
              res.send({ message })
           }
        }   
}