import { Ingredients } from "./ingredient";
import { Category } from "./category";
import { User } from "./user";
import { Meal } from "./meal";

export class Recipe {
    recipeId: number;
    recipeName: String;
    calories: number;
    category: Category;
    user: User;
    meal: Meal[];
    ingredients: Ingredients[];

    constructor(recipeId=0, recipeName = '', calories = 0,
        category = undefined, user = undefined, meal = [], ingredients = []) {
            this.recipeId = recipeId;
            this.recipeName = recipeName;
            this.calories = calories;
            this.category = category;
            this.user = user;
            this.meal = meal;
            this.ingredients = ingredients;
    }
    
}