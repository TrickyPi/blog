import React, { Component } from 'react'
import TabItem from './TabItem'

export default class Tab extends Component {
    render() {
        let renderData = this.props.tabList
        return (
            <ul style={ulstyle}>
                {
                    renderData.map((item,index) =>
                        <TabItem tabInfo = {item} key={index} cstClick={this.props.cstClick.bind(this)}></TabItem>
                    )
                }
            </ul>
        )
    }
}

const ulstyle = {
    fontSize:"0px",
    color:'#333',
    textDerction:'none',
    padding:"0px",
    margin:'10px 0 0 0 '
}
