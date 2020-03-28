import React, { Component } from 'react'
import './Poem.css'
export default class Poem extends Component {
    render() {
        const { article, author, portion } = this.props.poemItem
        return (
            <div className="poem-con">
                <div className="title">
                    {article}
                </div>
                <div className="content">
                    {
                        portion.map(
                            (item, index) => (
                                <div
                                    className='sentence'
                                    key={index}>{item}</div>
                            )
                        )
                    }
                </div>
                {author ? <div className="author">--&nbsp;{author}</div> : ''}
            </div>
        )
    }
}
