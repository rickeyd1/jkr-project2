import { IGroceryState } from ".";
import { groceryType } from '../actions/grocery.action';

const initialState: IGroceryState = {
    groceryList: [],
    amount: 0
}

export const groceryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case groceryType.GET_LIST:
            // console.log(action.payload.groceryList);
            return {
                ...state,
                groceryList: action.payload.groceryList
            }
        case groceryType.UPDATE_AMOUNT:
            return {
                ...state,
                amount: action.payload.amount
            }
        default:
            break;
    }
    return state;
}