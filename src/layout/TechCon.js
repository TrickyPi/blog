import React, { Component } from 'react'
import TechIntro from '../components/TechIntro'
import { mdArr } from '../assets/md'
export default class TechCon extends Component {
    render() {
        return (
            <div
                className='tech'
                style={techStyle}>
                {
                    mdArr.map(
                        item => (
                            <TechIntro
                                techIntro={item}
                                key={item.id}></TechIntro>
                        )
                    )
                }
            </div>
        )
    }
}

const techStyle = {
    paddingTop: '60px',
    textAlign: 'center'
}