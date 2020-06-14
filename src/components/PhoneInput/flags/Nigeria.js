import React from 'react';
import PropTypes from 'prop-types';

function SvgNigeria({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#6DA544">
                    <path d="M0 16c0 6.88 4.342 12.744 10.435 15.005V.995C4.342 3.255 0 9.121 0 16zM32 16C32 9.12 27.658 3.256 21.565.995v30.01C27.658 28.745 32 22.88 32 16z" />
                </g>
            </g>
        </svg>
    );
}
SvgNigeria.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgNigeria.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgNigeria;
