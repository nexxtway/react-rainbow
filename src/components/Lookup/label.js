import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';

export default function Label(props) {
    const {
        label,
        required,
        inputId,
        id,
    } = props;

    const getLabelClassNames = () => {
        const { readOnly, hideLabel } = props;
        return classnames('rainbow-lookup_input-label', {
            'rainbow-lookup_input-label-read-only': readOnly,
            'rainbow-lookup_input-label--hide': hideLabel,
        });
    };

    return (
        <label
            className={getLabelClassNames()}
            htmlFor={inputId}
            id={id}
        >

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
