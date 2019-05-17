import { Recipe } from "./recipe";

export class Meal {
    mealId: number;
    mealName: String;
    recipe?: Recipe;
    
    constructor(mealId=0, mealName='', recipe= new Recipe()) {
        this.mealId = mealId;
        this.mealName = mealName;
        this.recipe = recipe;
    }
}