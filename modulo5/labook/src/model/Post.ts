export interface ICreatePostInputDTO {
    content: string,
    token: string
}

export interface ICreatePostOutputDTO {
    message: string,
    post: Post
}

export class Post {

    private id: string
    private content: string
    private userId: string
    // private likes: number = 0


    constructor(id: string, content: string, userId: string) {
        this.id = id,
        this.content = content,
        this.userId = userId
        // this.likes = likes
    }

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    // public getLikes = () => {
    //     return this.likes
    // }
}