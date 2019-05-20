<<<<<<< HEAD
import { User } from "./user";
import { Category } from "./category";
import { Ingredient } from "./ingredient";
=======
import { Ingredients } from "./ingredient";
import { Category } from "./category";
import { User } from "./user";
import { Meal } from "./meal";
>>>>>>> grocery-list

export class Recipe {

    recipeId: number;
<<<<<<< HEAD
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
=======
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
>>>>>>> grocery-list
    }
    
}