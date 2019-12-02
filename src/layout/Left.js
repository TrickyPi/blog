import React, { Component } from 'react'
import Tab from '../components/Tab'
import userImg from '../assets/imgs/user.jpg'
export default class Left extends Component {
    state={
        artcileList:[
            {
                id:1,
                num:12,
                name:'日志'
            },
            {
                id:2,
                num:22,
                name:'分类'
            },
            {
                id:3,
                num:32,
                name:'标签'
            }
        ]
    }
    render() {
        return (
            <div style={TabStyle}>
                <div style={tipstyle}>
                    Control Yourself
                </div>
                <Tab tabList={this.props.tabList} cstClick={this.props.cstClick.bind(this)}></Tab>
                <div className="person">
                    <img src={userImg} alt="" style={{width:'126px',height:'126px',margin:'20px 0px 10px'}} />
                    <div className="personName">TrickyPi</div>
                    <div style={smallClass}>
                        {
                            this.state.artcileList.map((item)=>
                                (
                                    <div key={item.id} style={liststyle}>
                                        <div style={numstyle}>{item.num}</div>
                                        <div style={namestyle}>{item.name}</div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const TabStyle = {
    position: 'absolute',
    left:0,
    top:0,
    width:'200px',
    textAlign:'center'
}
const tipstyle = {
    width:'100%',
    lineHeight:'70px',
}
const smallClass = {
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'20px'
}
const liststyle = {
    margin:'0 2px'
}
const numstyle = {
    color:'#000',
    fontSize:'14px'
}
const namestyle = {
    color:'#666',
    fontSize:'12px'
}