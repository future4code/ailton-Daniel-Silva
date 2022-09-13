import express, { Request, Response } from 'express'
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
})

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1

// const createUser = async (
//     id: string,
//     name: string,
//     nickname: string,
//     email: string 
// ) => {
//     await connection("User").insert({
//         id: Math.floor(Date.now() * Math.random()).toString(36),
//         name: name,
//         nickname: nickname,
//         email: email,
//       }).into("User");
// }

// app.post("/createUser", async (req: Request, res: Response): Promise<any> => {
//     try {
//         const {id, name, nickname, email} = req.body

//         if (!name || !nickname || !email) {
//            res.statusCode = 404
//            throw new Error("Please, send all params")
//        }

//         await createUser (
//             id, 
//             name, 
//             nickname,
//             email
//             )

//         res.status(201).send(`User ${nickname} has been created!`)

//     } catch (error: any) {
//        res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

// // Exercício 2 

// app.get("/user/:id", async (req: Request, res: Response): Promise<any> => {
//     try {
//       const {id} = req.params
//       const user = await connection("User").select("id", "nickname").where("id", id)

//       if(user.length === 0) {
//         res.statusCode = 404
//         throw new Error(`User with id: ${id} cannot be found`)
//       }

//       res.status(200).send(user)

//     } catch (error: any) {
//       res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

// // Exercicio 3 

// app.put("/user/edit/:id", async (req: Request, res: Response): Promise<any> => {
//     try {
//         const {id} = req.params
//         const {name, nickname, email} = req.body
//         await connection("User").update({name: name, nickname: nickname, email: email}).where("id", id)

//         if (!name || !nickname || !email) {
//           res.statusCode = 404
//           throw new Error("Please, send all params")
//         }

//         res.status(200).send("User has been updated successfully")

//     } catch (error: any) {
//         res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

// // Exercício 4

// const createTask = async (
//     TaskId: string,
//     title: string,
//     description: string,
//     limitDate: string,
//     creatorUserId: string
// ) => {
//     await connection("Task")
//       .insert({
//         TaskId: Math.floor(Date.now() * Math.random()).toString(36),
//         title: title,
//         description: description,
//         limitDate: limitDate,
//         creatorUserId: creatorUserId,
//       })
//       .into("Task");
// }

// app.post("/createTask", async (req: Request, res: Response): Promise<any> => {
//   try {
//     const { TaskId, title, description, limitDate, creatorUserId } = req.body;

//     let data = limitDate.split("/")
//     data = `${data[2]}-${data[1]}-${data[0]}`
   
//     if (!title || !description || !limitDate || !creatorUserId) {
//       res.statusCode = 404;
//       throw new Error("Please, send all params");
//     }

//     await createTask(
//         TaskId, 
//         title,
//         description,
//         data, 
//         creatorUserId
//         )

//         res.status(201).send(`Task ${title} has been created`)

//   } catch (error: any) {
//        res.status(res.statusCode || 500).send({ message: error.message })
//   }
// })

// Exercício 5

app.get("/task/:taskId", async (req: Request, res: Response) => {
    const {taskId} = req.params
    const task = await connection("Task").where("taskId", taskId)

    res.status(200).send(task)
})



app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})