import { BaseDataBase } from "./data/BaseDataBase";
import { app } from "./app";
import { UserEndpoint } from "./endpoints.ts/UserEndpoint";

// Exercício 1) Melhor usar strings, que assim pode-se misturar números e letras. Além de tudo
// fica mais fácil de verificar IDs e tokens.

// Exercício 2
// a) A função é responsável por inserir os dados recebidos no banco de dados, na tabela User

// Exercício 3
// a) Garante que o parâmetro será uma string (para tipagem)

// Exercício 7
// a) O "as any" serve para ajudar na tipagem, que deve ser uma string

const user = new UserEndpoint()

app.post("/user/signup", user.createUser)
app.post("/user/login", user.login)
app.get("/user/profile", user.profile)

