import axios from "axios";
import { base_URL } from "./base_URL";

type user = {
  id: string;
  name: string;
  email: string;
};

const sendMessage = async (users: user[], message: string): Promise<void> => {
  try {
    const promises = users.map((user) => {
      return axios.post(`${base_URL}/notifications`, {
        userId: user.id,
        message,
      });
    });
    await Promise.all(promises)

    console.log("Foi")
  } catch (error: any) {
    console.log(`Ocorreu um erro ao enviar a mensagem!`)
  }
};
