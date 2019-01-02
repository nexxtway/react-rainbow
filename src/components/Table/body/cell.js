import React from 'react';
import PropTypes from 'prop-types';

function CellValue({ component: CellComponent, value }) {
    if (CellComponent) {
        return <CellComponent value={value} />;
    }
    return <span>{value}</span>;
}

CellValue.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
};

CellValue.defaultProps = {
    component: undefined,
    value: undefined,
};

export default function Cell({ component, value, width }) {
    const cellStyle = { width };

    return (
        <td className="rainbow-table_cell" style={cellStyle}>
            <CellValue component={component} value={value} />
        </td>
    );
}

Cell.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
    width: PropTypes.string,
};

Cell.defaultProps = {
    component: undefined,
    value: undefined,
    width: 'unset',
};
