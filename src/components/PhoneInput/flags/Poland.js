import React from 'react';
import PropTypes from 'prop-types';

function SvgPoland({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16" fill="#D80027" />
            </g>
        </svg>
    );
}
SvgPoland.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPoland.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPoland;
