import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';

export default function Headers(props) {
    const { columns } = props;
    if (columns) {
        return columns.map(column => (
            <th key={uniqueId('header')} className="rainbow-table_header">{column.header}</th>
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
