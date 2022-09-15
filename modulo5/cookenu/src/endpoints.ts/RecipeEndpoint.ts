import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { MissingFields } from "../error/MissingFields";

export class RecipeEndpoint {

    async createRecipe(req: Request, res: Response) {
        try {
            const {title, description} = req.body

            if(!title || !description) {
                throw new MissingFields()
            }
            
            const recipeDate = new RecipeDatabase()
            
        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}