import React from 'react';

function buildSimpleUnionType(data) {
    return Object.keys(data).map(index => {
        const type = data[index].name;
        const separator = index > 0 ? ',' : '';
        return (
            <code className="react-rainbow-prop-type-label">
                {separator} {type}
            </code>
        );
    });
}

export default function buildShapeAttrList(data) {
    return Object.keys(data).map(name => {
        const type = data[name].name;
        const value = data[name].value;
        let valueType;

        if (!['shape', 'union'].includes(type)) {
            valueType = <span className="react-rainbow-prop-type-label"> {type}</span>;
        }

        let childrensList;
        if (value) {
            if (type === 'shape') {
                childrensList = buildShapeAttrList(value);
            }
            if (type === 'union') {
                valueType = buildSimpleUnionType(value);
            }
        }

        const label = (
            <div>
                <code className="react-rainbow-prop-name-label">{name}:</code>
                {valueType}
            </div>
        );

        return (
            <li>
                {label}
                {childrensList && <ul>{childrensList}</ul>}
            </li>
        );
    });
}
