import React from 'react';
import PropTypes from 'prop-types';

function SvgJapan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <circle fill="#D80027" cx={16} cy={16} r={6.957} />
            </g>
        </svg>
    );
}
SvgJapan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgJapan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgJapan;
