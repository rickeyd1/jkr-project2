export const signUpTypes = {
    NEW_USER: 'NEW_USER',
    UPDATE_SIGNUP_NAME: 'UPDATE_SIGNUP_NAME',
    UPDATE_SIGNUP_EMAIL: 'UPDATE_SIGNUP_EMAIL',
    UPDATE_SIGNUP_USERNAME: 'UPDATE_SIGNUP_USERNAME',
    UPDATE_SIGNUP_PASSWORD: 'UPDATE_SIGNUP_PASSWORD'
}

export const createUser = (name: string, email: string, username: string, password: string, event, history) => async (dispatch) => {
  event.preventDefault();
  const newUser = {
    name: name,
    email: email,
    username: username,
    password: password
  }
  console.log('Creating a new user');
  try {
    // Fetch call to create a new user
    const resp = await fetch('http://localhost:8080/user', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newUser),
      headers: {
        'content-type': 'application/json'
      }
    });

    const body = await resp.json();

    const newList = {
      groceryUser: {
        userId: body.userId
      }
    }

    // Fetch call to create a grocery list for that user
    await fetch('http://localhost:8080/groceries', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newList),
      headers: {
        'content-type': 'application/json'
      }
    });

    history.push('/login');
    dispatch({
      type: signUpTypes.NEW_USER
    })

  } catch (err) {
    console.log(err);
  }

}

export const updateSignUpName = (event) => {
  return {
    payload: {
      name: event.target.value
    },
    type: signUpTypes.UPDATE_SIGNUP_NAME
  }
}

export const updateSignUpEmail = (event) => {
  return {
    payload: {
      email: event.target.value
    },
    type: signUpTypes.UPDATE_SIGNUP_EMAIL
  }
}

export const updateSignUpUsername = (event) => {
  return {
    payload: {
      username: event.target.value
    },
    type: signUpTypes.UPDATE_SIGNUP_USERNAME
  }
}

export const updateSignUpPassword = (event) => {
  return {
    payload: {
      password: event.target.value
    },
    type: signUpTypes.UPDATE_SIGNUP_PASSWORD
  }
}