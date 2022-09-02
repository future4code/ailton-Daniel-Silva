import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { User } from "../types";

export const registerUser = async (req:Request, res: Response): Promise<any> => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password) {
            res.statusCode = 404
            throw new Error(`Please, send all params!`)
        }

        const registrationUser: User = {
          id: Math.floor(Date.now() * Math.random()).toString(36),
          name,
          email,
          password,
        }
    
        await insertUser(registrationUser)

        res.status(201).send(`User ${name} has been created`)

    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message})
    }
}