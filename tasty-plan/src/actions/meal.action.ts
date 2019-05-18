import { Recipe } from "../model/recipe";
import { Datemeal } from "../model/datemeal";

export const MealType = {
    MEAL_SUCCESS: 'MEAL_IS_SUCCESSFUL',
    MEAL_FAILURE: 'MEAL_IS_FAILURE'
}

export const meal = (mealName: string, size: number, recipe = new Recipe, datemeal = new Datemeal) => async (dispatch) => {
    const resp = await fetch("http://localhost:8080/meal", {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({mealName, size, recipe, datemeal}),
        headers: {
            'content-type':'application/json'
        }
    });
    if (resp.status === 401) {
        dispatch({
            type: MealType.MEAL_FAILURE
        })
    } else if (resp.status === 200) {
        const meal = await resp.json();
        dispatch({
            type: MealType.MEAL_SUCCESS,
            payload: {
               meal
            }
        })
    }
}