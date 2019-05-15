import { ILoginState } from ".";
import { loginTypes } from "../actions/login.action";

const initialState: ILoginState = {
    username: '',
    password: '',
    user: undefined,
    errorMessage: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.LOGGED_IN:
            return {
                ...state,
                user: action.payload.user
            }
        case loginTypes.UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload.username
            }
        case loginTypes.UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }
        case loginTypes.UPDATE_ERROR:
            return {
                ...state,
                errorMessage: 'Invalid Credentials'
            }
        case loginTypes.LOGIN_FAILED:
            return {
                ...state,
                errorMessage: 'Unable to Login, Please try again later'
            }
        default:
            break;
    }

    return state;
}