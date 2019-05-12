import { IngredientType } from "./ingredientType";

export class Ingredient {
    ingredientId: number;
<<<<<<< HEAD
<<<<<<< HEAD
    ingredientName: string;
    ingredientType: IngredientType;
    calories: number;

    constructor(ingredientId=0, ingredientName='', ingredientType=new IngredientType, calories=0) {
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
=======
=======
>>>>>>> profile-page
    ingredientType: IngredientType;
    calories: number;

    constructor(ingredientId=0, ingredientType=new IngredientType, calories=0) {
        this.ingredientId = ingredientId;
<<<<<<< HEAD
>>>>>>> login-page
=======
>>>>>>> profile-page
        this.ingredientType = ingredientType;
        this.calories = calories;
    }
}