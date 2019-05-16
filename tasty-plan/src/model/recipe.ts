import { Ingredient } from "./ingredient";
import { User } from "./user";

export class Recipe {

    recipeId: number;
    recipeName : string;
    totalcalorie: number;
    user : User;
    ingredient: Ingredient;

    constructor(recipeId=0, recipeName = '', totalcalorie=0, user = new User, ingredient=new Ingredient) {
        this.recipeId = recipeId;
        this.recipeName = recipeName;
        this.totalcalorie = totalcalorie
        
        this.user = user;
        this.ingredient = ingredient;
    }
}