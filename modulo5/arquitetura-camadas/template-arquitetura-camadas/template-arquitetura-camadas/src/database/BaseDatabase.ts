import knex, { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config();

// classe molde , onde a funcao getConnection vai ser chamada pelas filhas
export abstract class BaseDatabase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!BaseDatabase.connection) {
      BaseDatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        },
      });
    }

    return BaseDatabase.connection;
  }
}
