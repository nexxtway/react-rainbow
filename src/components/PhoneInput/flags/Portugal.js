import React from 'react';
import PropTypes from 'prop-types';

function SvgPortugal({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16c0 6.88 4.342 12.744 10.435 15.005L11.826 16 10.435.995C4.342 3.255 0 9.121 0 16z"
                    fill="#6DA544"
                />
                <path
                    d="M32 16c0-8.837-7.163-16-16-16-1.957 0-3.832.352-5.565.995v30.01c1.733.643 3.608.995 5.565.995 8.837 0 16-7.163 16-16z"
                    fill="#D80027"
                />
                <circle fill="#FFDA44" cx={10.435} cy={16} r={5.565} />
                <path d="M7.304 13.217v3.479a3.13 3.13 0 106.261 0v-3.479h-6.26z" fill="#D80027" />
                <path
                    d="M10.435 17.74a1.045 1.045 0 01-1.044-1.044v-1.392h2.087v1.392c0 .575-.468 1.043-1.043 1.043z"
                    fill="#F0F0F0"
                />
            </g>
        </svg>
    );
}
SvgPortugal.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPortugal.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPortugal;
