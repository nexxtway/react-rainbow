import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from './requiredAsterisk';

export default function Label(props) {
    const {
        className,
        label,
        required,
        textareaId,
        id,
        readOnly,
    } = props;

    const getLabelClassNames = () => classnames(
        'rainbow-textarea-label',
        className);

    if (label) {
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
    return null;
}

Label.propTypes = {
    className: PropTypes.string,
    label: PropTypes.node,
    required: PropTypes.bool.isRequired,
    textareaId: PropTypes.string.isRequired,
    id: PropTypes.string,
    readOnly: PropTypes.bool,
};

Label.defaultProps = {
    className: undefined,
    label: null,
    id: undefined,
    readOnly: false,
};
