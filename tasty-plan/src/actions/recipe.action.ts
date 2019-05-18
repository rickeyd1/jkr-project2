import { Category } from "../model/category";

export const recipeType = {
    NO_INGREDIENTS: 'NO_INGREDIENT',
    RECIPE_SUCCESS: 'RECIPE_SUCCESSFUL',
    RECIPE_FAILED: 'RECIPE_FAILED',
    CALORY_UPDATED: 'CALORY_UPDATED',
    CATEGORY_UPDATED: 'CATEGORY_UPDATED',
    RECIPE_NAME_UPDATED: 'RECIPE_NAME_UPDATED',
    ALL_RECIPES_SUCCESS: 'ALL_RECIPE_SUCCESS',
    ALL_RECIPES_FAILURE: 'ALL_RECIPE_FAILURE'
}

export const recipeSet = (recipeId: number, recipeName: string, totalcalorie: number, category: number, user: undefined, meal: undefined) => async (dispatch) => {
    try {
        const newRecipe = {
            recipeId: 0,
            recipeName: recipeName,
            calories: totalcalorie,
            category: {
                categoryId : category
            }
        }

        console.log(JSON.stringify(newRecipe));
        const resp = await fetch('http://localhost:8080/recipe', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(newRecipe),
            headers: {
                'content-type': 'application/json'
            }
        })
        //RESP STATUS NEED TO BE CHANGE TO NO DATA!
        if (resp.status === 401) {
            dispatch({
                type: recipeType.NO_INGREDIENTS
            })
        } else if (resp.status === 200) {
            const recipe = await resp.json();
            dispatch({
                type: recipeType.RECIPE_SUCCESS,
                payload: {
                    recipe
                }
            })
        } else {
            dispatch({
                type: recipeType.RECIPE_FAILED
            })
        }
    } catch (err) {
        console.trace(err);
    }
}

export const findAllRecipe = () => async (dispatch) => {
    try {
        const resp = await fetch('http://localhost:8080/recipe', {
            credentials: 'include'
        })
        if (resp.status === 401) {
            console.log("401 error");
            dispatch({
                type: recipeType.ALL_RECIPES_FAILURE
            })
        }
        else if (resp.status === 200) {
            const body = await resp.json();
            dispatch({
                type: recipeType.ALL_RECIPES_SUCCESS,
                payload: {
                    recipe: body
                }
            })
        }
        else {
            console.log("something weird");
            dispatch({
                type: recipeType.ALL_RECIPES_FAILURE
            })
        }
    } catch (err) {
        console.trace(err);
    }
}

export const setCalories = (e) => {
    return {
        payload: {
            totalcalories: +e.target.value
        },
        type: recipeType.CALORY_UPDATED
    }
}

export const setRecipeName = (e) => {
    return {
        payload: {
            recipeName: e.target.value
        },
        type: recipeType.RECIPE_NAME_UPDATED
    }
}

export const setCategory = (e) => {
    let categoryValue = e.target.value;
    let categoryNumber = 0;
    switch (categoryValue) {
        case 'Sandwich':
            categoryNumber = 1;
            break;
        case 'Smoothy':
            categoryNumber = 2;
            break;
        case 'Breakfast':
            categoryNumber = 3;
            break;
        case 'Salad':
            categoryNumber = 4;
            break;
        case 'Tacos':
            categoryNumber = 5;
            break;
        case 'Pasta':
            categoryNumber = 6;
            break;
        case 'Plated Meals':
            categoryNumber = 7;
            break;
        case 'Dessert':
            categoryNumber = 8;
            break;
        case 'Soup':
            categoryNumber = 9;
            break;
        default:
            break;
    }
    return {
        payload: {
            category: categoryNumber
        },
        type: recipeType.CATEGORY_UPDATED
    }
}