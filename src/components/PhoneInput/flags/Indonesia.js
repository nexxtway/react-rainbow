import React from 'react';
import PropTypes from 'prop-types';

function SvgIndonesia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16" fill="#A2001D" />
            </g>
        </svg>
    );
}
SvgIndonesia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgIndonesia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgIndonesia;
