import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from './requiredAsterisk';
import RenderIf from '../RenderIf';

export default function Label(props) {
    const {
        label,
        required,
        textareaId,
        id,
        readOnly,
    } = props;

    return (
        <RenderIf isTrue={!!label}>
            <label
                className="rainbow-textarea-label"
                htmlFor={textareaId}
                id={id}
                readOnly={readOnly}>

                    <RequiredAsterisk required={required} />
                    {label}
            </label>
        </RenderIf>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    required: PropTypes.bool.isRequired,
    textareaId: PropTypes.string.isRequired,
    id: PropTypes.string,
    readOnly: PropTypes.bool,
};

Label.defaultProps = {
    label: null,
    id: undefined,
    readOnly: false,
};
