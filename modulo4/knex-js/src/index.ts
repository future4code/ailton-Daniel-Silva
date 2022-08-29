import express, { Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

// Exercício 1
// a) Quando usamos o raw ele devolve o resultado da query e outras informações, por
// isso é necessário o [0] para pegar apenas as informações que queremos.

// b)
const searchActor = async (name: string) => {
  const actor = await connection.raw(
    `SELECT * FROM Actor WHERE name = "${name}"`
  );
  return actor[0]
};

searchActor("Stenio Garcia");

// c)
const genderActors = async (gender: string) => {
  const numberByGender = await connection.raw(
    `SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`
  );
  const count = numberByGender[0][0].count
  return count
};

genderActors("female");

// Exercício 2
// a)
const updateActor = async (id: string, salary: number) => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

updateActor("002", 200000);

// b)
const deleteActor = async (id: string) => {
  await connection("Actor").delete().where("id", id);
};

deleteActor("010");

// c)
const averageGender = async (gender: string) => {
  const result = await connection("Actor")
    .avg("salary as salary")
    .where({ gender })
  return result[0].salary
}

averageGender("female")

// Exercício 3
//a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const actor = await connection("Actor").select("*").where("id", id)
    res.status(200).send(actor)
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message })
  }
})

// b)
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const {gender} = req.query
        const count = await connection("Actor").avg("salary as salary").where({gender})
        console.log(count[0].salary)
        res.status(200).send(`Valor da média: ${count[0].salary}`)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercício 4
// a)
app.put("/actor", async (req: Request, res: Response) => {
    try {
      const {id, salary} = req.body
      await connection("Actor").update({salary: salary}).where("id", id)
      res.status(200).send("Salary has been updated successfully");
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// b) 
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        await connection("Actor").delete().where("id", id)
        res.status(200).send("User deleted successfully")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})

// Exercício 5

const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    release_date: Date,
    note: number,
    playing_limit_date: Date
) => {
 await connection("Movies").insert({
    id: id,
    title: title,
    synopsis: synopsis,
    release_date: release_date,
    note: note,
    playing_limit_date: playing_limit_date
 }).into("Movies")
}

app.post("/createMovie", async (req: Request, res: Response) => {
    try {
        const {id, title, synopsis, release_date, note, playing_limit_date} = req.body

        if (!id || !title || !synopsis || !release_date || !note || !playing_limit_date) {
           res.statusCode = 404
           throw new Error("Please, send all params")
        }
        

        await createMovie(
            id,
            title,
            synopsis,
            release_date,
            note,
            playing_limit_date
        )

        res.status(200).send(`Movie ${title} has been created`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})

// Exercicio 6

app.get("/movie/all", async (req: Request, res: Response) => {
    try {
       const movies = await connection("Movies").select("*").limit(15)
       res.status(200).send(movies)
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
})

// Exercício 7 

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const {search} = req.query
        await connection("Movies").select("*")
        res.status(200).send()
        
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})
