import React from 'react';

export default function buildEnumTypeList(data, key) {
    const values = Object.keys(data).map(index => {
        const name = data[index].value;
        const separator = index > 0 ? ', ' : '';
        const itemKey = `enum-${index}`;
        return (
            <span key={itemKey}>
                {separator}
                <code className="react-rainbow-prop-type-enum">{name}</code>
            </span>
        );
    });

    return (
        <div key={key}>
            <code className="react-rainbow-prop-type-label">One Of: </code>
            {values}
        </div>
    );
}
