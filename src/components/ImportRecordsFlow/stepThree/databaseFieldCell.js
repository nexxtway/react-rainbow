import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';

export default function DatabaseFieldCell(props) {
    const {
        value,
        row: { required },
    } = props;
    return (
        <span>
            <RequiredAsterisk required={!!required} />
            {value}
        </span>
    );
}

DatabaseFieldCell.propTypes = {
    value: PropTypes.string.isRequired,
    row: PropTypes.object.isRequired,
};
