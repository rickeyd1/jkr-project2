import { IIngredientState } from ".";
import { ingredientType } from "../actions/ingredient.action";

const initialState: IIngredientState = {
    ingredient: undefined,
    displayMessage: undefined
}

export const ingredientReducer = (state = initialState, action) => {

        switch (action.type) {
            case ingredientType.INGREDIENT_FAILED:
                return {
                    ...state,
                    displayMessage: 'Ingredient has failed'
                }
            case ingredientType.INGREDIENT_NONE:
                return {
                    ...state,
                    displayMessage: 'There is no Ingredients'
                }
            case ingredientType.INGREDIENT_SUCCESS:
                return {
                    ...state,
                    displayMessage: 'Ingredient is successful'
                    //payload goes here
                }
            
            default:
                break;
        }
        return state;

}