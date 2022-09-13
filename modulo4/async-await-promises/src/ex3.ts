import axios from "axios";
import { base_URL } from "./base_URL"

type user = {
  id: string
  name: string
  email: string
}

// a) Não, pois é isso que será retornado. Um array de users.

// b) Para que seja percorrido 1 a 1 os itens contidos dentros do array corretamente

// c)
const getSubscribers = async (): Promise<user[]> => {
  const res = await axios.get(`${base_URL}/subscribers`)
    return res.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      }
    })
}
const getUsers = async () => {
  return await getSubscribers()
}

getUsers().then((res) => {
  console.log(res)
})

