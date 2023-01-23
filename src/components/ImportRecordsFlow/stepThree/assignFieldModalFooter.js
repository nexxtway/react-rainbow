import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import StyledFooter from './styled/footer';
import StyledCancelButton from './styled/cancelButton';

export default function AssignFieldModalFooter(props) {
    const { onCancel, onAssign } = props;
    return (
        <StyledFooter>
            <StyledCancelButton label="Cancel" onClick={onCancel} />
            <Button label="Assign" variant="brand" onClick={onAssign} />
        </StyledFooter>
    );
}

AssignFieldModalFooter.propTypes = {
    onCancel: PropTypes.func,
    onAssign: PropTypes.func,
};

AssignFieldModalFooter.defaultProps = {
    onCancel: () => {},
    onAssign: () => {},
};
