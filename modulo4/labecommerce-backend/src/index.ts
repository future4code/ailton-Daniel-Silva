import { app } from './app'
import { getProducts } from './endpoints/getProducts'
import { getUserPurchases } from './endpoints/getUserPurchases'
import { getUsers } from './endpoints/getUsers'
import { registerProduct } from './endpoints/registerProduct'
import { registerPurchase } from './endpoints/registerPurchase'
import { registerUser } from './endpoints/registerUser'

app.post("/registerUser", registerUser)
app.get("/users", getUsers)

app.post("/registerProduct", registerProduct)
app.get("/products", getProducts)

app.post("/registerPurchase", registerPurchase)

app.get("/users/:user_id/purchases", getUserPurchases);