import { FoodType } from "./foodType";

<<<<<<< HEAD
export class Ingredient {
=======
export class Ingredients {
>>>>>>> grocery-list
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;
<<<<<<< HEAD
    ingredientList : Ingredient[];

    constructor(ingredientsId = 0, name = '', calories = 0, foodType = undefined, ingredientList = []) {
=======

    constructor(ingredientsId = 0, name = '', calories = 0, foodType = undefined) {
>>>>>>> grocery-list
        this.ingredientsId = ingredientsId;
        this.name = name;
        this.calories = calories;
        this.foodType = foodType;
<<<<<<< HEAD
        this.ingredientList = ingredientList;
=======
>>>>>>> grocery-list
    }
}