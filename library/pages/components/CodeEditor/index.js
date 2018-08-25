/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Header from './header';
import './styles.css';

const configOptions = { mode: 'jsx' };

export default function CodeEditor({ code }) {
    return (
        <div className="slds-grid slds-grid_vertical slds-grid--vertical-stretch">
            <Header code={code} />
            <CodeMirror value={code} options={configOptions} />
        </div>
    );
}

CodeEditor.propTypes = {
    code: PropTypes.string,
};

CodeEditor.defaultProps = {
    code: '',
};
