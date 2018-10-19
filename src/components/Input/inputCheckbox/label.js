import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../../RenderIf';

export default function Label(props) {
    const {
        label,
        inputId,
        disabled,
        id,
    } = props;

    const getLabelClassNames = () => classnames('rainbow-input-checkbox_label', {
        'rainbow-input-checkbox_label--disabled': disabled,
    });

    return (
        <RenderIf isTrue={!!label}>
            <label className="rainbow-input-checkbox_label-container" htmlFor={inputId} id={id}>
                <span className="rainbow-input-checkbox_faux" />
                <span className={getLabelClassNames()}>{label}</span>
            </label>
        </RenderIf>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    inputId: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    label: null,
    id: undefined,
};
