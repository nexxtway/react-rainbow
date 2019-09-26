import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';
import HiddenElement from '../../Structural/hiddenElement';
import StyledLabel from './styled/label';

export default function Label(props) {
    const { label, required, inputId, readOnly, id, hideLabel, disabled } = props;

    if (hideLabel) {
        return (
            <HiddenElement as="label" htmlFor={inputId} id={id}>
                <RequiredAsterisk required={required} />
                {label}
            </HiddenElement>
        );
    }

    return (
        <StyledLabel readOnly={readOnly} disabled={disabled} htmlFor={inputId} id={id}>
            <RequiredAsterisk required={required} />
            {label}
        </StyledLabel>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    required: PropTypes.bool.isRequired,
    inputId: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
    disabled: PropTypes.bool,
};

Label.defaultProps = {
    id: undefined,
    hideLabel: false,
    disabled: false,
};
