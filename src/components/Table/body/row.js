import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Cell from './cell';

export default function Row(props) {
    const { data, columns } = props;
    const cells = columns.map(({ header, component, field }, index) => (
        <Cell
            key={uniqueId('cell')}
            header={header}
            component={component}
            value={data[field]}
            isFirst={index === 0} />
    ));
    return (
        <tr tabIndex={-1} aria-selected={false} className="rainbow-table_body-row">
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
