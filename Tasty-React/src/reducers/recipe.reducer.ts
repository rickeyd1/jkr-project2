import { IRecipeState } from ".";
import { recipeType } from "../actions/recipe.action";

const initialState: IRecipeState = {
    recipe: undefined,
    displayMessage: undefined
}

export const recipeReducer = (state = initialState, action) => {

    switch (action.type) {
        case recipeType.RECIPE_SUCCESS:
            return {
                ...state,
                recipe: action.payload.recipe,
            }
        case recipeType.RECIPE_FAILED:
            return {
                ...state,
                displayMessage: 'Recipe failed to grab'
            }
        case recipeType.NO_INGREDIENTS:
            return {
                ...state,
                displayMessage: 'There is no Ingredient created yet'
            }
        default:
    }
    return state;
}