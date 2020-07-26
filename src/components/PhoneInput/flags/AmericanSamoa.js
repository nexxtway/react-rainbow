import React from 'react';
import PropTypes from 'prop-types';

function SvgAmericanSamoa({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#0052B4">
                    <path d="M23.762 2.007A15.927 15.927 0 0016 0C7.164 0 .001 7.162 0 15.998l11.13-5.563 12.632-8.428zM0 16.002C.001 24.838 7.164 32 16 32c2.817 0 5.463-.729 7.762-2.007L11.13 21.565 0 16.002z" />
                </g>
                <path
                    d="M25.096 2.836c-.43-.297-.875-.574-1.334-.829L0 15.998v.004l23.762 13.99c.459-.254.904-.531 1.334-.828L2.739 16 25.096 2.836z"
                    fill="#D80027"
                />
                <path
                    d="M27.826 15.403H25.92a1.514 1.514 0 00-.093-2.038 1.514 1.514 0 000-2.142l-.036.036c.592-.591.627-1.586.036-2.177l-8.566 8.566a1.494 1.494 0 002.125-.007l.164-.15 4.102-.374v1.764h1.392v-1.89l2.086-.19.696-1.398z"
                    fill="#A2001D"
                />
                <path fill="#FFDA44" d="M17.392 19.478L16 18.783l1.392-.696h9.043v1.391z" />
            </g>
        </svg>
    );
}

SvgAmericanSamoa.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAmericanSamoa.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAmericanSamoa;
