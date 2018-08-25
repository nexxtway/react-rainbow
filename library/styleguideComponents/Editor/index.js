/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Editor from 'react-styleguidist/lib/rsg-components/Editor/Editor';
import EditorHeader from './header';

export default function EditorLoader(props) {
    return (
        <div>
            <EditorHeader />
            <Editor {...props} />
        </div>
    );
}

