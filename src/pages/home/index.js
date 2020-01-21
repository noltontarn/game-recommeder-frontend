import React, {
    useEffect,
    useState,
} from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import { testSelector } from '../../redux/test/selectors'
import { Link } from 'react-router-dom'
import { setTest, fetchTest, fetchTest2 } from '../../redux/actions'

const Background = styled.div`
    background: MidnightBlue;
    //display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -10;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
`

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
`

const InputBox = styled.input`
    margin: 10px;
`

const Button = styled.button`
    color: white;
    background: gray;
    padding: 5px 10px;
    border-width: 0px;
    cursor: pointer;
    border-radius: 4px;
`

function Home(props) {
    const test = useSelector(testSelector)
    const dispatch = useDispatch()
    const textChange = event => {
        dispatch(setTest(event.target.value))
    }

    const fetchButton = event => {
        dispatch(fetchTest())
    }

    const fetchButton2 = event => {
        fetchTest2(dispatch)
    }

    
    useEffect(() => {
        console.log(test)
    }, [test])


    return (
        <React.Fragment>
        <Div>
            <Grid>
                <InputBox type='text' value={test} onChange={event => textChange(event)}></InputBox>
                <Link to='/etc'>
                    <Button>Submit</Button>
                </Link>
                <Button onClick={event => fetchButton(event)}>Fetch</Button>
                <Button onClick={event => fetchButton2(event)}>Fetch2</Button>
            </Grid>
        </Div>
        <Background>
            <Particles
                params={{
                    particles: {
                        color: {
                            value: "#DCDCDC"
                        },
                        opacity: {
                            value: 1,
                            random: false,
                            // "anim": {
                            //   "enable": false,
                            //   "speed": 1,
                            //   "opacity_min": 0.1,
                            //   "sync": false
                            // }
                        },
                        line_linked: {
                            enable: true,
                            distance: 100,
                            color: "#DCDCDC",
                            opacity: 0.75,
                            width: 2
                        },
                    }
                }} 
            />
        </Background>
        </React.Fragment>
    )
}

export default Home