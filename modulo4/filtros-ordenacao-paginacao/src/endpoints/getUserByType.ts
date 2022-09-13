import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUserByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let type = req.params.type

    if (!type) {
        type = ""
    }

    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type LIKE "%${type}%"
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
