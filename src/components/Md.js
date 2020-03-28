import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import MdCodeBlock from './MdCodeBlock'
// import Markdown from 'markdown-it'

export default class Md extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%', height: '1px' }}></div>
                {/* <span dangerouslySetInnerHTML={{__html:new Markdown(this.props.fetchMd.markdom)}}></span> */}
                <ReactMarkdown
                    source={this.props.fetchMd.markdom}
                    escapeHtml={false}
                    renderers={{
                        code: MdCodeBlock
                    }}
                >
                </ReactMarkdown>
            </div>
        )
    }
}
