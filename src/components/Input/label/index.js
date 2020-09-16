import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';
import HiddenElement from '../../Structural/hiddenElement';
import LabelText from './labelText';

export default function Label(props) {
    const { label, required, inputId, readOnly, id, hideLabel } = props;

    if (hideLabel) {
        return (
            <HiddenElement as="label" htmlFor={inputId} id={id}>
                <RequiredAsterisk required={required} />
                {label}
            </HiddenElement>
        );
    }

    return (
        <LabelText readOnly={readOnly} htmlFor={inputId} id={id}>
            <RequiredAsterisk required={required} />
            {label}
        </LabelText>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    required: PropTypes.bool,
    inputId: PropTypes.string,
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    label: undefined,
    required: false,
    inputId: undefined,
    readOnly: false,
    id: undefined,
    hideLabel: false,
};
