import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'


export default class Md extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%', height: '1px' }}></div>
                <ReactMarkdown
                    source={this.props.fetchMd.markdom}
                    escapeHtml={false}
                    renderers={{
                        code: CodeBlock
                    }}
                >
                </ReactMarkdown>
            </div>
        )
    }
}
