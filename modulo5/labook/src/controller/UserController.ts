import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ISignupInputDTO } from "../model/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {

            const {name, email, password} = req.body

            const input: ISignupInputDTO = {
                name,
                email,
                password
            }

            const response = this.userBusiness.signup(input)
        } catch (error: any) {
            
        }
    }
}