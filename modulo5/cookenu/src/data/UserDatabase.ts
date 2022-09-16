import { User } from "../model/User";
import { BaseDataBase } from "./BaseDatabase";

export class UserDatabase extends BaseDataBase {
    async createUser(user: User): Promise<string> {
        await this.getConnection()
          .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
          })
          .into("user_cookenu");

          return `User ${user.getName()} created successfully!`
    }

    async getUserByEmail(email: string): Promise<User|undefined> {
      const result = await this.getConnection()
      .select("*")
      .from("user_cookenu")
      .where({email})

       if (!result.length) {
         return undefined
       }

      return new User(result[0].id, result[0].name, result[0].email, result[0].password)
    }

    async getProfile(id: string) {
      
      const result = await this.getConnection()
      .select("*")
      .from("user_cookenu")
      .where({id: id})
 
      return result[0]
    }

}