import React from 'react';
import PropTypes from 'prop-types';

export default function Plus(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="12px"
            height="12px"
            viewBox="0 0 12 12"
        >
            <path
                d="M6 0.333496C6.55228 0.333496 7 0.781211 7 1.3335V10.6668C7 11.2191 6.55228 11.6668 6 11.6668C5.44772 11.6668 5 11.2191 5 10.6668V1.3335C5 0.781211 5.44772 0.333496 6 0.333496Z"
                className="Vector (Stroke)"
            />
            <path
                d="M0.333313 6C0.333313 5.44772 0.781028 5 1.33331 5H10.6666C11.2189 5 11.6666 5.44772 11.6666 6C11.6666 6.55228 11.2189 7 10.6666 7H1.33331C0.781028 7 0.333313 6.55228 0.333313 6Z"
                className="Vector (Stroke)_2"
            />
        </svg>
    );
}

Plus.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};

Plus.defaultProps = {
    style: undefined,
    className: undefined,
};
