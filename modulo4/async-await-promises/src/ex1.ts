import axios from 'axios'
import {base_URL} from './base_URL'

// a) Utilizar o endpoint GET

// b) async await com uma Promise<any[]>

// c)
async function getSubscribers(): Promise<any[]> {
    const res = await axios.get(`${base_URL}/subscribers`)
    return res.data
}

getSubscribers()
