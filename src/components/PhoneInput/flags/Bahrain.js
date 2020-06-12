import React from 'react';
import PropTypes from 'prop-types';

function SvgBahrain({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 0c-3.211 0-6.2.947-8.706 2.575l4.115 2.758L6.26 8l5.148 2.666-5.148 2.667 5.148 2.666-5.148 2.667 5.148 2.666L6.26 24l5.148 2.667-4.116 2.759A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgBahrain.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgBahrain.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgBahrain;
