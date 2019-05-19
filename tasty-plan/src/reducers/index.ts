import { combineReducers } from 'redux';
import { dummyReducer } from "./dummy.reducer"
import { Ingredient } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
import { Grocery } from "../model/grocery";
import { groceryReducer } from "./grocery.reducer";
import { recipeReducer } from "./recipe.reducer";
import { User } from "../model/user";
import { loginReducer } from './login.reducer';
import { Recipe } from '../model/recipe';
import { FoodType } from '../model/foodType';


export interface IDumState {
    dumMessage?: string
}

export interface IIngredientState {
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;
    ingredientList : Ingredient[]
}

export interface IRecipeState {
    recipeId?: number,
    recipeName? : string,
    totalcalorie?: number,
    category? : number,
    user? : User,
    ingredient?: Ingredient,
    displayMessage?: String
    recipeList : Recipe[]
    ingred1: number,
    ingred2: number,
    ingred3: number,
    amount1: number,
    amount2: number,
    amount3: number,
    newRecipe: Recipe
}

export interface IMealState {
    mealId? : number,
    mealName? : string,
    size : number,
    user : User
}

export interface ILoginState {
    username: string;
    password: string;
    user: User;
    errorMessage: string;
}

export interface IGroceryState {
    grocery?: Grocery,
    displayMessage?: String
}
export interface IState {
    dum: IDumState,
    ingredient: IIngredientState,
    grocery: IGroceryState,
    recipe: IRecipeState,
    login: ILoginState
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    ingredient: ingredientReducer,
    grocery: groceryReducer,
    recipe: recipeReducer,
    login: loginReducer
})