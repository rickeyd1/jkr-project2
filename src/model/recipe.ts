import { Ingredient } from "./ingredient";

export class Recipe {
    recipeId: number;
    totalcalorie: number;
    ingredient: Ingredient;

    constructor(recipeId=0, totalcalorie=0, ingredient=new Ingredient) {
        this.recipeId = recipeId;
        this.totalcalorie = totalcalorie;
        this.ingredient = ingredient;
    }
}