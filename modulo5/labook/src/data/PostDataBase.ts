import { Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase {
    async createPost(post: Post) {
        await this.getConnection()
        .insert({
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        })
        .into("post_labook")
    }
}