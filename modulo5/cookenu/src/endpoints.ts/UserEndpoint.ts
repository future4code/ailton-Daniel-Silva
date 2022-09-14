import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { InvalidPassword } from "../error/InvalidPassword";
import { MissingFields } from "../error/MissingFields";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserEndpoint {

    async signup(req: Request, res: Response) {
        try {
            
            const {name, email, password} = req.body

            if(!name || !email || !password) {
                throw new MissingFields()
            }

            if(password.length < 6) {
                throw new InvalidPassword()
            }

            const userData = new UserDatabase()

            const id = new GenerateId().createId()

            const hashPassword = await new HashManager().hashDaSenha(password)

            const user = new User(id, name, email, hashPassword);

            const response = await userData.createUser(user)

            const token = new Authenticator().generateToken({id})

            res.status(201).send({message: response, token})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}