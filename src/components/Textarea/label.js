import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../RequiredAsterisk';
import StyledLabel from './styled/label';

export default function Label(props) {
    const { label, required, textareaId, id, readOnly, hideLabel } = props;

    return (
        <StyledLabel hideLabel={hideLabel} htmlFor={textareaId} id={id} readOnly={readOnly}>
            <RequiredAsterisk required={required} />
            {label}
        </StyledLabel>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    required: PropTypes.bool,
    textareaId: PropTypes.string,
    id: PropTypes.string,
    readOnly: PropTypes.bool,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    label: undefined,
    required: false,
    textareaId: undefined,
    id: undefined,
    readOnly: false,
    hideLabel: false,
};
