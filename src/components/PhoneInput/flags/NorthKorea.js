import React from 'react';
import PropTypes from 'prop-types';

function SvgNorthKorea({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#0052B4">
                    <path d="M16 0C11.15 0 6.805 2.158 3.871 5.565H28.13A15.963 15.963 0 0016 0zM28.129 26.435H3.87A15.963 15.963 0 0016 32c4.85 0 9.195-2.158 12.129-5.565z" />
                </g>
                <path
                    d="M29.652 7.652H2.348A15.924 15.924 0 000 16c0 3.06.86 5.918 2.348 8.348h27.304A15.924 15.924 0 0032 16c0-3.06-.86-5.918-2.348-8.348z"
                    fill="#D80027"
                />
                <circle fill="#F0F0F0" cx={9.844} cy={16} r={6.157} />
                <path
                    fill="#D80027"
                    d="M9.844 9.844l1.38 4.25h4.478l-3.623 2.628 1.392 4.264-3.627-2.64-3.622 2.636 1.386-4.26-3.62-2.627h4.474z"
                />
            </g>
        </svg>
    );
}
SvgNorthKorea.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgNorthKorea.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgNorthKorea;
