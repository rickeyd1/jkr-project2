export const logoutTypes = {
    LOGGED_OUT: 'LOGGED_OUT',
    SESSION_CLEAR: 'SESSION_HAS_CLEARED',
    STORAGE: 'STORAGE_DELETED'
}

export const logout = () => async() => {
    try {
      localStorage.clear();
      const resp = await fetch('http://localhost:8081/user/logout', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({}),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(resp);
    } catch (err) {
      console.trace(err);
    }
}