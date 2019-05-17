import { User } from "../model/user";

export const groceryType = {
    GET_LIST: 'GET_LIST',
    UPDATE_AMOUNT: 'UPDATE_AMOUNT'
}

export const getUserGroceryList = () => async (dispatch) => {
    try {
        // Gets the current user's grocery list by their id.
        const resp = await fetch('http://localhost:8080/groceries/user/1', {
            credentials: 'include'
        });
        const body = await resp.json();

        // Second fetch call will get the junction table between grocery list and ingredients to
        // allow us access to the ingredients associated with a user's grocery list.
        const resp2 = await fetch('http://localhost:8080/grocery/ingredients/lists/' + body[0].groceryInt, {
            credentials: 'include'
        });
        const body2 = await resp2.json();
        // console.log(`${body2[0].ingredient.name}: ${body2[0].amount} ${body2[0].ingredient.foodType.units.unitName}`);
        dispatch({
            payload: {
                groceryList: body2
            },
            type: groceryType.GET_LIST
        })

    } catch (err) {
        console.log(err);
    }
}

export const updateAmount = (event) => async (dispatch) => {
    dispatch({
        payload: {
            amount: event.target.value
        },
        type: groceryType.UPDATE_AMOUNT
    })
}