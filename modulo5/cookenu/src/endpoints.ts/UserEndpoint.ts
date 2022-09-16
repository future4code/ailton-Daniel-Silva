import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { InvalidId } from "../error/InvalidId";
import { InvalidPassword } from "../error/InvalidPassword";
import { InvalidToken } from "../error/InvalidToken";
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

            const emailAlreadyExist = await userData.getUserByEmail(email)
              
            if (emailAlreadyExist) {
                throw new EmailExist()
            }

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

    async login(req: Request, res: Response) {
        try {
            
            const {email, password} = req.body

            if (!email || !password) {
              throw new MissingFields()
            }

            const userData = new UserDatabase()

            const emailExist = await userData.getUserByEmail(email)

            if(!emailExist) {
                throw new InvalidCredencial()
            }

            const correctPassword = await new HashManager().compare(password, emailExist.getPassword())

            if(!correctPassword) {
                throw new InvalidCredencial()
            }
            
            const token = new Authenticator().generateToken({id: emailExist.getId()})

            res.status(200).send({token})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    async profile(req: Request, res: Response) {
        try {
            
            const token = req.headers.authorization as string

            if(!token) {
                throw new InvalidToken()
            }

            const verifyToken = new Authenticator().verifyToken(token)

            if (!verifyToken) {
                throw new InvalidToken()
            }

            const userData = new UserDatabase()
            
            const result = await userData.getProfile(verifyToken.id)

            res.status(200).send({id: result.id, name: result.name, email: result.email})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    async profileUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id as string
       
            if (!token) {
              throw new InvalidToken();
            }
            
            if (!id) {
                throw new MissingFields()
            }
            
            const verifyToken = new Authenticator().verifyToken(token)

            if (!verifyToken) {
                throw new InvalidToken()
            }

            const userData = new UserDatabase() 

            const result = await userData.getProfile(id)

            if(!result) {
                throw new InvalidId()
            }

            res.status(200).send({id: result.id, name: result.name, email: result.email})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    async followUser(req: Request, res: Response) {
        try {
            
            
            const token = req.headers.authorization
            const {idUser} = req.body

            if (!token) {
              throw new InvalidToken();
            }
            
            if (!idUser) {
                throw new MissingFields()
            }
            
            const verifyToken = new Authenticator().verifyToken(token)

             if (!verifyToken) {
               throw new InvalidToken();
             }

            const idFollower = verifyToken.id

            const userData = new UserDatabase() 

            const result = await userData.followUser(idFollower, idUser)

            if(!result) {
                throw new InvalidId()
            }

            res.status(200).send({message: result})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    async unfollowUser(req: Request, res: Response) {
        try {
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}