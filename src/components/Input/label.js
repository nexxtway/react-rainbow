import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';
import RenderIf from '../RenderIf';

export default function Label(props) {
    const {
        label,
        required,
        inputId,
        readOnly,
        id,
    } = props;

    const getLabelClassNames = () => classnames(
        'rainbow-input_label',
        { 'rainbow-input_label-read-only': readOnly });

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
    label: PropTypes.node,
    required: PropTypes.bool.isRequired,
    inputId: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    label: null,
    id: undefined,
};
