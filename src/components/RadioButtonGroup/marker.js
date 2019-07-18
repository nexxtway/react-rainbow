import React from 'react';
import PropTypes from 'prop-types';

export default function Marker(props) {
    const { className, style, isVisible } = props;

    return isVisible ? (
        <svg
            className={className}
            style={style}
            fill="#FFFFFF"
            width="1"
            height="1"
            viewBox="0 0 1 1"
        >
            <path d="M0,0 L1,0 L1,1 L0,1 Z" />
        </svg>
    ) : null;
}

Marker.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isVisible: PropTypes.any,
};

Marker.defaultProps = {
    className: undefined,
    style: undefined,
    isVisible: false,
};
