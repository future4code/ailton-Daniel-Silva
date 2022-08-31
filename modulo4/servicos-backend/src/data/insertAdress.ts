import { connection } from "./connection";
import { Adress } from "../types/adress";

export const insertAdress = async(registrationAdress: Adress) => {
    try {
        await connection("adressCEP").insert(registrationAdress).into("adressCEP")
    } catch (error: any) {
        console.log(error)
    }
}