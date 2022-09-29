import { UserDataBase } from "../data/UserDataBase";
import { ShortName } from "../error/ShortName";
import { ShortPassword } from "../error/ShortPassword";
import { ISignupInputDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserBusiness {
  constructor(
    private userDatabase = UserDataBase,
    private idGenerator = GenerateId,
    private hashManager = HashManager,
    private authenticator = Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const { name, email, password } = input

    if (name.length < 3) {
      throw new ShortName();
    }

    if (password.length < 6) {
      throw new ShortPassword();
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      throw new Error("Parâmetro 'email' inválido");
    }

    const emailExist = await this.userDatabase
  };
}