<<<<<<< HEAD
import { Recipe } from "./recipe";

export class Meal {
    mealId: number;
    mealName: String;
    recipe?: Recipe;
    
    constructor(mealId=0, mealName='', recipe= new Recipe()) {
        this.mealId = mealId;
        this.mealName = mealName;
        this.recipe = recipe;
=======
import { User } from "./user";

export class Meal {
    mealId : number;
    mealName : string;
    size : number;
    user : User;
    
    constructor(mealId = 0, mealName = '', size = 0, user = new User) {
        
        this.mealId = mealId;
        this.mealName = mealName;
        this.size = size;
        this.user = user;
>>>>>>> recipes
    }
}