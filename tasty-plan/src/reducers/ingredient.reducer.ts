import { IIngredientState } from ".";
import { ingredientType } from "../actions/ingredient.action";

const initialState: IIngredientState = {
    ingredientsId: 0,
    name: '',
    calories: 0,
    foodType: undefined,
    ingredientList : []
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
                    ingredientList : action.payload.ingredient
                }
            
            default:
                break;
        }
        return state;

}