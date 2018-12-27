import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Cell from './cell';

export default function Row(props) {
    const { data, columns } = props;
    const cells = columns.map(({ component, field, width }) => (
        <Cell key={uniqueId('cell')} component={component} value={data[field]} width={width} />
    ));
    return (
        <tr className="rainbow-table_body-row">
            {cells}
        </tr>
    );
}

Row.propTypes = {
    data: PropTypes.object,
    columns: PropTypes.array,
};

Row.defaultProps = {
    data: [],
    columns: [],
};
