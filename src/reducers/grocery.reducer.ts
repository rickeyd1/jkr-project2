import { IGroceryState } from ".";
import { groceryType } from "../actions/grocery.action";


const initialState: IGroceryState = {
    grocery: undefined,
    displayMessage: undefined
}

export const groceryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case groceryType.GROCERY_UPDATE:
            return {
                ...state,
                displayMessage: 'Grocery has been udpated'
                //payload goes here
            }
        case groceryType.GROCERY_FAILED:
            return {
                ...state,
                displayMessage: 'Grocery failed to update'
            }
        default:
    }
    return state;
}