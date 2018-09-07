import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from './requiredAsterisk';
import RenderIf from '../RenderIf';

export default function Label(props) {
    const {
        className,
        label,
        required,
        inputId,
        readOnly,
        id,
    } = props;

    const getLabelClassNames = () => classnames(
        'rainbow-form-element__label',
        { 'rainbow-form-element__label_read-only': readOnly },
        className);

    return (
        <RenderIf isTrue={!!label}>
            <label className={getLabelClassNames()} htmlFor={inputId} id={id}>
                <RequiredAsterisk required={required} />
                {label}
            </label>
        </RenderIf>
    );
}

Label.propTypes = {
    className: PropTypes.string,
    label: PropTypes.node,
    required: PropTypes.bool.isRequired,
    inputId: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    className: undefined,
    label: null,
    id: undefined,
};
