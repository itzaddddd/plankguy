import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

// ...
// ...Initial state
// ...
const initialState = {
    user: undefined
};

// ...
// ...Reducer
// ...
const reducer = (state = initialState, action) => {
    switch(action.type){
        case "setUser":
            return {
                ...state,
                user: action.user
            }
        case "signOut":
            return {
                state
            }
        default:
            return state
    }
};

// ...
// ...Store
// ...
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export {store};

// ...
// ...Action
// ...
const setUser = user => {
    return {
        type: 'setUser',
        user: user
    }
}

const signOut = () => {
    return {
        type: 'signOut'
    }
}
export {setUser, signOut}