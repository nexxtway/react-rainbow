import React from 'react';
import PropTypes from 'prop-types';

function SvgSouthAfrica({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16.031} cy={15.969} r={15.969} />
                <path
                    d="M4.74 27.26c-6.237-6.236-6.237-16.347 0-22.583l9.208 11.292L4.74 27.26z"
                    fill="#000"
                />
                <path
                    d="M13.948 15.969L2.18 8.016a15.914 15.914 0 00-.963 1.982l5.958 5.97-5.958 5.972c.277.685.598 1.347.963 1.98l11.768-7.951z"
                    fill="#FFDA44"
                />
                <path
                    d="M31.865 13.886H13.948L4.739 4.677a16.03 16.03 0 00-2.559 3.34l7.937 7.952L2.18 23.92a16.03 16.03 0 002.56 3.34l9.208-9.208h17.917a16.127 16.127 0 000-4.166z"
                    fill="#6DA544"
                />
                <path
                    d="M6.309 28.636a15.898 15.898 0 009.722 3.302c7.378 0 13.586-5.004 15.419-11.803H14.81L6.31 28.636z"
                    fill="#0052B4"
                />
                <path
                    d="M31.45 11.803C29.617 5.004 23.41 0 16.03 0c-3.659 0-7.03 1.231-9.722 3.301l8.502 8.502H31.45z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgSouthAfrica.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSouthAfrica.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSouthAfrica;
