import React from 'react';
import PropTypes from 'prop-types';

function SvgTunisia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <circle fill="#F0F0F0" cx={16} cy={16} r={7.652} />
                <g fill="#D80027">
                    <path d="M16.943 13.074l1.312 1.81 2.127-.69L19.066 16l1.312 1.81-2.125-.693-1.315 1.808.001-2.235-2.125-.692 2.126-.69z" />
                    <path d="M17.74 20.522a4.522 4.522 0 112.15-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z" />
                </g>
            </g>
        </svg>
    );
}
SvgTunisia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTunisia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTunisia;
