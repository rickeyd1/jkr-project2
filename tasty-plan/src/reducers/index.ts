import { combineReducers } from 'redux';
import { dummyReducer } from "./dummy.reducer"
import { Ingredients } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
import { Recipe } from "../model/recipe";
import { Groceries } from "../model/grocery";
import { groceryReducer } from "./grocery.reducer";
import { recipeReducer } from "./recipe.reducer";
import { User } from "../model/user";
import { loginReducer } from './login.reducer';
import { menuReducer } from './menuReducer';
import { GroceryIngredients } from '../model/grocery-ingredients';
import { signupReducer } from './sign-up.reducer';


export interface IDumState {
    dumMessage?: string
}

export interface IMenuState{
    visible: boolean
}

export interface IGroceryState {
    groceryList: GroceryIngredients[];
    amount: number;
}

export interface IIngredientState {
    ingredient?: Ingredients,
    displayMessage?: string
}

export interface IRecipeState {
    recipe?: Recipe,
    displayMessage?: String
}

export interface ILoginState {
    username: string;
    password: string;
    user: User;
    errorMessage: string;
}

export interface ISignUpState {
    name: string;
    email: string;
    username: string;
    password: string;
}

export interface IState {
    dum: IDumState,
    ingre: IIngredientState,
    groceries: IGroceryState,
    recipe: IRecipeState,
    login: ILoginState,
    menu: IMenuState,
    signup: ISignUpState
}

export const state = combineReducers<IState>({
    dum: dummyReducer,
    ingre: ingredientReducer,
    groceries: groceryReducer,
    recipe: recipeReducer,
    login: loginReducer,
    menu: menuReducer,
    signup: signupReducer
})