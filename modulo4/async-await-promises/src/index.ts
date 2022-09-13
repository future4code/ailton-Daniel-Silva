import express from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from "dotenv"

dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
});

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});