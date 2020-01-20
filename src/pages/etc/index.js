import React from 'react'
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import { testSelector } from '../../redux/test/selectors'

function ETC(props) {
    const test = useSelector(testSelector)
    console.log('test', test)

    return (
        <div>
            ETC
            {test}
        </div>
    )
}

export default ETC