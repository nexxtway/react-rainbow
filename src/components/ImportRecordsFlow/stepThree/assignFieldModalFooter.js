import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

export default function AssignFieldModalFooter(props) {
    const { onCancel, onAssign, isAssignButtonDisabled } = props;
    return (
        <div className="rainbow-import-records-flow_step-three-assign-field-modal-footer">
            <Button
                className="rainbow-import-records-flow_step-three-assign-field-modal-footer_cancel-button"
                label="Cancel"
                onClick={onCancel}
            />
            <Button
                label="Assign"
                variant="brand"
                onClick={onAssign}
                disabled={isAssignButtonDisabled}
            />
        </div>
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
