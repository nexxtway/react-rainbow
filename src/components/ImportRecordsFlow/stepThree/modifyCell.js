import React from 'react';
import PropTypes from 'prop-types';
import StyledAssignButton from './styled/assignButton';

export default function ModifyCell(props) {
    const { onClick, value, row } = props;
    const buttonText = value ? 'Change' : 'Assign';

    return (
        <StyledAssignButton onClick={() => onClick(row.databaseField)}>
            {buttonText}
        </StyledAssignButton>
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
