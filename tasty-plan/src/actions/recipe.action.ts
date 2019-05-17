import { Ingredients } from "../model/ingredient";

export const recipeType = {
    NO_INGREDIENTS: 'NO_INGREDIENT',
    RECIPE_SUCCESS: 'RECIPE_SUCCESSFUL',
    RECIPE_FAILED: 'RECIPE_FAILED',
}

export const recipeSet = (ingredient: Ingredients, totalCalories: number) => async (dispatch) => {
    try {
        const resp = await fetch('FETCHING_RECIPES', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ingredient, totalCalories}),
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