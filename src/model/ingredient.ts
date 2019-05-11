import { IngredientType } from "./ingredientType";

export class Ingredient {
    ingredientId: number;
    ingredientType: IngredientType;
    calories: number;

    constructor(ingredientId=0, ingredientType=new IngredientType, calories=0) {
        this.ingredientId = ingredientId;
        this.ingredientType = ingredientType;
        this.calories = calories;
    }
}