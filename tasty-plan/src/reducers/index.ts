import { combineReducers } from 'redux';
import { Ingredients } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
import { Groceries } from "../model/grocery";
import { Recipe } from "../model/recipe";
import { groceryReducer } from "./grocery.reducer";
import { recipeReducer } from "./recipe.reducer";
import { User } from "../model/user";
import { loginReducer } from './login.reducer';
import { menuReducer } from './menuReducer';
import { GroceryIngredients } from '../model/grocery-ingredients';
import { signupReducer } from './sign-up.reducer';
import { FoodType } from '../model/foodType';
import { RecipeIngredient } from '../model/recipe_ingredient';


export interface IIngredientState {
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;
    ingredientList : Ingredients[]
}

export interface IRecipeState {
    recipeId?: number,
    recipeName? : string,
    totalcalorie?: number,
    category? : number,
    user? : User,
    ingredient?: Ingredients,
    displayMessage?: String,
    recipeList : Recipe[],
    recipeIngredientList: RecipeIngredient[],
    ingred1: number,
    ingred2: number,
    ingred3: number,
    amount1: number,
    amount2: number,
    amount3: number,
    newRecipe: Recipe
}
export interface IMenuState{
    visible: boolean
}

export interface IGroceryState {
    groceryList: GroceryIngredients[];
}

export interface IIngredientState {
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;
    ingredientList : Ingredients[]
}

export interface IRecipeState {
    recipeId?: number,
    recipeName? : string,
    totalcalorie?: number,
    category? : number,
    user? : User,
    ingredient?: Ingredients,
    displayMessage?: String,
    recipeList : Recipe[],
    recipeIngredientList: RecipeIngredient[],
    ingred1: number,
    ingred2: number,
    ingred3: number,
    amount1: number,
    amount2: number,
    amount3: number,
    newRecipe: Recipe
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
    ingredient: IIngredientState,
    grocery: IGroceryState,
    recipe: IRecipeState,
    login: ILoginState,
    menu: IMenuState,
    signup: ISignUpState
}

export const state = combineReducers<IState>({
    ingredient: ingredientReducer,
    grocery: groceryReducer,
    recipe: recipeReducer,
    login: loginReducer,
    menu: menuReducer,
    signup: signupReducer
})