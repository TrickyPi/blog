import React, { Component } from 'react'

export default class ArticleIntro extends Component {
    render() {
        const { title, intro } = this.props.articleIntro
        return (
            <div>
                <div>
                    {title}
                </div>
                <div>
                    {
                        this.props.articleIntro.smallTip.map((item, index) =>
                            <div
                                key={index}>
                                {/* <img src="../assets/imgs/" alt=""/> */}
                                <span></span>
                            </div>
                        )
                    }
                </div>
                <div>
                    <div>简介</div>
                    <div>{intro}</div>
                </div>
                <div className='red_button'>
                    阅读全文 >>
                </div>
            </div>
        )
    }
}
