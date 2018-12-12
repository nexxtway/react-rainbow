import React from 'react';
import PropTypes from 'prop-types';

export default function Cell(props) {
    const { component: CellComponent, value } = props;
    let cellValue = value;
    if (CellComponent) {
        cellValue = <CellComponent value={value} />;
    }
    return (
        <td className="rainbow-table_cell">
            {cellValue}
        </td>
    );
}

Cell.propTypes = {
    component: PropTypes.any,
    value: PropTypes.any,
};

Cell.defaultProps = {
    component: undefined,
    value: undefined,
};
