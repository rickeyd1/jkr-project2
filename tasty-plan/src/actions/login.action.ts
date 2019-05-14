export const authTypes = {
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    FAILED_TO_LOGIN: 'FAILED_TO_LOGIN',
    LOGGED_IN: 'LOGGED_IN'
}

export const login = (username: string, password: string, history: any) => async(dispatch) => {
    try {
      const resp = await fetch('EnviromentVariableGoesHere(Dev)', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({username, password}),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (resp.status === 401) {
        dispatch({
          type: authTypes.INVALID_CREDENTIALS
        })
      } else if (resp.status === 200) {
        const user = await resp.json();
        const role = user.role;
        dispatch({
          payload: {
            user,
            role
          },
          type: authTypes.LOGGED_IN
        })
        history.push('/home');
      } else {
        dispatch({
          type: authTypes.FAILED_TO_LOGIN
        })
      }
    } catch (err) {
      console.log(err);
    }
}
