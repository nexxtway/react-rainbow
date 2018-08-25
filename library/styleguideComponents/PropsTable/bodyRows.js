import React from 'react';
import PropTypes from 'prop-types';

function getTitleValue(value) {
    if (!value) {
        return null;
    }
    if (typeof value === 'object' && value[0]) {
        return value[0].props.text;
    }
    return value;
}

function renderValue(value) {
    if (value === 'undefined' || value === 'null') {
        return '';
    }
    return value;
}

export default function BodyRows({ rows, columns, getRowKey }) {
    return (
        rows.map(row => (
            <tr key={getRowKey(row)}>
                {columns.map(({ render, caption }, index) => {
                    const key = `td-${index}`;
                    const value = render(row) ? render(row).props.children : null;
                    const titleValue = getTitleValue(value);
                    return (
                        <td key={key} data-label={caption}>
                            <div className="slds-truncate" title={titleValue}>
                                {renderValue(value)}
                            </div>
                        </td>
                    );
                })}
            </tr>
        ))
    );
}

BodyRows.propTypes = {
    columns: PropTypes.array.isRequired,
};
