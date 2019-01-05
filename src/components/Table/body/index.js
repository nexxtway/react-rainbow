import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import { uniqueId } from '../../../libs/utils';
import './styles.css';

export default function Body(props) {
    const { data, columns } = props;
    if (Array.isArray(data) && Array.isArray(columns)) {
        return data.map(item => (
            <Row key={uniqueId('row')} data={item} columns={columns} />
        ));
    }
    return null;
}

Body.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
};

Body.defaultProps = {
    data: [],
    columns: [],
};
