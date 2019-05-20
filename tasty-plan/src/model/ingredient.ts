import { FoodType } from "./foodType";

export class Ingredients {
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;
    ingredientList : Ingredients[];

    constructor(ingredientsId = 0, name = '', calories = 0, foodType = undefined, ingredientList = []) {
        this.ingredientsId = ingredientsId;
        this.name = name;
        this.calories = calories;
        this.foodType = foodType;
        this.ingredientList = ingredientList;
    }
}