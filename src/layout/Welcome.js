import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends Component {
    render() {
        return (
            <div className="topic" style={topicStyle}>
                <div style={{color:'#333',fontSize:'40px'}}>
                    As a Tricky
                </div>
                <Link 
                    to='/look/home'
                    className="" 
                    style={{display:'block',color:'#333',fontSize:'40px',marginTop:'20px',textDecoration:'none'}}>
                    GO
                </Link>
            </div>
        )
    }
}
const topicStyle = {
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)'
}
