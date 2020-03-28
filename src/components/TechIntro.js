import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './TechIntro.css'
export default class TechIntro extends Component {
    render() {
        const { title, intro, time, id } = this.props.techIntro
        return (
            <div className='tech-con'>
                <div className='tech-title'>
                    {title}
                </div>
                <div className='tech-time'>
                    trickyPi | {time}
                </div>
                <div className='tech-intro-con'>
                    {intro}
                </div>
                <Link
                    style={{ textDecoration: 'none' }}
                    to={'/look/techCon/tech/' + id}>
                    <div className='tech-read-more'>
                        阅读全文 >>
                    </div>
                </Link>

            </div>
        )
    }
}
