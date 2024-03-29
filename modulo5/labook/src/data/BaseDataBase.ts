import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDataBase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!BaseDataBase.connection) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
        },
      });
    }
    return BaseDataBase.connection;
  }
}
