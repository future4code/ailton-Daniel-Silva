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
}