export const loginTypes = {
    LOGGED_IN: 'LOGGED_IN',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_ERROR: 'UPDATE_ERROR',
    LOGIN_FAILED: 'LOGIN_FAILED',
    NAVIGATE: 'NAVIGATE'
}

export const submitLogin = (username: string, password: string, event, history) => async (dispatch) => {
    event.preventDefault();
    const credentials = {
        username: username,
        password: password
    };
    console.log("Logging In");
    try{
        const resp = await fetch('http://localhost:8080/user/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(credentials),
            headers: {
                'content-type': 'application/json'
            }
        });

        console.log(resp);
        if (resp.status === 400){
            dispatch({
                type: loginTypes.UPDATE_ERROR
            })
        } else if (resp.status === 201) {
            const body = await resp.json();
            history.push('/meal');
            dispatch({
                payload: {
                    user: body
                },
                type: loginTypes.LOGGED_IN
            })
        } else {
            dispatch({
                type: loginTypes.LOGIN_FAILED
            })
        }
    } catch (err) {
        console.log(err);
    }
}

export const updateUsername = (event) => {
    return {
        payload: {
            username: event.target.value
        },
        type: loginTypes.UPDATE_USERNAME
    }
}

export const updatePassword = (event) => {
    return {
        payload: {
            password: event.target.value
        },
        type: loginTypes.UPDATE_PASSWORD
    }
}

export const goToSignUp = (event, history) => {
    history.push("/signup");
    return {
        type: loginTypes.NAVIGATE
    }
}