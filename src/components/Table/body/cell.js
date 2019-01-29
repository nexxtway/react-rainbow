import React from 'react';
import PropTypes from 'prop-types';

function CellValue({ component: CellComponent, value }) {
    if (CellComponent) {
        return <CellComponent value={value} />;
    }
    return value;
}

CellValue.propTypes = {
    component: PropTypes.func,
    value: PropTypes.any,
};

CellValue.defaultProps = {
    component: undefined,
    value: undefined,
};

export default function Cell(props) {
    const { header, component, value, isFirst } = props;

    const getHeaderLabel = () => {
        if (typeof header === 'string') {
            return header;
        }
        return undefined;
    };

    if (isFirst) {
        return (
            <th
                className="rainbow-table_cell-container"
                scope="row"
                tabIndex={-1}
                data-label={getHeaderLabel()}>

                <div className="rainbow-table_cell-content">
                    <CellValue component={component} value={value} />
                </div>
            </th>
        );
    }

    return (
        <td
            className="rainbow-table_cell-container"
            role="gridcell"
            tabIndex={-1}
            data-label={getHeaderLabel()}>

            <div className="rainbow-table_cell-content" role="presentation">
                <CellValue component={component} value={value} />
            </div>
        </td>
    );
}

Cell.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    component: PropTypes.func,
    value: PropTypes.any,
    isFirst: PropTypes.bool,
};

Cell.defaultProps = {
    header: undefined,
    component: undefined,
    value: undefined,
    isFirst: false,
};
