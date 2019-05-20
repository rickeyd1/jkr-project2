export const ingredientType = {
    INGREDIENT_SUCCESS: 'INGREDIENT_SUCCESS',
    INGREDIENT_FAILED: 'INGREDIENT_FAILED',
    INGREDIENT_NONE: 'INGREDIENT_NONE'
}

export const findIngredientByType = (id) => async(dispatch) => {
    try {
        const resp = await fetch(`http://localhost:8080/ingredient/${id}`, {
            method: 'GET',
            credentials: 'include'
        });
        const body = await resp.json();
        if (resp.status === 401) {
            dispatch (
                {
                    type: ingredientType.INGREDIENT_NONE
                }
            )
        } else if (resp.status === 200) {
            dispatch({
                type: ingredientType.INGREDIENT_SUCCESS,
                payload : {
                    ingredient : body
                }
            })
        } else {
            dispatch ({
                type: ingredientType.INGREDIENT_FAILED
            })
        }
    } catch (err) {
        console.trace(err);
    }
}

