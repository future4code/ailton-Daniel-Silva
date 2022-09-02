import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Purchase, Product } from "../types";
import { insertPurchase } from "../data/insertPurchase";
import { selectUser } from "../data/selectUser";
import { selectProduct } from "../data/selectProduct";


export const registerPurchase = async (req: Request, res: Response) => {
    try {
        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity) {
            res.statusCode = 404
            throw new Error("Please, send all params!")
        }

        const userExist = await selectUser(user_id)

        if(!userExist) {
            res.statusCode = 404
            throw new Error(`User with id: ${user_id} cannot be found`)
        }

        const productExist = await selectProduct(product_id)

        if(!productExist) {
            res.statusCode = 404;
            throw new Error(`Product with id: ${product_id} cannot be found`);
        }
        
        const totalPrice = productExist.price

        const registrationPurchase: Purchase = {
          id: Math.floor(Date.now() * Math.random()).toString(36),
          user_id,
          product_id,
          quantity,
          total_price: totalPrice
        };

        await insertPurchase(registrationPurchase)

        res.status(200).send(`Purchase has been created`)

    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message });
    }
}