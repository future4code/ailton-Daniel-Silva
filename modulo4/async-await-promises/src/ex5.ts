import axios from "axios"
import { base_URL } from "./base_URL"

type user = {
  id: string;
  name: string;
  email: string;
}

const sendMessage = async (users: user[], message: string): Promise<void> => {
  try {
    for (const user of users) {
      await axios.post(`${base_URL}/notifications`, {
        userId: user.id,
        message,
      })
    }
    console.log("Foi")
  } catch (error: any) {
    console.log(`Ocorreu um erro ao enviar a mensagem!`);
  }
}
