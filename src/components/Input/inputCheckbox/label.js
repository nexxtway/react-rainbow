import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';

export default function Label(props) {
    const {
        label,
        inputId,
        id,
    } = props;

    return (
        <RenderIf isTrue={!!label}>
            <label className="rainbow-input-checkbox_label-container" htmlFor={inputId} id={id}>
                <span className="rainbow-input-checkbox_faux" />
                <span className="rainbow-input-checkbox_label">{label}</span>
            </label>
        </RenderIf>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    inputId: PropTypes.string.isRequired,
    id: PropTypes.string,
};

Label.defaultProps = {
    label: null,
    id: undefined,
};
