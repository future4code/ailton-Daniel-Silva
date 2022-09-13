import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

     let name = req.query.name
     let type = req.query.type
     let order = req.query.order
     let page = req.query.page
     let ordenation = "asc"

     if (!name && !type) {
      name = ""
     }

     if (!order) {
      order = "name"
      ordenation = "desc"
     }

     if (!page) {
      page = "1"
     }

    const usersPerPage = 5
    const offset = usersPerPage * (Number(page) - 1)

    const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${name}%" OR type LIKE "%${type}%"
      ORDER BY ${order} ${ordenation}
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
