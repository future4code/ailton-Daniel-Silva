import { app } from "./app";
import { UserEndpoint } from "./endpoints/UserEndpoint";

const user = new UserEndpoint()

app.post("/signup", user.signup)