import { Request, Response} from "express"
import { insertProduct } from "../data/insertProduct";
import { Product } from "../types";

export const registerProduct = async (req: Request, res: Response) => {
    try {
        const {name, price, image_url} = req.body

        if (!name || !price || !image_url) {
            res.statusCode = 404
            throw new Error("Please, send all params")
        }

        const registrationProduct: Product = {
          id: Math.floor(Date.now() * Math.random()).toString(36),
          name,
          price,
          image_url
        }

        await insertProduct(registrationProduct)

        res.status(201).send(`Product ${name} has been created`)
        
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message });
    }
}