import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { EmailExist } from "../error/EmailExist";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidPassword } from "../error/InvalidPassword";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class UserEndpoint {
  async createUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userData = new UserDataBase();

      if (!email || email.indexOf("@") === -1) {
        throw new InvalidEmail();
      }

      if (!password || password.lenght < 6) {
        throw new InvalidPassword();
      }

      const id = new GenerateId().createId();

      const user = new User(id, password, email);

      await userData.createUser(user);

      const token = new Authenticator().generateToken(id);

      res.status(201).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userData = new UserDataBase();

      if (!email || email.indexOf("@") === -1) {
        throw new InvalidEmail();
      }

      if (!password || password.lenght < 6) {
        throw new InvalidPassword();
      }
      
      const emailAlreadyExists = await userData.getUserByEmail(email)

      if(emailAlreadyExists.length) {
        throw new EmailExist()
      }

      const id = new GenerateId().createId();

      const user = new User(id, password, email);

      await userData.createUser(user);

      const token = new Authenticator().generateToken(id);

      res.status(201).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async profile(req: Request, res: Response) {
    try {

      const token = req.headers.authorization as string

      const validToken = new Authenticator().verifyToken(token)

      console.log(validToken)

      // const user = await userData.getUserById()
      
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }
}