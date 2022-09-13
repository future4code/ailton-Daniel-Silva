import { connection } from "./connection";
import { Purchase } from "../types";

export const insertPurchase = async (registrationPurchase: Purchase) => {
  try {
    await connection("labecommerce_purchases").insert(registrationPurchase).into("labecommerce_purchases")
  } catch (error: any) {
    console.log(error);
  }
};
