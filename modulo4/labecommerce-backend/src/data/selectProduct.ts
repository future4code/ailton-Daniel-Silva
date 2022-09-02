import { Product } from "../types";
import { connection } from "./connection";

export const selectProduct  = async(product_id:string): Promise<Product|undefined> => {
    const [result] = await connection("labecommerce_products").select("*").where({id:product_id})
    
    if (result) {
        const productType: Product = {
            id: result.id,
            name: result.name,
            price: result.price,
            image_url: result.image_url
        }
        return productType
    } else {
        return undefined
    }
}