import React from 'react';
import PropTypes from 'prop-types';
import StyledCVSFieldContainer from './styled/cvsFieldContainer';
import StyledCancelIcon from './styled/cancelIcon';

export default function FileFieldCell({ value }) {
    if (value) {
        return value;
    }
    return (
        <StyledCVSFieldContainer>
            Not assigned yet
            <StyledCancelIcon />
        </StyledCVSFieldContainer>
    );
}

FileFieldCell.propTypes = {
    value: PropTypes.string.isRequired,
};
