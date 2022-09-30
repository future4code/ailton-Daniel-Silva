import { UserDataBase } from "../data/UserDataBase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import { ShortName } from "../error/ShortName";
import { ShortPassword } from "../error/ShortPassword";
import { ILoginInputDTO, ILoginOutputDTO, ISignupInputDTO, ISignupOutputDTO, ITokenPayload, User, USER_ROLES } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserBusiness {
  constructor(
    private userDatabase: UserDataBase,
    private idGenerator: GenerateId,
    private hashManager: HashManager,
    private authenticator: Authenticator
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

    const emailExist = await this.userDatabase.getUserByEmail(email)

    if (emailExist) {
      throw new EmailExist()
    }

    const id = this.idGenerator.createId()

    const hashPassword = await this.hashManager.hashDaSenha(password)

    const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL)

    await this.userDatabase.createUser(user)

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const response: ISignupOutputDTO = {
      message: `User ${user.getName()} created sucessfully!`,
      token
    }
    return response
  }

  public login = async (input: ILoginInputDTO) => {

     const { email, password } = input

     if (!email || !password) {
       throw new MissingFields()
     }

     if (password.length < 6) {
       throw new ShortPassword()
     }

     if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
       throw new Error("Parâmetro 'email' inválido")
     }

     const emailExist = await this.userDatabase.getUserByEmail(email)

     if (!emailExist) {
       throw new InvalidCredencial()
     }

     const correctPassword = await this.hashManager.compare(password, emailExist.password)

     if(!correctPassword) {
      throw new InvalidCredencial()
     }

     const user = new User(emailExist.id, emailExist.name, emailExist.email, emailExist.password, emailExist.role)

     const payload: ITokenPayload = {
       id: user.getId(),
       role: user.getRole(),
     }

     const token = this.authenticator.generateToken(payload)

     const response: ILoginOutputDTO = {
       message: "User logged in!",
       token
     }

     return response
  }
}