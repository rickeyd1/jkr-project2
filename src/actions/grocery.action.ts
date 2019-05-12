export const groceryType = {
    GROCERY_SUCCESS: 'GROCERY_SUCCESS_UPDATE',
    GROCERY_FAILED: 'GROCERY_FAILED_UPDATE',
    GROCERY_UPDATE: 'GROCERY_UPDATE'
}

export const grocery = () => async (dispatch) => {
    //Grocery list will be updated and sent to the state store through
    //the dispatcher.
    try {
        const resp = await fetch('I AM FETCHING UPDATED LIST', {
            method: 'GET',
            credentials: 'include'
        })

        if(resp.status === 401) {
            dispatch = {
                type: groceryType.GROCERY_UPDATE
            }
        } else if (resp.status === 200) {
            dispatch = {
                type: groceryType.GROCERY_SUCCESS
                // payload will be added here. soon
            }
        } else {
            dispatch = {
                type: groceryType.GROCERY_FAILED
            }
        }
    } catch (err) {
        console.trace(err);
    }
}