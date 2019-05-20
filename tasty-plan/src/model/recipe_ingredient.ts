import { Ingredients } from "./ingredient";
import { Recipe } from "./recipe";

export class RecipeIngredient {

    id : number;
    ingredient : Ingredients;
    recipe : Recipe;
    amount : number;

    constructor(id = 0, ingredient = new Ingredients, recipe = new Recipe, amount = 0) {

        this.id = id,
        this.ingredient = ingredient,
        this.recipe = recipe,
        this.amount = amount
    }
}