import React, { Component } from 'react'
import SlideSwitchItem from './SlideSwitchItem'

export default class SlideSwitch extends Component {
    state = {
        tabList: [
            {
                id: 1,
                icon: require('../assets/imgs/home.png'),
                text: '首页',
                showColor: true,
                route: '/home'
            },
            {
                id: 2,
                icon: require('../assets/imgs/all.png'),
                text: '技术摘要',
                showColor: false,
                route: '/tech'
            },
            {
                id: 3,
                icon: require('../assets/imgs/class.png'),
                text: '诗歌',
                showColor: false,
                route: '/poetry'
            },
            {
                id: 4,
                icon: require('../assets/imgs/search.png'),
                text: '标签',
                showColor: false,
                route: '/tag'
            },
            {
                id: 5,
                icon: require('../assets/imgs/place.png'),
                text: '兴趣',
                showColor: false,
                route: '/place'
            }
        ]
    }
    componentDidMount() {
        console.log(window.location.pathname)
        this.setState((state)=>{
            return{
                tabList:state.tabList.map(item=>{
                    if(window.location.pathname.includes(item.route)){
                        item.showColor = true
                    }else{
                        item.showColor = false
                    }
                    return item
                })
            }
        })
    }
    cstClick(id) {
        this.setState((state) => {
            return {
                tabList: state.tabList.map(item => {
                    if (item.id === id) {
                        item.showColor = true
                    } else {
                        item.showColor = false
                    }
                    return item
                })
            }
        })
    }
    render() {
        let renderData = this.state.tabList
        return (
            <ul style={ulstyle}>
                {
                    renderData.map((item, index) =>
                        <SlideSwitchItem tabInfo={item} key={index} cstClick={this.cstClick.bind(this)}></SlideSwitchItem>
                    )
                }
            </ul>
        )
    }
}

const ulstyle = {
    fontSize: "0px",
    color: '#333',
    textDerction: 'none',
    padding: "0px",
    margin: '10px 0 0 0 '
}
