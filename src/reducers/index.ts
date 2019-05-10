import { combineReducers } from "redux";
import { dummyReducer } from "./dummy.reducer"


export interface IDumState {
    dumMessage?: String
}

export interface IState {
    dum: IDumState
}

export const state = combineReducers<IState>({
    dum: dummyReducer
})