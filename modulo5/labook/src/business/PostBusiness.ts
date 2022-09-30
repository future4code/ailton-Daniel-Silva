import { PostDataBase } from "../data/PostDataBase";
import { NoToken } from "../error/NoToken";
import { ShortContent } from "../error/ShortContent";
import { ICreatePostInputDTO, Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class PostBusiness {
    constructor(
        private postDatabase: PostDataBase,
        private idGenerator: GenerateId,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const {token, content} = input

        if(content.length < 1) {
            throw new ShortContent()
        }

        if(!token) {
            throw new NoToken()
        }

        const payload = this.authenticator.verifyToken(token)

        const id = this.idGenerator.createId()

        const userId = payload.id

        const post = new Post(id, content, userId)

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post created",
            post: post
        }
        
        return response
    }
}