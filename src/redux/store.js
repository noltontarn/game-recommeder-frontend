import {
    combineReducers,
    createStore,
    applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'

import test from './test/reducer'

const reducers = combineReducers({
    test,
})

const middlewares = [thunk]

export const store = createStore(reducers, applyMiddleware(...middlewares))