export const ingredientType = {
    INGREDIENT_SUCCESS: 'INGREDIENT_SUCCESS',
    INGREDIENT_FAILED: 'INGREDIENT_FAILED',
    INGREDIENT_NONE: 'INGREDIENT_NONE'
}

export const ingredient = () => async(dispatch) => {
    try {
        const resp = await fetch('FETCHING INGREIDENTS OR CHECKING?', {
            method: 'GET',
            credentials: 'include'
        });

        //If there no ingredient
        if (resp.status === 401) {
            dispatch = {
                type: ingredientType.INGREDIENT_NONE
            }
        } else if (resp.status === 200) {
            dispatch = {
                type: ingredientType.INGREDIENT_SUCCESS
            }
        } else {
            dispatch = {
                type: ingredientType.INGREDIENT_FAILED
            }
        }
    } catch (err) {
        console.trace(err);
    }
}