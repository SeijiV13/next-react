import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import blogs from './blog/reducer'

const bindMiddleWare = (middleware) => {
    return applyMiddleware(...middleware);
}

export const initStore = () => {
    return createStore( 
        // this is where all reducers go
        combineReducers({
            blogs
        }),
        bindMiddleWare([thunkMiddleWare])
    )
}