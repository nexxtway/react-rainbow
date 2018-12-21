import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import { uniqueId } from '../../../libs/utils';

export default function Rows(props) {
    const { data, columns } = props;
    if (Array.isArray(data) && Array.isArray(columns)) {
        return data.map(item => (
            <Row key={uniqueId('row')} data={item} columns={columns} />
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
