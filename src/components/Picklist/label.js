import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';

export default function Label(props) {
    const { label, required, inputId, id } = props;

    const getLabelClassNames = () => {
        const { readOnly, hideLabel } = props;
        return classnames('rainbow-lookup_input-label', {
            'rainbow-lookup_input-label-read-only': readOnly,
            'rainbow-picklist_input-label--hide': hideLabel,
        });
    };

    return (
        <label className={getLabelClassNames()} htmlFor={inputId} id={id}>
            <RequiredAsterisk required={required} />
            {label}
        </label>
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
    required: false,
    inputId: undefined,
    readOnly: false,
    id: undefined,
    label: null,
    hideLabel: false,
};
