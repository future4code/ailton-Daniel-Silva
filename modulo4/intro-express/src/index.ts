import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

// Exercício 1 

app.get("/", (request, response) => {
  response.send("Hello from Express")
})

// Exercício 2 

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

// Exercício 3 

let arrayUsers: User[] = [
    {id: 1, name: "Leila", phone: 24999999999, email: "leilinha@gmail.com", website: "leila.com.br"},
    {id: 2, name: "Taynã", phone: 24988888888, email: "tayna@gmail.com", website: "tayna.com.br"},
    {id: 3, name: "Ciro", phone: 31999999999, email: "ciro@gmail.com", website: "ciro.com.br"},
    {id: 4, name: "Henrique", phone: 11999999999, email: "conde@gmail.com", website: "conde.com.br"}
]

// Exercício 4 

app.get("/users", (request, response) => {
    response.send(arrayUsers)
})

// Exercício 5 

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// Exercício 6 
// Acho que seria melhor criar dentro do array de usuários, para melhor armazenamento de dados

let arrayPosts: Post[] = [
    {id: 11, title: "Selfie", body: "Selfie da leila na balada", userId: 1},
    {id: 12, title: "Foto dia dos pais", body: "Foto da leila com o pai dela", userId: 1},
    {id: 21, title: "Selfie", body: "Selfia taynã", userId: 2},
    {id: 31, title: "Dia dos pais", body: "Foto com os 3 filhos", userId: 3},
    {id: 41, title: "Balada", body: "Foto do henrique na balada", userId: 4}
]

// Exerício 7 

app.get("/posts", (request, response) => {
    response.send(arrayPosts)
})

// Exercicio 8

app.get("/posts/:userId", (request, response) => {
    const idUser:number = Number(request.params.userId)

    const userPosts: Post[] = arrayPosts.filter((post) => {
        return post.userId === idUser
    })
    response.send(userPosts)
})

// Exercício 9 

app.delete("/deletePost/:id", (request, response) => {
    const idPost:number = Number(request.params.id)

    const deletePost: Post[] = arrayPosts.filter((post) => {
        return post.id !== idPost
    })
    response.send(deletePost)
})

// Exercício 10 

app.delete("/deleteUser/:id", (request, response) => {
    const idUser:number = Number(request.params.id)

    const deleteUser: User[] = arrayUsers.filter((user) => {
        return user.id !== idUser
    })
    response.send(deleteUser)
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});