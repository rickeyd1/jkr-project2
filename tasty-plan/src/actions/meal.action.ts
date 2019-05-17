export const MealType = {
    MEAL_SUCCESS: 'MEAL_IS_SUCCESSFUL',
    MEAL_FAILURE: 'MEAL_IS_FAILURE'
}

export const meal = (mealName: string, ) => async (dispatch) => {
    const resp = await fetch("http://localhost:8080/meal", {
        method: 'POST',
        credentials: 'include'
        body: 
    })
}