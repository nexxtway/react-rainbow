import React from 'react';

export default function getStringHightlighted(stringValue, highlightValue) {
    if (highlightValue in [null, undefined, '']) {
        return stringValue;
    }

    const regEx = new RegExp(`(${highlightValue})+`, 'gi');
    const firstIndex = stringValue.search(regEx);

    if (firstIndex === -1) {
        return stringValue;
    }

    const firstPart = stringValue.substr(0, firstIndex);
    const term = stringValue.substr(firstIndex, highlightValue.length);
    const lastPart = stringValue.substr(firstIndex + highlightValue.length, stringValue.length);

    return (
        <span>
            {firstPart}
            <b>{term}</b>
            {lastPart}
        </span>
    );
}
