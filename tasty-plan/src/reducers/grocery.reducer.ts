import { IGroceryState } from ".";
import { groceryType } from '../actions/grocery.action';

const initialState: IGroceryState = {
    groceryList: undefined
}

export const groceryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case groceryType.GET_LIST:
            // console.log(action.payload.groceryList);
            return {
                ...state,
                groceryList: action.payload.groceryList
            }
        default:
            break;
    }
    return state;
}