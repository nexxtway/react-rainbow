import React from 'react';
import PropTypes from 'prop-types';

function SvgTurkey({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <g fill="#F0F0F0">
                    <path d="M15.345 13.074l1.313 1.81 2.126-.69L17.469 16l1.313 1.81-2.126-.693-1.315 1.808.002-2.235-2.126-.692 2.127-.69z" />
                    <path d="M11.762 20.522a4.522 4.522 0 112.151-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z" />
                </g>
            </g>
        </svg>
    );
}
SvgTurkey.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTurkey.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTurkey;
