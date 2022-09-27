import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { User } from "../models/User";


export class UserController {

    async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const userBusiness = new UserBusiness()

            
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}