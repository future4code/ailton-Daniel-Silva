import { Request, Response } from "express";
import { insertAdress } from "../data/insertAdress";
import { requestCep } from "../services/requestCep";
import { Adress } from "../types/adress";

export const createAdress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        
        if(!cep) {
            res.statusCode = 404
            throw new Error(`Please, send the parameter CEP!`)
        }

        const cepQuery = await requestCep(cep)

        if(!cepQuery) {
            res.statusCode = 404
            throw new Error(`CEP: ${cep} does not exist!`)
        }

        const registrationAdress: Adress = {
            CEP: cep,
            logradouro: cepQuery.logradouro,
            numero: cepQuery.complemento,
            bairro: cepQuery.bairro,
            cidade: cepQuery.localidade,
            estado: cepQuery.uf
        }

        await insertAdress(registrationAdress)

        res.status(201).send(`Adress has been registered`)
        
    } catch (error: any) {
       res.status(res.statusCode || 500).send({ message: error.message }) 
    }
}