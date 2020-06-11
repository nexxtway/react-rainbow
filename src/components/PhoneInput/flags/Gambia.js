import React from 'react';
import PropTypes from 'prop-types';

function SvgGambia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 0C9.385 0 3.709 4.014 1.272 9.74h29.456C28.291 4.013 22.615 0 16 0z"
                    fill="#FF4B55"
                />
                <path
                    d="M16 32c6.615 0 12.291-4.014 14.728-9.74H1.272C3.709 27.987 9.385 32 16 32z"
                    fill="#73AF00"
                />
                <path
                    d="M31.449 11.826H.55A16.017 16.017 0 000 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174 0-1.444-.192-2.843-.551-4.174z"
                    fill="#41479B"
                />
            </g>
        </svg>
    );
}
SvgGambia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgGambia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgGambia;
