<<<<<<< HEAD
import { Recipe } from "../model/recipe";
import { User } from "../model/user";
=======
import { Ingredients } from "../model/ingredient";
>>>>>>> grocery-list

export const recipeType = {
    NO_INGREDIENTS: 'NO_INGREDIENT',
    RECIPE_SUCCESS: 'RECIPE_SUCCESSFUL',
    RECIPE_FAILED: 'RECIPE_FAILED',
    CALORY_UPDATED: 'CALORY_UPDATED',
    CATEGORY_UPDATED: 'CATEGORY_UPDATED',
    RECIPE_NAME_UPDATED: 'RECIPE_NAME_UPDATED',
    ALL_RECIPES_SUCCESS: 'ALL_RECIPES_SUCCESS',
    ALL_RECIPES_FAILURE: 'ALL_RECIPES_FAILURE',
    RECIPE_UPDATED: 'RECIPE_UPDATED',
    INGREDIENT_UPDATE_1: 'INGREDIENT_UPDATE_1',
    INGREDIENT_UPDATE_2: 'INGREDIENT_UPDATE_2',
    INGREDIENT_UPDATE_3: 'INGREDIENT_UPDATE_3',
    AMOUNT_UPDATE_1: 'AMOUNT_UPDATE_1',
    AMOUNT_UPDATE_2: 'AMOUNT_UPDATE_2',
    AMOUNT_UPDATE_3: 'AMOUNT_UPDATE_3',
    REC_INGREDIENT_CREATE: 'REC_INGREDIENT_CREATE',
    USER_RECIPES_GET: 'USER_RECIPES_GET',
    REC_INGREDIENT_GET: 'REC_INGREDIENT_GET'
}

<<<<<<< HEAD
export const createRecipeIngredient = (newRecipe: Recipe, ingIdOne: number, ingIdTwo: number, ingIdThree: number,
    amountOne: number, amountTwo: number, amountThree: number) => async (dispatch) => {
        try {
            const newRecipeIngr = {
                recipe: {
                    recipeId: newRecipe.recipeId
                },
                ingredient: {
                    ingredientsId: ingIdOne
                },
                amount: amountOne
            }

            await fetch('http://localhost:8080/recipe-ingredient', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(newRecipeIngr),
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (ingIdTwo > 0) {
                const newRecipeIngr2 = {
                    recipe: {
                        recipeId: newRecipe.recipeId
                    },
                    ingredient: {
                        ingredientsId: ingIdTwo
                    },
                    amount: amountTwo
                }

                await fetch('http://localhost:8080/recipe-ingredient', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(newRecipeIngr2),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
            }

            if (ingIdThree > 0) {
                const newRecipeIngr3 = {
                    recipe: {
                        recipeId: newRecipe.recipeId
                    },
                    ingredient: {
                        ingredientsId: ingIdThree
                    },
                    amount: amountThree
                }

                await fetch('http://localhost:8080/recipe-ingredient', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(newRecipeIngr3),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
            }
            dispatch({
                type: recipeType.REC_INGREDIENT_CREATE
            })

        } catch (err) {

        }
    }

export const updateIngrOne = (event) => {
    return {
        payload: {
            ingredient1: event.target.value
        },
        type: recipeType.INGREDIENT_UPDATE_1
    }
}

export const updateIngrTwo = (event) => {
    return {
        payload: {
            ingredient2: event.target.value
        },
        type: recipeType.INGREDIENT_UPDATE_2
    }
}

export const updateIngrThree = (event) => {
    return {
        payload: {
            ingredient3: event.target.value
        },
        type: recipeType.INGREDIENT_UPDATE_3
    }
}

export const updateAmountOne = (event) => {
    return {
        payload: {
            amount1: event.target.value
        },
        type: recipeType.AMOUNT_UPDATE_1
    }
}

export const updateAmountTwo = (event) => {
    return {
        payload: {
            amount2: event.target.value
        },
        type: recipeType.AMOUNT_UPDATE_2
    }
}

export const updateAmountThree = (event) => {
    return {
        payload: {
            amount3: event.target.value
        },
        type: recipeType.AMOUNT_UPDATE_3
    }
}

export const recipeSet = (recipeId: number, recipeName: string, totalcalorie: number, category: number, user: undefined, meal: undefined) => async (dispatch) => {
=======
export const recipeSet = (ingredient: Ingredients, totalCalories: number) => async (dispatch) => {
>>>>>>> grocery-list
    try {
        const newRecipe = {
            recipeId: 0,
            recipeName: recipeName,
            calories: totalcalorie,
            category: {
                categoryId: category
            },
            user: {
                userId: 1
            }
        }
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
                    recipe: recipe
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
export const addIngredient = (e) => async (dispatch) => {
    try {
        const updatedIngredient = {
        }
    }
    catch (err) {
        console.trace(err);
    }
}

export const findUserRecipes = (user: User) => async (dispatch) => {
    try {
        const resp = await fetch('http://localhost:8080/recipe/user/' + user.userId, {
            credentials: 'include'
        });
        const body = await resp.json();
        dispatch({
            payload: {
                recipe: body
            },
            type: recipeType.USER_RECIPES_GET
        })
    } catch (err) {

    }
}

export const findRecipeIngredients = (recipe: Recipe) => async (dispatch) => {
    try {
        const resp = await fetch('http://localhost:8080/recipe-ingredient/recipe/' + recipe.recipeId, {
            credentials: 'include'
        })
        const body = await resp.json();
        console.log(body);
        dispatch({
            payload: {
                recipeIngredients: body
            },
            type: recipeType.REC_INGREDIENT_GET
        })
    } catch (err) {

    }
}

export const findAllRecipe = () => async (dispatch) => {
    try {
        const resp = await fetch('http://localhost:8080/recipe-ingredient/all', {
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
            console.log(body);
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