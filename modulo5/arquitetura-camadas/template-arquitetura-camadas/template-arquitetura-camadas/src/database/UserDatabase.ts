import { User } from "../models/User";
import  {BaseDatabase}  from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Arq_Users";

  async createUser(user: User): Promise<string> {
    await this.getConnection()
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        nome: user.getName(),
        senha: user.getPassword(),
        role: user.getRole().toUpperCase(),
      })
      .into(UserDatabase.TABLE_USERS);

    return `Usuario cadastrado com sucesso`
  }
}