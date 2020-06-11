import React from 'react';
import PropTypes from 'prop-types';

function SvgThailand({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M31.005 10.435H.995A15.964 15.964 0 000 16c0 1.957.352 3.832.995 5.565h30.01C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565z"
                    fill="#0052B4"
                />
                <g fill="#D80027">
                    <path d="M16 0C11.15 0 6.805 2.158 3.871 5.565H28.13A15.963 15.963 0 0016 0zM28.129 26.435H3.87A15.963 15.963 0 0016 32c4.85 0 9.195-2.158 12.129-5.565z" />
                </g>
            </g>
        </svg>
    );
}
SvgThailand.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgThailand.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgThailand;
