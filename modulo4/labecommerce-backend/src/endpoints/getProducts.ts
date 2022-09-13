import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await connection("labecommerce_products").select()

        res.status(200).send(result)

    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message });
    }
}