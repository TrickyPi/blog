import React, { Component } from 'react'

export default class LookOther extends Component {
    render() {
        if(!this.props.OtherPages){
            return(<div>暂无文章</div>)
        }
        return (
            <div style={{width:'100%',display:'flex',justifyContent:"space-between",marginTop:"30px"}}>
                {
                    this.props.OtherPages.map((item,index) =>
                        <div 
                            key={index}
                            onClick={this.props.changAirtcle.bind(this,item.id)}
                            style={{color:"#3cb371",cursor:'pointer'}}>
                                {index===0?'<<- ':''}
                                {item.title}
                                {index===1?' ->>':''}
                        </div> 
                    )
                }
            </div>
        )
    }
}
