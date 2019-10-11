import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import StyledFooter from './styled/footer';
import StyledCancelButton from './styled/cancelButton';

export default function AssignFieldModalFooter(props) {
    const { onCancel, onAssign, isAssignButtonDisabled } = props;
    return (
        <StyledFooter>
            <StyledCancelButton label="Cancel" onClick={onCancel} />
            <Button
                label="Assign"
                variant="brand"
                onClick={onAssign}
                disabled={isAssignButtonDisabled}
            />
        </StyledFooter>
    );
}

AssignFieldModalFooter.propTypes = {
    onCancel: PropTypes.func,
    onAssign: PropTypes.func,
    isAssignButtonDisabled: PropTypes.bool,
};

AssignFieldModalFooter.defaultProps = {
    onCancel: () => {},
    onAssign: () => {},
    isAssignButtonDisabled: false,
};
