import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { InvalidToken } from "../error/InvalidToken";
import { MissingFields } from "../error/MissingFields";
import { GenerateId } from "../services/GenerateId";

export class RecipeEndpoint {

    async createRecipe(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const {title, description} = req.body

            if(!title || !description) {
                throw new MissingFields()
            }

            if(!token) {
                throw new InvalidToken()
            }
            
            const recipeData = new RecipeDatabase()
            
            const id = new GenerateId().createId()

            
        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}