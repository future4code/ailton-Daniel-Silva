import User from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public async createUser(user: User) {
    await this.getConnection()
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into("User_autenticacao");
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .into("User_autenticacao")
      .where({ email });

    console.log(result);
    return result;
  }

  public async getUserById(id: string) {
    const result = await this.getConnection()
      .select("*")
      .into("User_autenticacao")
      .where({ id })

    return result;
  }
}
