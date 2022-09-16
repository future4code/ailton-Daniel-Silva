import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { InvalidToken } from "../error/InvalidToken";
import { MissingFields } from "../error/MissingFields";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
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

            const verifyToken = new Authenticator().verifyToken(token)

              if (!verifyToken) {
                throw new InvalidToken();
              }
            const id = new GenerateId().createId()

            const idUser = verifyToken.id

            const actualDate = new Date()
            const day = String(actualDate.getDate()).padStart(2, "0")
            const month = String(actualDate.getMonth() + 1).padStart(2, "0")
            const year = actualDate.getFullYear()

            const date = `${year}-${month}-${day}`
            
            const recipeData = new RecipeDatabase()

            const recipe = new Recipe(id, title, description, date, idUser)

            const result = await recipeData.createRecipe(recipe)

            res.status(201).send(result)

            
        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}