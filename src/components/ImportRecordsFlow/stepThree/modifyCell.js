import React from 'react';
import PropTypes from 'prop-types';

export default function ModifyCell(props) {
    const { onClick, value, row } = props;
    const buttonText = value ? 'Change' : 'Assign';

    return (
        <button
            className="rainbow-import-records-flow_step-three-assign-button"
            onClick={() => onClick(row.databaseField)}
        >
            {buttonText}
        </button>
    );
}

ModifyCell.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
    row: PropTypes.object.isRequired,
};

ModifyCell.defaultProps = {
    onClick: () => {},
    value: '',
};
