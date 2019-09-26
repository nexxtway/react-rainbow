import React from 'react';
import PropTypes from 'prop-types';
import HiddenElement from '../../Structural/hiddenElement';
import StyledLabelText from './labelText';

export default function Label(props) {
    const { label, disabled, hideLabel, inputId, id } = props;

    if (hideLabel) {
        return (
            <label htmlFor={inputId} id={id}>
                <span className="rainbow-input_faux" />
                <HiddenElement>{label}</HiddenElement>
            </label>
        );
    }

    return (
        <label htmlFor={inputId} id={id}>
            <span className="rainbow-input_faux" />
            <StyledLabelText disabled={disabled}>{label}</StyledLabelText>
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    inputId: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool,
    id: PropTypes.string,
};

Label.defaultProps = {
    hideLabel: false,
    id: undefined,
};
