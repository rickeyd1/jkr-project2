import { Ingredient } from "./ingredient";
import { User } from "./user";
import { Category } from "./category";

export class Recipe {

    recipeId: number;
    recipeName : string;
    calories: number;
    user : User;
    ingredient: Ingredient;
    category : Category

    constructor(recipeId=0, recipeName = '', totalcalorie=0, user = new User, ingredient=new Ingredient) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.calories = totalcalorie
        
        this.user = user;
        this.ingredient = ingredient;
    }
}