import { User } from "./user";
import { Category } from "./category";
import { Ingredient } from "./ingredient";



export class Recipe {

    recipeId: number;
    recipeName : string;
    calories: number;
    user : User;
    category : Category;
    ingredient : Ingredient;
    amount : number

    constructor(recipeId=0, recipeName = '', totalcalorie=0, user = new User, category = new Category, ingredient = new Ingredient, amount = 0) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.calories = totalcalorie;
        this.user = user;
        this.category = category;
        this.ingredient = ingredient;
        this.amount = amount;
    }
    
}