export const dumTypes = {
    DUMMY_VALUE: 'THERE IS A VALUE',
    DUMMY_CHECK: 'CHECK IS NOW DONE'
}

export const dummy = () =>(dispatch) => {
    //Connections will go here most of the time.

    dispatch({
        type: dumTypes.DUMMY_VALUE //This will be dispatch to the state store then to the reducer. (State store is setup already)
    })
}