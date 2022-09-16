import { Recipe } from "../model/Recipe";
import { BaseDataBase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDataBase {

    async createRecipe(recipe: Recipe): Promise<string> {
        await this.getConnection()
        .insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            date: recipe.getDate(),
            user_id: recipe.getUserId()
        })
        .into("recipe_cookenu")

        return `Recipe ${recipe.getTitle()} created successfully!`;
    }
}