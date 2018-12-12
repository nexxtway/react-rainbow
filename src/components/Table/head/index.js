import React from 'react';
import PropTypes from 'prop-types';

export default function Headers(props) {
    const { columns } = props;
    if (columns) {
        return columns.map(column => (
            <th className="rainbow-table_header">{column.header}</th>
        ));
    }
    return null;
}

Headers.propTypes = {
    columns: PropTypes.array,
};

Headers.defaultProps = {
    columns: undefined,
};
