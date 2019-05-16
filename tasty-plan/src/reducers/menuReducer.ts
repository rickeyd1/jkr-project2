import { IMenuState } from ".";
import { menuTypes } from "../actions/menu.actions";

const initialState: IMenuState = {
    visible: false
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case menuTypes.TOGGLE_VISIBLE:
            return {
                ...state,
                visible: !state.visible
            }
        default:
            break;
    }

    return state;
}