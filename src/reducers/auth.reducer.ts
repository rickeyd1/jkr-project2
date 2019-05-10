import { IAuthState } from ".";
import { authTypes } from "../actions/auth.actions";

const initialState: IAuthState = {
    role: undefined,
    currentUser: undefined,
    errorMessage: undefined
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case authTypes.FAILED_TO_LOGIN:
        return {
          ...state,
          errorMessage: 'Failed to Login try again later.'
        }
      case authTypes.INVALID_CREDENTIALS:
        return {
          ...state,
          errorMessage: 'Invalid Credentials'
        }
      case authTypes.LOGGED_IN:
        return {
          ...state,
          currentUser: action.payload.user,
          role: action.payload.role
        }
      default:

    }
    return state;
  }