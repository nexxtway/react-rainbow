/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Editor from 'react-styleguidist/lib/rsg-components/Editor/Editor';
import EditorHeader from './header';

const editorConfig = { lineNumbers: true };

export default function EditorLoader(props) {
    const { code } = props;
    return (
        <div>
            <EditorHeader code={code} />
            <Editor {...props} editorConfig={editorConfig} />
        </div>
    );
}
