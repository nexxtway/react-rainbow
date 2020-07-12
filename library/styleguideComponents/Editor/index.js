/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/jsx/jsx';
import EditorHeader from './header';
import './styles.css';

const configOptions = {
    mode: 'jsx',
    lineNumbers: true,
    theme: 'material',
};

export default class EditorLoader extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBeforeChange = this.handleBeforeChange.bind(this);
        this.state = {
            code: props.code,
        };
    }

    handleChange(editor, data, code) {
        const { onChange } = this.props;
        return onChange(code);
    }

    handleBeforeChange(editor, data, code) {
        this.setState({ code });
    }

    render() {
        const { code } = this.state;
        return (
            <div className="react-rainbow-editor-content-container">
                <EditorHeader code={code} />
                <CodeMirror
                    value={code}
                    options={configOptions}
                    onBeforeChange={this.handleBeforeChange}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

EditorLoader.propTypes = {
    code: PropTypes.string,
    onChange: PropTypes.func,
};

EditorLoader.defaultProps = {
    code: undefined,
    onChange: () => {},
};
