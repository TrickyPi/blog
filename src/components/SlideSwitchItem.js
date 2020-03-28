import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SlideSwitchItem extends Component {
    changeBackgroundColor(showColor) {
        let newlistyle = {}
        if (showColor) {
            newlistyle = Object.assign({}, listyle, {
                backgroundColor: '#eee'
            })
            return newlistyle
        } else {
            return listyle
        }
    }
    render() {
        const { id, icon, text, showColor,route } = this.props.tabInfo
        return (
            <Link
                rel="stylesheet"
                onClick={this.props.cstClick.bind(this, id)} 
                style={{textDecoration: 'none'}}
                to={'/look'+route}>
                <li style={this.changeBackgroundColor(showColor)}>
                    <img style={imgstyle} src={icon} alt="" />
                    <span style={spanstyle}>{text}</span>
                </li>
            </Link>
        )
    }
}

const listyle = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '37px',
    fontSize: '14px',
    padding: '0 10px',
    cursor: 'pointer',
    color:'#333'
}
const imgstyle = {
    display: 'block',
    width: '16px',
    height: '16px'
}
const spanstyle = {
    margin: '0 0 0 10px'
}
