import React from 'react';
import PropTypes from 'prop-types';

function SvgPakistan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <g fill="#F0F0F0">
                    <circle cx={16} cy={16} r={16} />
                    <path d="M0 16c0 6.065 3.374 11.34 8.348 14.055V1.945C3.374 4.66 0 9.935 0 16z" />
                </g>
                <path
                    d="M16 0c-2.772 0-5.379.705-7.652 1.945v28.11A15.928 15.928 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
                    fill="#496E2D"
                />
                <g fill="#F0F0F0">
                    <path d="M22.84 18.646a4.522 4.522 0 11-3.234-8.15 5.565 5.565 0 104.66 6.45 4.5 4.5 0 01-1.425 1.7zM22.754 10.435l1.14 1.229 1.521-.705-.816 1.464 1.14 1.23-1.645-.325-.816 1.464-.2-1.664-1.645-.324 1.521-.705z" />
                </g>
            </g>
        </svg>
    );
}
SvgPakistan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPakistan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPakistan;
