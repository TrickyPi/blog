import React, { Component } from 'react'
import Md from '../components/Md'
import LookOther from '../components/LookOther'

const mdArr = [
    {
        id: 1,
        title: "koa",
        data: require('../assets/md/koa.md'),
        markdom: ""
    },
    {
        id: 2,
        title: "serverconfig",
        data: require('../assets/md/serverconfig.md'),
        markdom: ""
    },
    {
        id: 3,
        title: 'sharp',
        data: require('../assets/md/sharp.md'),
        markdom: ""
    }
]

export default class Right extends Component {
    state = {
        adjacent: [],
        fetchMd: {},
    }
    fetch(data) {
        return new Promise((resolve, reject) => {
            fetch(data)
                .then(res => res.text())
                .then(text => {
                    resolve(text)
                })
                .catch(err=>{
                    reject(err)
                })
        })

    }
    changAirtcle(id) {
        if (!id) {
            return
        }
        let virtualAdjacent = null
        let readArticle = ''
        for (let i = 0, length = mdArr.length; i < length; i++) {
            let item = mdArr[i]
            if (item.id === id) {
                if (i === 0) {
                    virtualAdjacent = [
                        {
                            title: '前面是悬崖'
                        },
                        mdArr[i + 1]
                    ]
                } else if (i === length - 1) {
                    virtualAdjacent = [
                        mdArr[i - 1],
                        {
                            title: '后面是悬崖'
                        }
                    ]
                } else {
                    virtualAdjacent = [mdArr[i - 1], mdArr[i + 1]]
                }
                readArticle = item
                break
            }
        }
        this.setState({
            adjacent: virtualAdjacent,
            fetchMd: readArticle
        })
    }
    componentWillMount() {
        const promisArr =mdArr.map(item => 
            this.fetch(item.data)
        )
        Promise.all(promisArr).then(res=>{
            mdArr.forEach((item,index)=>{
                item.markdom = res[index]
            })
            console.log(mdArr)
            this.changAirtcle(1)
        })
    }
    render() {
        const { fetchMd, adjacent } = this.state
        return (
            <div style={rightStyle}>
                <Md fetchMd={fetchMd}></Md>
                <LookOther
                    OtherPages={adjacent}
                    changAirtcle={this.changAirtcle.bind(this)}></LookOther>
            </div>
        )
    }
}

const rightStyle = {
    width: '750px',
    minHeight: '100%',
    margin: '0 0 0 220px',
    textAlign: 'left',
    padding: '0px 0px 40px 0px',
}