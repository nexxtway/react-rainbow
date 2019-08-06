import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '../icons/cancel';

export default function FileFieldCell({ value }) {
    if (value) {
        return value;
    }
    return (
        <span className="rainbow-import-records-flow_step-three-cvs-field-not-assigned">
            Not assigned yet
            <CancelIcon className="rainbow-import-records-flow_step-three-cancel-icon" />
        </span>
    );
}

FileFieldCell.propTypes = {
    value: PropTypes.string.isRequired,
};
