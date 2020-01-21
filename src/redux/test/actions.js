import { fetchForJson } from '../../helpers/fetch'

export const setTest = test => {
    return {
        type: 'SET_TEST',
        test
    }
}

export const fetchTest = (testNumber=1) => {
    return async function(dispatch) {
        const data = await fetchForJson(`https://jsonplaceholder.typicode.com/todos/${testNumber}`)
        dispatch(setTest(data))
    }
}

export const fetchTest2 = async dispatch => {
    const data = await fetchForJson(`https://jsonplaceholder.typicode.com/todos/2`)
    dispatch(setTest(data))
}