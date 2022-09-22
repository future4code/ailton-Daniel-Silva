import { app } from "./app";
import { PostEndpoint } from "./endpoints/PostEndpoint";
import { UserEndpoint } from "./endpoints/UserEndpoint";

const user = new UserEndpoint()

app.post("/signup", user.signup)
app.post("/login", user.login)

const post = new PostEndpoint()

app.post("/post", post.createPost)