import React from 'react';
import PropTypes from 'prop-types';
import StyledAssignFieldHeader from './styled/assignFieldHeader';
import StyledAssignFieldTitle from './styled/assignFieldTitle';

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
