import React, { Component } from 'react'
import Poem from '../components/Poem'
import { frustrated } from '../assets/poetry'
export default class Home extends Component {
    render() {
        return (
            <div style={homeStyle}>
                <Poem
                    poemItem={frustrated.slice(1, 2)[0]}></Poem>
            </div>
        )
    }
}

const homeStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
}