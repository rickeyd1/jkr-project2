import { combineReducers } from "redux";
import { dummyReducer } from "./dummy.reducer"
<<<<<<< HEAD
import { Recipe } from "../model/recipe";
import { recipeReducer } from "./recipe.reducer";
=======
import { Ingredient } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
>>>>>>> ingredient-page


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

export interface IState {
    dum: IDumState,
<<<<<<< HEAD
    recipe: IRecipeState
=======
    ingre: IIngredientState
>>>>>>> ingredient-page
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
<<<<<<< HEAD
    recipe: recipeReducer
=======
    ingre: ingredientReducer
>>>>>>> ingredient-page
})