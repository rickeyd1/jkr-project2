import { combineReducers } from 'redux';
import { dummyReducer } from "./dummy.reducer"
import { Ingredient } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
//import { Recipe } from "../model/recipe";
import { Grocery } from "../model/grocery";
import { groceryReducer } from "./grocery.reducer";
import { recipeReducer } from "./recipe.reducer";
import { User } from "../model/user";
import { loginReducer } from './login.reducer';


export interface IDumState {
    dumMessage?: string
}

export interface IIngredientState {
    ingredient?: Ingredient,
    displayMessage?: string
}

export interface IRecipeState {
    recipeId?: number,
    recipeName? : string,
    totalcalorie?: number,
    user? : User,
    ingredient?: Ingredient,
    displayMessage?: String
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
    ingre: IIngredientState,
    grocery: IGroceryState,
    recipe: IRecipeState,
    login: ILoginState,
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    ingre: ingredientReducer,
    grocery: groceryReducer,
    recipe: recipeReducer,
    login: loginReducer
})