import axios from "axios";
import { base_URL } from "./base_URL";


// a) No caso da função nomeada, o async vem antes da iniciação da funçao, já no arrow
// function ela vem depois da declaração.

// b)
const getSubscribers = async (): Promise<any[]> => {
    const res = await axios.get(`${base_URL}/subscribers`)
    return res.data
}

getSubscribers()