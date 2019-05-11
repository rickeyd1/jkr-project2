import { combineReducers } from "redux";
import { dummyReducer } from "./dummy.reducer"
import { Recipe } from "../model/recipe";
import { recipeReducer } from "./recipe.reducer";


export interface IDumState {
    dumMessage?: String
}

export interface IRecipeState {
    recipe?: Recipe,
    displayMessage?: String
}

export interface IState {
    dum: IDumState,
    recipe: IRecipeState
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    recipe: recipeReducer
})