import { app } from "./app"
import { getAllUsersInOrder } from "./endpoints/getAllUsersInOrder"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"
import { getUsersByPage } from "./endpoints/getUsersByPage"
import { getUsers } from "./endpoints/getUsers"

app.get("/users", getAllUsers)
app.get("/usersByName", getUserByName) //query params users?name=${name}
app.get("/usersByType/:type", getUserByType)
app.get("/usersInOrder", getAllUsersInOrder)
app.get("/usersByPage", getUsersByPage)
app.get("/usersFilters", getUsers)

