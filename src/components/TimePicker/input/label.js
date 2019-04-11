import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../../RequiredAsterisk';

export default function Label(props) {
    const {
        label,
        required,
        inputId,
        readOnly,
        id,
        hideLabel,
    } = props;

    const getLabelClassNames = () => classnames('rainbow-time-picker_input-label', {
        'rainbow-time-picker_input-label--readonly': readOnly,
        'rainbow-time-picker_input-label--hide': hideLabel,
    });

    return (
        <label className={getLabelClassNames()} htmlFor={inputId} id={id}>
            <RequiredAsterisk required={required} />
            {label}
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    required: PropTypes.bool.isRequired,
    inputId: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    id: undefined,
    hideLabel: false,
};
