import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';

export default function Label(props) {
    const {
        label,
        required,
        textareaId,
        id,
        readOnly,
        hideLabel,
    } = props;

    const getLabelClassNames = () => classnames('rainbow-textarea_label', {
        'rainbow-textarea_label--hide-label': hideLabel,
    });

    return (
        <label
            className={getLabelClassNames()}
            htmlFor={textareaId}
            id={id}
            readOnly={readOnly}>
                <RequiredAsterisk required={required} />
                {label}
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    required: PropTypes.bool.isRequired,
    textareaId: PropTypes.string.isRequired,
    id: PropTypes.string,
    readOnly: PropTypes.bool,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    id: undefined,
    readOnly: false,
    hideLabel: false,
};
