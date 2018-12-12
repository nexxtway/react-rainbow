import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

export default function Row(props) {
    const { data, colums } = props;
    const cells = colums.map(({ component, field }) => (
        <Cell component={component} value={data[field]} />
    ));
    return (
        <tr className="rainbow-table_body-row">
            {cells}
        </tr>
    );
}

Row.propTypes = {
    data: PropTypes.object,
    colums: PropTypes.array,
};

Row.defaultProps = {
    data: [],
    colums: [],
};
