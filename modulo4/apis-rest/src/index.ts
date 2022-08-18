import express, { Request, Response } from "express";
import cors from "cors";
import { User, users, UserType } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
// a) Tem que ser usado o GET
// b) Através do path "/users"

app.get("/users", (request: Request, response: Response) => {
    let errorCode = 400
    try {
        response.status(200).send(users)
    } catch (error: any) {
       response.status(errorCode).send({message: error.message})
    }
})

// Exercício 2
// a) Os parâmetros foram passado por path params
// b) Utilizando enum

app.get("/users/:type", (request: Request, response: Response) => {
    let errorCode = 400
    try {
        const type: string = request.params.type
    if(!type) {
        errorCode = 404
        throw new Error("Type not found")
    } else if (type !== "ADMIN" && type !== "NORMAL") {
        errorCode = 422
        throw new Error("The user types are just ADMIN and NORMAL. Please, send correctly!")
    }
    const typeUsers = users.filter((user) => {
        return user.type === type
    })
    response.status(200).send(typeUsers)
    } catch (error:any) {
        response.status(errorCode).send({ message: error.message })
    }
})

// Exercício 3
// a) Path params

app.get("/users/:name", (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const name: string = request.params.name;

    if (!name) {
      errorCode = 404;
      throw new Error("Name not found");
    }

    const filteredUser = users.find((user) => {
      return user.name === name;
    });

    if (!filteredUser) {
      errorCode = 422;
      throw new Error(`User ${request.params.name} is not in the list!`);
    }

    response.status(200).send(filteredUser);
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
})

// Exercício 4
// a) Criou um usuário novo também, como faz o post
// b) Não é o mais apropriado, por que por mais que - caso não exista - ele crie um novo usuário, o PUT é feito para alterar

app.put("/createUser", (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const { id, name, email, type, age } = request.body

    if (!id || !name || !email || !type || !age) {
        errorCode = 404
        throw new Error("Please, verify the params!")
    }
    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    }

    users.push(newUser)

    response.status(201).send(users)

  } catch (error: any) {
    response.status(errorCode).send({ message: error.message })
  }
})

// Exercício 5

app.put("/changeUser/:id", (request: Request, response: Response) => {
    let errorCode = 400
    try {
        // const {name} = request.body

        const userIndex = users.findIndex((user) => {
            return user.id === Number(request.params.id)
        })

        if (userIndex === -1) {
          response.statusCode = 404
          throw new Error(`O usuário de index ${request.params.id} não foi encontrado!`)
        }

        users[userIndex].name = "-ALTERADO" //name

        response.status(200).send(users)

    } catch (error: any) {
        response.status(errorCode).send({ message: error.message })
    }
})

// Exercício 6

app.patch("/rechangeUser/:id", (request: Request, response: Response) => {
  let errorCode = 400
  try {
    // const {name} = request.body

    const userIndex = users.findIndex((user) => {
      return user.id === Number(request.params.id)
    });
    
    if (userIndex === -1) {
      response.statusCode = 404;
      throw new Error(`O usuário de index ${request.params.id} não foi encontrado!`)
    }

    users[userIndex].name = "-REALTERADO" //name

    response.status(200).send(users)
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message })
  }
})

// Exercício 7

app.delete("/deleteUser/:id", (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const id = request.params.id

    const filterUsers = users.filter((user) => {
      return user.id !== Number(id);
    })

    response.status(200).send(filterUsers);
  } catch (error: any) {
    response.status(errorCode).send({ message: error.message });
  }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
})
