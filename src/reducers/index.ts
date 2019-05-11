import { combineReducers } from "redux";
import { dummyReducer } from "./dummy.reducer"
import { User } from "../model/user";
import { authReducer } from "./auth.reducer";


export interface IDumState {
    dumMessage?: String
}

export interface IAuthState {
    currentUser?: User,
    errorMessage?: string
}

export interface IState {
    dum: IDumState,
    auth: IAuthState
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    auth: authReducer
})