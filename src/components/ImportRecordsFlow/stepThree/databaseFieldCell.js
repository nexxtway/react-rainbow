import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';
import DatabaseFieldContent from './styled/databaseFieldCell';

export default function DatabaseFieldCell(props) {
    const {
        value,
        row: { required },
    } = props;
    return (
        <DatabaseFieldContent>
            <RequiredAsterisk required={!!required} />
            {value}
        </DatabaseFieldContent>
    );
}

DatabaseFieldCell.propTypes = {
    value: PropTypes.string.isRequired,
    row: PropTypes.object.isRequired,
};
