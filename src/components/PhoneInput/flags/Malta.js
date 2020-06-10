import React from 'react';
import PropTypes from 'prop-types';

function SvgMalta({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16" fill="#D80027" />
                <path
                    fill="#ACABB1"
                    d="M11.13 6.26V4.175H9.043V6.26H6.957v2.087h2.087v2.087h2.086V8.348h2.087V6.26z"
                />
            </g>
        </svg>
    );
}
SvgMalta.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMalta.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMalta;
