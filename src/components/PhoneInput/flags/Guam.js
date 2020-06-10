import React from 'react';
import PropTypes from 'prop-types';

function SvgGuam({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <g fill="#D80027">
                    <path d="M6.982 29.217A15.925 15.925 0 0016 32c3.345 0 6.45-1.027 9.018-2.783L16 27.827l-9.018 1.39zM25.018 2.783A15.925 15.925 0 0016 0c-3.345 0-6.45 1.027-9.018 2.783L16 4.173l9.018-1.39z" />
                </g>
                <path
                    d="M32 16c0-5.294-3.17-10.611-6.982-13.217H6.982C2.767 5.664 0 10.509 0 16c0 5.491 2.767 10.336 6.982 13.217h18.036C29.233 26.336 32 21.491 32 16z"
                    fill="#0052B4"
                />
                <path
                    d="M15.095 26.1c-.22-.188-5.356-4.653-5.356-10.1s5.137-9.912 5.356-10.1L16 5.124l.905.776c.22.188 5.356 4.653 5.356 10.1s-5.137 9.912-5.356 10.1l-.905.776-.905-.776z"
                    fill="#D80027"
                />
                <path
                    d="M20.87 16c0-4.87-4.87-9.043-4.87-9.043S11.13 11.13 11.13 16c0 1.49.456 2.914 1.09 4.174h7.56c.633-1.26 1.09-2.684 1.09-4.174z"
                    fill="#338AF3"
                />
                <path
                    d="M20.87 16c0 1.49-.457 2.914-1.09 4.174L16 20.87l-3.78-.696c-.634-1.26-1.09-2.684-1.09-4.174h9.74z"
                    fill="#0052B4"
                />
                <path
                    d="M16 25.044s2.346-2.012 3.78-4.87h-7.56c1.434 2.858 3.78 4.87 3.78 4.87z"
                    fill="#FFDA44"
                />
                <path fill="#6DA544" d="M12.87 13.217h6.26L16 16.347z" />
                <path fill="#A2001D" d="M14.957 15.304h2.087v6.261h-2.087z" />
            </g>
        </svg>
    );
}
SvgGuam.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgGuam.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgGuam;
