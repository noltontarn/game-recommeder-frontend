import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const Background = styled.div`
    background: MidnightBlue;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`

function Home(props) {



    return (
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
    )
}

export default Home