import React from 'react';
import buildShapeAttrList from './shapeAttrList';

export default function buildArrayOfTypeList(data, key) {
    const { name, value } = data;
    if (name === 'shape') {
        return (
            <>
                <span className="react-rainbow-prop-type-label">[</span>
                <br />
                <div className="react-rainbow-prop-type-array-pad">{buildShapeAttrList(value)}</div>
                <br />
                <span className="react-rainbow-prop-type-label">]</span>
            </>
        );
    }

    return (
        <code key={key} className="react-rainbow-prop-type-label">
            {name}[]
        </code>
    );
}
