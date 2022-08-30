import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUsersByPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

    const usersPerPage = 5
    const page = req.query.page
    const offset = usersPerPage * (Number(page) - 1)

    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      LIMIT ${usersPerPage}
      OFFSET ${offset}
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


