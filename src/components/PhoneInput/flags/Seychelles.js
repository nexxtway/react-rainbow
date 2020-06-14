import React from 'react';
import PropTypes from 'prop-types';

function SvgSeychelles({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M26.8 4.196A15.942 15.942 0 0016 0c-.681 0-1.353.043-2.012.126L6.26 9.044.506 20.008c.372 1.442.94 2.804 1.674 4.058L16 16 26.8 4.196z"
                    fill="#FFDA44"
                />
                <path
                    d="M29.32 24.865l-22.385 4.32A15.924 15.924 0 0016 32c5.558 0 10.453-2.834 13.32-7.135z"
                    fill="#6DA544"
                />
                <path
                    d="M26.803 4.198L2.189 24.081a16.06 16.06 0 002.292 3.023L32 16c0-4.672-2.003-8.877-5.197-11.802z"
                    fill="#D80027"
                />
                <path
                    d="M0 16c0 1.384.176 2.727.506 4.008L13.988.126C6.1 1.116 0 7.845 0 16z"
                    fill="#0052B4"
                />
            </g>
        </svg>
    );
}
SvgSeychelles.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSeychelles.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSeychelles;
