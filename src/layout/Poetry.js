import React, { Component } from 'react'
import Poem from '../components/Poem'
import { poetryLove,frustrated} from '../assets/poetry'

export default class Poetry extends Component {
    render() {
        const renderPoetry = [...poetryLove,...frustrated]
        return (
            <div className='home-container' style={poetryConStyle}>
                {
                    renderPoetry.map(
                        item => (
                            <Poem
                                poemItem={item}
                                key={item.id}></Poem>
                        )
                    )
                }
            </div>
        )
    }
}

const poetryConStyle ={
    paddingTop:"30px"
}
