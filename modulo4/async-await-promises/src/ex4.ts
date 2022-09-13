import axios from "axios";
import { base_URL } from "./base_URL";

// a) Será um endpoint do tipo PUT, pois como a informação ainda não existe, o PUT vai
// ser utilizado para criá-la.

// b)
const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  try {
    await axios.put(`${base_URL}/news`),
      {
        title: title,
        content: content,
        date: date,
      };
    console.log("Deu certo");
  } catch (error: any) {
    console.log("Erro");
  }
};
