import { IngredientType } from "./ingredientType";

export class Ingredient {
    ingredientId: number;
    ingredientName: string;
    ingredientType: IngredientType;
    calories: number;

    constructor(ingredientId=0, ingredientName='', ingredientType=new IngredientType, calories=0) {
        this.ingredientId = ingredientId;
        this.ingredientName = ingredientName;
        this.ingredientType = ingredientType;
        this.calories =  calories;
    }
}