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

export default function Cell({ component, value, isFirst }) {
    if (isFirst) {
        return (
            <th className="rainbow-table_cell">
                <CellValue component={component} value={value} />
            </th>
        );
    }
    return (
        <td className="rainbow-table_cell">
            <CellValue component={component} value={value} />
        </td>
    );
}

Cell.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
    isFirst: PropTypes.bool,
};

Cell.defaultProps = {
    component: undefined,
    value: undefined,
    isFirst: false,
};
