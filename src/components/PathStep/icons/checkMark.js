import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = props => {
    const { className, style } = props;
    return (
        <svg
            fill="currentColor"
            className={className}
            style={style}
            width="1rem"
            height="1rem"
            viewBox="0 0 512 512"
        >
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
        </svg>
    );
};

Checkmark.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Checkmark.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Checkmark;
