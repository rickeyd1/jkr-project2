import { IDumState } from ".";
import { dumTypes } from "../actions/dummy.action";

const initialState: IDumState = {
    dumMessage: undefined
}

export const dummyReducer = (state = initialState, action) => {
    switch (action.type) {
        case dumTypes.DUMMY_VALUE:
            return {
                ...state,
                dumMessage: 'This is a dummy test for Redux'
            }
    
        default:
        case dumTypes.DUMMY_CHECK:
            return {
                ...state,
                dumMessage: 'All checks has been passed'
            }
    }
}