import { Recipe } from "../model/recipe";

export const recipeType = {
    NO_INGREDIENTS: 'NO_INGREDIENT',
    RECIPE_SUCCESS: 'RECIPE_SUCCESSFUL',
    RECIPE_FAILED: 'RECIPE_FAILED',
    CALORY_UPDATED : 'CALORY_UPDATED',
    RECIPE_NAME_UPDATED : 'RECIPE_NAME_UPDATED',
}

export const recipeSet = (recipeId : number,recipeName: string, totalcalorie: number, category:undefined, user:undefined, meal:undefined) => async (dispatch) => {
    try {
        const newRecipe = {
            recipeId: 0,
            recipeName: recipeName,
            calories: totalcalorie
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

export const setCalories = (e) =>  {
    return {
        payload : {
            totalcalories: +e.target.value
        },
        type: recipeType.CALORY_UPDATED
    }
}

export const setRecipeName = (e) =>  {
    return {
        payload : {
            recipeName : e.target.value
        },
        type: recipeType.RECIPE_NAME_UPDATED
    }
}