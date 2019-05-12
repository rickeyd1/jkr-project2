import { combineReducers } from "redux";
import { dummyReducer } from "./dummy.reducer"
import { Ingredient } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
import { Recipe } from "../model/recipe";
import { Grocery } from "../model/grocery";
import { groceryReducer } from "./grocery.reducer";
import { recipeReducer } from "./recipe.reducer";


export interface IDumState {
    dumMessage?: string
}

export interface IIngredientState {
    ingredient?: Ingredient,
    displayMessage?: string
}

export interface IRecipeState {
    recipe?: Recipe,
    displayMessage?: String
}

export interface IGroceryState {
    grocery?: Grocery,
    displayMessage?: String
}
export interface IState {
    dum: IDumState,
    ingre: IIngredientState,
    grocery: IGroceryState,
    recipe: IRecipeState
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    ingre: ingredientReducer,
    grocery: groceryReducer,
    recipe: recipeReducer
})