import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../../RequiredAsterisk';
import RenderIf from '../../RenderIf';

export default function Label(props) {
    const {
        label,
        required,
        inputId,
        disabled,
        id,
    } = props;

    const getLabelClassNames = () => classnames('rainbow-input-radio_label', {
        'rainbow-input-radio_label--disabled': disabled,
    });

    return (
        <RenderIf isTrue={!!label}>
            <label className="rainbow-input-radio_label-container" htmlFor={inputId} id={id}>
                <span className="rainbow-input-radio_faux" />
                    <RequiredAsterisk required={required} />
                <span className={getLabelClassNames()}>{label}</span>
            </label>
        </RenderIf>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    required: PropTypes.bool.isRequired,
    inputId: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    label: null,
    id: undefined,
};
