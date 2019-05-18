import { IRecipeState } from ".";
import { recipeType } from "../actions/recipe.action";

const initialState: IRecipeState = {
    recipeId: 0,
    recipeName: '',
    totalcalorie: 0,
    category : 0,
    user: undefined,
    ingredient: undefined,
    displayMessage: undefined,
    recipeList: []
}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case recipeType.ALL_RECIPES_SUCCESS:
            return {
                ...state,
                recipeList: action.payload.recipe,
            }
        case recipeType.CALORY_UPDATED:
            return {
                ...state,
                totalcalorie: action.payload.totalcalories
            }
        case recipeType.RECIPE_NAME_UPDATED:
            return {
                ...state,
                recipeName: action.payload.recipeName
            }
        case recipeType.CATEGORY_UPDATED:
            return {
                ...state,
                category : action.payload.category
            }
        default:
            break;
    }
    return state;
}