import { FoodType } from "./foodType";

export class Ingredients {
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;

    constructor(ingredientsId = 0, name = '', calories = 0, foodType = undefined) {
        this.ingredientsId = ingredientsId;
        this.name = name;
        this.calories = calories;
        this.foodType = foodType;
    }
}