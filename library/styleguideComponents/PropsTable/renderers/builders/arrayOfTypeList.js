import React from 'react';

export default function buildArrayOfTypeList(data) {
    const { name } = data;
    return <code className="react-rainbow-prop-type-label">{name}[]</code>;
}
