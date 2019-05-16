import { IRecipeState } from ".";
import { recipeType } from "../actions/recipe.action";

const initialState: IRecipeState = {
    recipeId: 0,
    recipeName: '',
    totalcalorie: 0,
    user: undefined,
    ingredient: undefined,
    displayMessage: undefined
}

export const recipeReducer = (state = initialState, action) => {

    switch (action.type) {
        case recipeType.RECIPE_SUCCESS:
            return {
                ...state,
                recipe: action.payload.recipe,
            }
        case recipeType.CALORY_UPDATED:
            return {
                ...state,
                totalcalorie: action.payload.totalcalories
            }
        case recipeType.RECIPE_NAME_UPDATED:
            return {
                ...state,
                recipeName : action.payload.recipeName
            }
        default:
    }
    return state;
}