import { User } from "../types"
import { connection } from "./connection"

export const selectUser = async (user_id:string): Promise<User|undefined> => {
    const [result] = await connection("labecommerce_users").select("*").where({id:user_id})

    if (result) {
         const userType: User = {
           id: result.id,
           name: result.name,
           email: result.email,
           password: result.password,
         }
    return userType
} else {
    return undefined
}
}