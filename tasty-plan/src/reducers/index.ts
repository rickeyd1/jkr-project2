import { combineReducers } from 'redux';
<<<<<<< HEAD
import { Ingredient } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
import { Grocery } from "../model/grocery";
=======
import { dummyReducer } from "./dummy.reducer"
import { Ingredients } from "../model/ingredient";
import { ingredientReducer } from "./ingredient.reducer";
import { Recipe } from "../model/recipe";
>>>>>>> grocery-list
import { groceryReducer } from "./grocery.reducer";
import { recipeReducer } from "./recipe.reducer";
import { User } from "../model/user";
import { loginReducer } from './login.reducer';
<<<<<<< HEAD
import { Recipe } from '../model/recipe';
import { FoodType } from '../model/foodType';
import { RecipeIngredient } from '../model/recipe_ingredient';
=======
import { menuReducer } from './menuReducer';
import { GroceryIngredients } from '../model/grocery-ingredients';
import { signupReducer } from './sign-up.reducer';
>>>>>>> grocery-list


export interface IIngredientState {
    ingredientsId: number;
    name: String;
    calories: number;
    foodType: FoodType;
    ingredientList : Ingredient[]
}

<<<<<<< HEAD
export interface IRecipeState {
    recipeId?: number,
    recipeName? : string,
    totalcalorie?: number,
    category? : number,
    user? : User,
    ingredient?: Ingredient,
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
=======
export interface IMenuState{
    visible: boolean
}

export interface IGroceryState {
    groceryList: GroceryIngredients[];
}

export interface IIngredientState {
    ingredient?: Ingredients,
    displayMessage?: string
>>>>>>> grocery-list
}

export interface IMealState {
    mealId? : number,
    mealName? : string,
    size : number,
    user : User
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
<<<<<<< HEAD
    ingredient: IIngredientState,
    grocery: IGroceryState,
=======
    dum: IDumState,
    ingre: IIngredientState,
    groceries: IGroceryState,
>>>>>>> grocery-list
    recipe: IRecipeState,
    login: ILoginState,
    menu: IMenuState,
    signup: ISignUpState
}

export const state = combineReducers<IState>({
<<<<<<< HEAD
    ingredient: ingredientReducer,
    grocery: groceryReducer,
=======
    dum: dummyReducer,
    ingre: ingredientReducer,
    groceries: groceryReducer,
>>>>>>> grocery-list
    recipe: recipeReducer,
    login: loginReducer,
    menu: menuReducer,
    signup: signupReducer
})