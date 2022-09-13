import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
  try {
    let name = req.query.name

   if (!name) {
      name = ""
    } 

    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${name}%"
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
};





    

