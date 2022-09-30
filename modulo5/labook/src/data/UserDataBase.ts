import { IUserDB, User } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

  public async createUser(user: User) {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      })
      .into("user_labook");

  }

  public getUserByEmail = async (email: string) => {
    const result = await this.getConnection()
      .select("*")
      .from("user_labook")
      .where({ email });

    return result[0];
  };
}