import { app } from "./app";
import { createAdress } from "./endpoints/createAdress";

app.post("/cadastro-cep/:cep", createAdress)