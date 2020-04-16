import React from 'react';
import PropTypes from 'prop-types';
import propTypeShapeRender from './renderers/propTypeShape';
import propTypeUnionRender from './renderers/propTypeUnion';
import propTypeArrayOfRender from './renderers/propTypeArrayOf';

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
        if (type) {
            if (type.name === 'shape') {
                return (
                    <div>
                        {description}
                        {propTypeShapeRender(type.value)}
                    </div>
                );
            }

            if (type.name === 'arrayOf') {
                return (
                    <div>
                        {description}
                        {propTypeArrayOfRender(type.value)}
                    </div>
                );
            }

            if (type.name === 'union') {
                return (
                    <div>
                        {description}
                        <p>One of type:</p>
                        {propTypeUnionRender(type.value)}
                    </div>
                );
            }
        }
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
