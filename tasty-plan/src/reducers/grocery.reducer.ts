import { IGroceryState } from ".";
import { groceryType } from '../actions/grocery.action';

const initialState: IGroceryState = {
    groceryList: []
}

export const groceryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case groceryType.GET_LIST:
            // console.log(action.payload.groceryList);
            return {
                ...state,
                groceryList: action.payload.groceryList
            }
        case groceryType.LIST_UPDATE:
            return {
                ...state
            }
        case groceryType.ENTRY_DELETE:
            return {
                ...state
            }
        default:
            break;
    }
    return state;
}