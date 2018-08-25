/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import copy from 'clipboard-copy';
import Editor from 'react-styleguidist/lib/rsg-components/Editor/Editor';
import EditorHeader from './header';

const editorConfig = { lineNumbers: true };

export default class EditorLoader extends Component {
    constructor(props) {
        super(props);
        this.state = { iconName: 'utility:copy_to_clipboard' };
        this.handleCopyToClipboardClick = this.handleCopyToClipboardClick.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleCopyToClipboardClick() {
        const { code } = this.props;
        copy(code);
        this.setState({ iconName: 'utility:check' });
    }

    handleOnBlur() {
        this.setState({ iconName: 'utility:copy_to_clipboard' });
    }

    render() {
        const { iconName } = this.state;
        return (
            <div>
                <EditorHeader
                    onClick={this.handleCopyToClipboardClick}
                    onBlur={this.handleOnBlur}
                    iconName={iconName} />
                <Editor {...this.props} editorConfig={editorConfig} />
            </div>
        );
    }
}

