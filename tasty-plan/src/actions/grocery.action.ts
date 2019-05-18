import { User } from "../model/user";

export const groceryType = {
    GET_LIST: 'GET_LIST',
    LIST_UPDATE: 'LIST_UPDATE',
    ENTRY_DELETE: 'ENTRY_DELETE'
}

export const deleteGroceryIngredient = (id: number) => async (dispatch) => {
    try {
        const resp = await fetch('http://localhost:8080/grocery/ingredients/' + id, {
            method: 'DELETE',
            credentials: 'include'
        });

        const body = await resp.json();
        console.log(body);

        dispatch({
            type: groceryType.ENTRY_DELETE
        })

    } catch (err) {
        console.log(err);
    }
}

export const updateGroceryIngredient = (amount: number, id: number) => async (dispatch) => {
    try {
        const updateObj = {
            id: id,
            amount: amount 
        }

        const resp = await fetch('http://localhost:8080/grocery/ingredients', {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify(updateObj),
            headers: {
                'content-type': 'application/json'
            }
        });

        const body = await resp.json();
        console.log(body);

        dispatch({
            type: groceryType.LIST_UPDATE
        });

    } catch (err) {
        console.log(err);
    }
}

export const getUserGroceryList = (user: User) => async (dispatch) => {
    try {
        // Gets the current user's grocery list by their id.
        const resp = await fetch('http://localhost:8080/groceries/user/' + user.userId, {
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
        });

    } catch (err) {
        console.log(err);
    }
}