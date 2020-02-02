import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import bannerImg from '../assets/imgs/banner.jpeg'
export default class Welcome extends Component {
    render() {
        return (
            <div className='welcome-con' style={welcomeCon}>
                <div className="topic" style={topicStyle}>
                    <div>
                        As a Tricky
                </div>
                    <Link
                        to='/look/home'
                        className=""
                        style={linkStyle}>
                        GO
                </Link>
                </div>
            </div>
        )
    }
}

const welcomeCon ={
    position: 'relative',
    display:'block',
    width:'100%',
    height:"100vh",
    backgroundSize: 'cover',
    backgroundPosition:'center center'
}
const topicStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    cursor: 'pointer',
    transform: 'translate(-50%,-50%)',
    color: '#333', 
    fontSize: '40px',
}

const linkStyle = { 
    display: 'block',
    marginTop: '20px',
    textDecoration: 'none',
    textAlign:'center',
    color: '#333', 
    fontSize: '40px',
}