import React, { Component, Fragment } from 'react'
import Md from '../components/Md'
import MdSwtich from '../components/MdSwitch'

const mdArr = [
    {
        id: 1,
        title: "vue.nextTick",
        data: require('../assets/md/nextTick.md'),
        markdom: ""
    },
    {
        id: 2,
        title: "服务器配置",
        data: require('../assets/md/serverconfig.md'),
        markdom: ""
    },
    {
        id: 3,
        title: 'sharp应用',
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
                            title: '到顶了'
                        },
                        mdArr[i + 1]
                    ]
                } else if (i === length - 1) {
                    virtualAdjacent = [
                        mdArr[i - 1],
                        {
                            title: '到底了'
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
            <Fragment>
                <Md fetchMd={fetchMd}></Md>
                <MdSwtich
                    OtherPages={adjacent}
                    changAirtcle={this.changAirtcle.bind(this)}></MdSwtich>
            </Fragment>
        )
    }
}

