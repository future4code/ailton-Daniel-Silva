import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { ICreatePostInputDTO } from "../model/Post"

export class PostController {
    constructor (
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) => {
        try {
                const { content } = req.body
                const token = req.headers.authorization as string

            const input: ICreatePostInputDTO = {
               token,
               content
            }

            const response = await this.postBusiness.createPost(input)

            res.status(400).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}