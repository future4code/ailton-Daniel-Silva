import { connection } from "./connection";
import { User } from "../types";

export const insertUser = async (registrationUser: User) => {
    try {
        await connection("labecommerce_users").insert(registrationUser).into("labecommerce_users")
    } catch (error: any) {
        console.log(error)
    }
}