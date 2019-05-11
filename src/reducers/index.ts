import { combineReducers } from "redux";
import { dummyReducer } from "./dummy.reducer"
import { Ingredient } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";


export interface IDumState {
    dumMessage?: string
}

export interface IIngredientState {
    ingredient?: Ingredient,
    displayMessage?: string
}

export interface IState {
    dum: IDumState,
    ingre: IIngredientState
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    ingre: ingredientReducer
})