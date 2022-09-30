import { Request, Response } from "express";
import { PostDataBase } from "../data/PostDataBase";
import { MissingFields } from "../error/MissingFields";
import { NoToken } from "../error/NoToken";
import { ShortContent } from "../error/ShortContent";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class PostEndpoint {

    async createPost(req: Request, res: Response) {
        try {

            const {content} = req.body
            const token = req.headers.authorization

            if(!content) {
                throw new MissingFields()
            }

            if(content.length < 1) {
                throw new ShortContent()
            }

            if(!token) {
                throw new NoToken()
            }

            const verifyToken = new Authenticator().verifyToken(token)
            
            const id = new GenerateId().createId()

            const userId = verifyToken.id

            const postData = new PostDataBase()

            const post = new Post(id, content, userId)

            const result = await postData.createPost(post)

            res.status(201).send({message: result})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}