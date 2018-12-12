import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';

export default function Rows(props) {
    const { data, columns } = props;
    if (data && columns) {
        return data.map(item => (
            <Row data={item} colums={columns} />
        ));
    }
    return null;
}

Rows.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
};

Rows.defaultProps = {
    data: [],
    columns: [],
};
