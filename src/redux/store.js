import {
    combineReducers,
    createStore,
} from 'redux'

import test from './test/reducer'

const reducers = combineReducers({
    test,
})

export const store = createStore(reducers)