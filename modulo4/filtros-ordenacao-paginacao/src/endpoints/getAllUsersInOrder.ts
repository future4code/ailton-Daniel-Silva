import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllUsersInOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let order = req.query.order
    let ordenation = "asc"
 
    if (!order) {
      order = "email"
    }

        const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      ORDER BY ${order} ${ordenation}
   `);
     if (!result.length) {
       res.statusCode = 404;
       throw new Error("No recipes found");
     }

     res.status(200).send(result[0]);

  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
}
 
