import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserPurchases = async (req: Request, res: Response) => {
    try {
        const {user_id} = req.params

        const result = await connection("labecommerce_purchases").select("*").where({user_id})
        
        res.status(200).send(result)

    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
}