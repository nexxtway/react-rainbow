import React from 'react';
import StyledAssignFieldHeader from './styled/assignFieldHeader';
import StyledAssignFieldTitle from './styled/assignFieldTitle';
import PropTypes from 'prop-types';

const AssignFieldModalTitle = props => {
    const { field } = props;
    return (
        <StyledAssignFieldHeader>
            <StyledAssignFieldTitle>
                Assign to the field: <b>{field}</b>
            </StyledAssignFieldTitle>
        </StyledAssignFieldHeader>
    );
};

AssignFieldModalTitle.propTypes = {
    field: PropTypes.string,
};

AssignFieldModalTitle.defaultProps = {
    field: '',
};

export default AssignFieldModalTitle;
