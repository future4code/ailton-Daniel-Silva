export class Recipe {
    private id: string
    private title: string
    private description: string
    private date: string
    private userId: string

    constructor(id: string, title: string, description: string, date: string, userId: string) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.date = date,
        this.userId = userId
    }

    public getId() {
        return this.id
    }

    public getTitle() {
        return this.title
    }

    public getDescription() {
        return this.description
    }

    public getDate() {
        return this.date
    }

    public getUserId() {
        return this.userId
    }
}