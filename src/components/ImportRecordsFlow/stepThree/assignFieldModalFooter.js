import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import StyledFooter from './styled/footer';
import StyledCancelButton from './styled/cancelButton';

export default function AssignFieldModalFooter(props) {
    const { onCancel, onAssign, isAssignButtonDisabled, borderRadius } = props;
    return (
        <StyledFooter>
            <StyledCancelButton label="Cancel" onClick={onCancel} borderRadius={borderRadius} />
            <Button
                label="Assign"
                variant="brand"
                onClick={onAssign}
                disabled={isAssignButtonDisabled}
                borderRadius={borderRadius}
            />
        </StyledFooter>
    );
}

AssignFieldModalFooter.propTypes = {
    onCancel: PropTypes.func,
    onAssign: PropTypes.func,
    isAssignButtonDisabled: PropTypes.bool,
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

AssignFieldModalFooter.defaultProps = {
    onCancel: () => {},
    onAssign: () => {},
    isAssignButtonDisabled: false,
    borderRadius: 'rounded',
};
