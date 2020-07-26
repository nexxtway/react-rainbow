import React from 'react';
import PropTypes from 'prop-types';

function SvgGreenland({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16c-.696 0-16 2.087-16 2.087L0 16z"
                    fill="#F0F0F0"
                />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16" fill="#D80027" />
                <circle fill="#F0F0F0" cx={11.13} cy={16} r={7.652} />
                <path d="M3.478 16a7.652 7.652 0 0115.305 0" fill="#D80027" />
            </g>
        </svg>
    );
}
SvgGreenland.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgGreenland.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgGreenland;
