import { User } from "./user";
import { Category } from "./category";

export class Recipe {

    recipeId: number;
    recipeName : string;
    calories: number;
    user : User;
    category : Category

    constructor(recipeId=0, recipeName = '', totalcalorie=0, user = new User) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.calories = totalcalorie;
        this.user = user;
    }
}