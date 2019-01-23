import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

export default function Row(props) {
    const { data, columns, id, number } = props;
    const cells = columns.map(({ header, component, field, _meta }, index) => {
        const key = `${id}-cell-${index}`;
        let value;
        let isRowNumberCell = false;
        if (_meta !== undefined) {
            if (_meta.type === 'numerable') {
                isRowNumberCell = true;
                value = number + 1;
            }
        } else {
            value = data[field];
        }
        const isFirst = index === 0 && _meta === undefined;

        return (
            <Cell
                key={key}
                header={header}
                component={component}
                value={value}
                isFirst={isFirst}
                isRowNumberCell={isRowNumberCell} />
        );
    });
    return (
        <tr tabIndex={-1} aria-selected={false} className="rainbow-table_body-row">
            {cells}
        </tr>
    );
}

Row.propTypes = {
    id: PropTypes.string,
    number: PropTypes.number,
    data: PropTypes.object,
    columns: PropTypes.array,
};

Row.defaultProps = {
    id: undefined,
    number: undefined,
    data: [],
    columns: [],
};
