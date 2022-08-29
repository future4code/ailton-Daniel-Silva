import express, { response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

const app = express()
app.use(cors())
app.use(express.json())

// Exercício 1 

app.get("/ping", (request, response) => {
  response.send("Pong! 🏓");
})

// Exercício 2 

type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3 

let arrayTasks: Task[] = [
    {userId: 1, id: 1, title: "Lavar louça", completed: true},
    {userId: 1, id: 2, title: "Pagar as contas", completed: false},
    {userId: 1, id: 3, title: "Academia", completed: true},
    {userId: 2, id: 4, title: "Tomar uma", completed: false},
    {userId: 3, id: 5, title: "huhau huahau ahduahdu adhuahd", completed: true}
]

// Exercício 4 

app.get("/statusTasks/:completed", (request, response) => {
    const statusTask:boolean = request.params.completed === "true" ? true : false

    const tasks: Task[] = arrayTasks.filter((task) => {
        return task.completed === statusTask
    })
    response.send(tasks)    
})

// Exercício 5

app.post("/createTask", (request, response) => {
    const {userId, id, title, completed} = request.body

    const newTask: Task = {
        userId,
        id,
        title,
        completed
    }

    arrayTasks.push(newTask)

    response.send(arrayTasks)
})

// Exercício 6 

app.put("/editTask/:id", (request, response) => {
    const idTask = request.params.id

    const filterTask: Task[] = arrayTasks.filter((task) => {
        return task.id === Number(idTask)
    })
    filterTask[0].completed = !filterTask[0].completed
    response.send(filterTask)
})


// Exercício 7 

app.delete("/deleteTask/:id", (request, response) => {
    const idTask:number = Number(request.params.id)

    const deleteTask: Task[] = arrayTasks.filter((task) => {
        return task.id !== idTask
    })
    response.send(deleteTask)
})

// Exercício 8

app.get("/tasksOfUser/:userId", (request, response) => {
    const idUser:number = Number(request.params.userId)

    const tasksUser: Task[] = arrayTasks.filter((task) => {
        return task.userId === idUser
    })
    response.send(tasksUser)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})