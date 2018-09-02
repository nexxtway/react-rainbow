/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import copy from 'clipboard-copy';
import { faClipboard, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Editor from 'react-styleguidist/lib/rsg-components/Editor/Editor';
import EditorHeader from './header';

const editorConfig = { lineNumbers: true };

export default class EditorLoader extends Component {
    constructor(props) {
        super(props);
        this.state = { icon: faClipboard };
        this.handleCopyToClipboardClick = this.handleCopyToClipboardClick.bind(this);
    }

    handleCopyToClipboardClick() {
        const { code } = this.props;
        copy(code);
        this.setState({ icon: faClipboardCheck });
        setTimeout(() => {
            this.setState({ icon: faClipboard });
        }, 1000);
    }

    render() {
        const { icon } = this.state;
        return (
            <div>
                <EditorHeader
                    onClick={this.handleCopyToClipboardClick}
                    icon={icon} />

                <Editor {...this.props} editorConfig={editorConfig} />
            </div>
        );
    }
}

