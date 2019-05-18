import { ISignUpState } from ".";
import { signUpTypes } from "../actions/signup.action";

const intialState: ISignUpState = {
    name: '',
    email: '',
    username: '',
    password: ''
}

export const signupReducer = (state = intialState, action) => {
    switch(action.type) {
        case signUpTypes.NEW_USER:
            return {
                ...state
            }
        case signUpTypes.UPDATE_SIGNUP_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        case signUpTypes.UPDATE_SIGNUP_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        case signUpTypes.UPDATE_SIGNUP_USERNAME:
            return {
                ...state,
                username: action.payload.username
            }
        case signUpTypes.UPDATE_SIGNUP_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }
        default:
            break;
    }

    return state;
}