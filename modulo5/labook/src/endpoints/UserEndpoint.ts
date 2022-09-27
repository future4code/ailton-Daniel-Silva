import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import { ShortName } from "../error/ShortName";
import { ShortPassword } from "../error/ShortPassword";
import { UserRoleError } from "../error/UserRoleError";
import { User, USER_ROLES } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserEndpoint {

    async signup(req: Request, res: Response) {
        try {
            
            const {name, email, password, role} = req.body

            if (!name || !email || !password || !role) {
                throw new MissingFields()
            }        
            
            if(name.length < 3) {
                throw new ShortName()
            }

            if(role.toUpperCase() !== USER_ROLES.ADMIN && role.toUpperCase() !== USER_ROLES.NORMAL) {
                throw new UserRoleError()
            }

            if(password.length < 6) {
                throw new ShortPassword()
            }

            const userData = new UserDataBase()

            const emailExist = await userData.getUserByEmail(email)

            if(emailExist) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId()

            const hashPassword = await new HashManager().hashDaSenha(password)

            const user = new User(id, name, email, hashPassword, role)
            
            const response = await userData.createUser(user)

            const token = new Authenticator().generateToken({id, role})

            res.status(201).send({message: response, token})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    async login(req: Request, res: Response) {
        try {
            
            const {email, password} = req.body

            if(!email || !password) {
                throw new MissingFields()
            }

            if (password.length < 6) {
              throw new ShortPassword()
            }

            const userData = new UserDataBase()

            const emailExist = await userData.getUserByEmail(email)

            if (!emailExist) {
               throw new InvalidCredencial()
             }

            const correctPassword = await new HashManager().compare(password, emailExist.password)

            if(!correctPassword) {
                throw new InvalidCredencial()
            }

            const token = new Authenticator().generateToken({id: emailExist.id, role: emailExist.role})

            res.status(200).send({message: "User logged in!", token})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}