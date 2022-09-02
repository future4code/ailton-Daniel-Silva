import { registerProduct } from "../endpoints/registerProduct";
import { Product } from "../types";
import { connection } from "./connection";

export const insertProduct = async (registrationProduct: Product) => {
    try {
        await connection("labecommerce_products").insert(registrationProduct).into("labecommerce_products")
    } catch (error: any) {
        console.log(error)
    }
}