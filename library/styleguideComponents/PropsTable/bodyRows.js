import React from 'react';
import PropTypes from 'prop-types';
import propTypeShapeRender from './renderers/propTypeShape';
import propTypeUnionRender from './renderers/propTypeUnion';
import propTypeArrayOfRender from './renderers/propTypeArrayOf';
import propTypeEnumRender from './renderers/propTypeEnum';

function getTitleValue(value) {
    if (!value) {
        return null;
    }
    if (typeof value === 'object' && value[0]) {
        return value[0].props.text;
    }
    return value;
}

function renderValue(value, caption, row) {
    const { description, type } = row;

    if (value === 'undefined' || value === 'null') {
        return '';
    }

    if (caption === 'Description') {
        const className = 'react-rainbow-prop-description';
        if (type) {
            if (type.name === 'shape') {
                return (
                    <div className={className}>
                        {description}
                        {propTypeShapeRender(type.value)}
                    </div>
                );
            }

            if (type.name === 'arrayOf') {
                return (
                    <div className={className}>
                        {description}
                        {propTypeArrayOfRender(type.value)}
                    </div>
                );
            }

            if (type.name === 'union') {
                return (
                    <div className={className}>
                        {description}
                        <p>One of type:</p>
                        {propTypeUnionRender(type.value)}
                    </div>
                );
            }

            if (type.name === 'enum') {
                return (
                    <div className={className}>
                        {description}
                        {propTypeEnumRender(type.value)}
                    </div>
                );
            }
        }
    }

    if (caption === 'Default' && type.name === 'array') {
        return <div className="react-rainbow-defualt-array">{value}</div>;
    }

    return value;
}

export default function BodyRows({ rows, columns, getRowKey }) {
    return rows.map(row => (
        <tr key={getRowKey(row)}>
            {columns.map(({ render, caption }, index) => {
                const key = `td-${index}`;
                const value = render(row) ? render(row).props.children : null;
                const titleValue = getTitleValue(value);
                return (
                    <td key={key} data-label={caption}>
                        <div className="react-rainbow-truncate" title={titleValue}>
                            {renderValue(value, caption, row)}
                        </div>
                    </td>
                );
            })}
        </tr>
    ));
}

BodyRows.propTypes = {
    columns: PropTypes.array.isRequired,
};
