import React from 'react';
import PropTypes from 'prop-types';

function SvgPalau({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#338AF3" cx={16} cy={16} r={16} />
                <circle fill="#FFDA44" cx={12.522} cy={16} r={6.957} />
            </g>
        </svg>
    );
}
SvgPalau.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPalau.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPalau;
