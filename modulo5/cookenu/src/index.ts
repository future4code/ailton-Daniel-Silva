import { app } from "./app"
import { RecipeEndpoint } from "./endpoints.ts/RecipeEndpoint"
import { UserEndpoint } from "./endpoints.ts/UserEndpoint"

const user = new UserEndpoint()

app.post("/signup", user.signup)
app.post("/user/login", user.login)
app.get("/user/profile", user.profile)
app.post("/user/follow", user.followUser)
app.post("/user/unfollow", user.unfollowUser);
app.get("/user/:id", user.profileUser)

const recipe = new RecipeEndpoint()

app.post("/recipe", recipe.createRecipe)
app.get("/recipe/:id", recipe.getRecipe)