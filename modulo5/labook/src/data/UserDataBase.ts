import { User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase"

export  class UserDataBase extends BaseDataBase {
    async createUser(user: User): Promise<string> {
        await this.getConnection()
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        })
        .into("user_labook")

        return `User ${user.getName()} created sucessfully!`
    }

    async getUserByEmail(email: string) {
        const result = await this.getConnection()
        .select("*")
        .from("user_labook")
        .where({email})
        
        return result[0]
    }
}