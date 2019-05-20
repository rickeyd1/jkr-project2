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
    recipeList: [],
    recipeIngredientList: [],
    ingred1: 0,
    ingred2: 0,
    ingred3: 0,
    amount1: 0,
    amount2: 0,
    amount3: 0,
    newRecipe: undefined
}

export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case recipeType.ALL_RECIPES_SUCCESS:
            console.log('Reducer '+ action.payload.recipe);
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

        case recipeType.INGREDIENT_UPDATE_1:
            return {
                ...state,
                ingred1: action.payload.ingredient1
            }

        case recipeType.INGREDIENT_UPDATE_2:
            return {
                ...state,
                ingred2: action.payload.ingredient2
            }

        case recipeType.INGREDIENT_UPDATE_3:
            return {
                ...state,
                ingred3: action.payload.ingredient3
            }

        case recipeType.AMOUNT_UPDATE_1:
            return {
                ...state,
                amount1: action.payload.amount1
            }

        case recipeType.AMOUNT_UPDATE_2:
            return {
                ...state,
                amount2: action.payload.amount2
            }

        case recipeType.AMOUNT_UPDATE_3:
            return {
                ...state,
                amount3: action.payload.amount3
            }

        case recipeType.RECIPE_SUCCESS:
            return {
                ...state,
                newRecipe: action.payload.recipe
            }
        case recipeType.USER_RECIPES_GET:
            return {
                ...state,
                recipeList: action.payload.recipe
            }
        case recipeType.REC_INGREDIENT_GET:
            return {
                ...state,
                recipeIngredientList: action.payload.recipeIngredients
            }
        default:
            break;
    }
    return state;
}