import React from 'react';
import PropTypes from 'prop-types';

function SvgSouthSudan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16.031} cy={15.969} r={15.969} />
                <path
                    d="M30.754 9.778C28.336 4.033 22.655 0 16.031 0c-4.41 0-8.401 1.788-11.29 4.678l3.998 5.1h22.015z"
                    fill="#000"
                />
                <path
                    d="M8.784 22.102L4.74 27.26a15.917 15.917 0 0011.291 4.678c6.646 0 12.343-4.06 14.748-9.836H8.784z"
                    fill="#496E2D"
                />
                <path
                    d="M3.534 11.745v8.39H31.45c.358-1.329.55-2.725.55-4.166 0-1.462-.197-2.878-.565-4.224H3.534z"
                    fill="#A2001D"
                />
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#0052B4"
                />
                <path
                    fill="#FFDA44"
                    d="M5.264 11.999l1.949 2.72 3.19-1.014-1.985 2.694 1.949 2.72-3.176-1.054-1.984 2.694.022-3.346-3.176-1.055 3.19-1.013z"
                />
            </g>
        </svg>
    );
}
SvgSouthSudan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSouthSudan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSouthSudan;
