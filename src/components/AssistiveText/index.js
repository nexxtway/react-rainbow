/* eslint-disable react/prop-types */
import React from 'react';

export default function AssistiveText({ text }) {
    if (text) {
        return <span className="slds-assistive-text">{text}</span>;
    }
    return null;
}
