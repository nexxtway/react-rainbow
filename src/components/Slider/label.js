import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';

export default function Label(props) {
    const {
        label,
        sliderId,
    } = props;
    return (
        <RenderIf isTrue={!!label}>
            <label className="rainbow-slider_label" htmlFor={sliderId}>
                {label}
            </label>
        </RenderIf>
    );
}

Label.propTypes = {
    label: PropTypes.node,
    sliderId: PropTypes.string.isRequired,
};

Label.defaultProps = {
    label: null,
};
