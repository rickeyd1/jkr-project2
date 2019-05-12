import { IngredientType } from "./ingredientType";

export class Ingredient {
    ingredientId: number;
<<<<<<< HEAD
    ingredientName: string;
    ingredientType: IngredientType;
    calories: number;

    constructor(ingredientId=0, ingredientName='', ingredientType=new IngredientType, calories=0) {
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
=======
    ingredientType: IngredientType;
    calories: number;

    constructor(ingredientId=0, ingredientType=new IngredientType, calories=0) {
        this.ingredientId = ingredientId;
>>>>>>> login-page
        this.ingredientType = ingredientType;
        this.calories = calories;
    }
}