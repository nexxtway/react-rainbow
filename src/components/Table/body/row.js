import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

export default function Row(props) {
    const { data, columns } = props;
    const cells = columns.map(({ header, component, field }, index) => {
        const key = `cell-${index}`;
        const value = data[field] || null;
        const isFirst = index === 0;
        return (
            <Cell
                key={key}
                header={header}
                component={component}
                value={value}
                isFirst={isFirst} />
        );
    });
    return (
        <tr tabIndex={-1} aria-selected={false} className="rainbow-table_body-row">
            {cells}
        </tr>
    );
}

Row.propTypes = {
    data: PropTypes.object,
    columns: PropTypes.array,
};

Row.defaultProps = {
    data: [],
    columns: [],
};
