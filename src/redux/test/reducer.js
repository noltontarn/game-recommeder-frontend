const initialState = { test:'' }

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SET_TEST':
            return Object.assign({}, {
                test: action.test
            })

        default:
            return state
    }
}