import { app } from "./app"
import { UserEndpoint } from "./endpoints.ts/UserEndpoint"

const user = new UserEndpoint()

app.post("/signup", user.signup)
app.post("/user/login", user.login)

app.get("/user/profile", user.profile)
app.get("/user/:id", user.profileUser)