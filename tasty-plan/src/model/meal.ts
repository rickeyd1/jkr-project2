import { Recipe } from "./recipe";

export class Meal {
    mealId: number;
    mealName: String;
    size: number;
    recipe?: Recipe;
    
    constructor(mealId=0, mealName='', size=0, recipe= new Recipe()) {
        this.mealId = mealId;
        this.mealName = mealName;
        this.size = size;
        this.recipe = recipe;
    }
}