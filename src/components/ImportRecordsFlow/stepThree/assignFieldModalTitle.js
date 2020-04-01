import React from 'react';
import PropTypes from 'prop-types';
import StyledAssignFieldTitle from './styled/assignFieldTitle';

const AssignFieldModalTitle = ({ field }) => {
    return (
        <StyledAssignFieldTitle>
            Assign to the field: <b>{field}</b>
        </StyledAssignFieldTitle>
    );
};

AssignFieldModalTitle.propTypes = {
    field: PropTypes.string,
};

AssignFieldModalTitle.defaultProps = {
    field: '',
};

export default AssignFieldModalTitle;
