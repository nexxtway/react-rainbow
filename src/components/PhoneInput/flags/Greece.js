import React from 'react';
import PropTypes from 'prop-types';

function SvgGreece({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#338AF3">
                    <path d="M16 11.826h15.449a15.91 15.91 0 00-1.797-4.174H16v4.174zM6.04 28.522h19.92a16.08 16.08 0 003.692-4.174H2.348a16.084 16.084 0 003.692 4.174zM5.565 3.871a16.078 16.078 0 00-3.217 3.781h3.217v-3.78zM16 16v-4.174H9.74V16H5.564v-4.174H.551A16.018 16.018 0 000 16c0 1.444.193 2.843.551 4.174H31.45c.358-1.33.551-2.73.551-4.174H16zM16 0a15.95 15.95 0 00-6.26 1.272v6.38H16V3.478h9.96A15.932 15.932 0 0016 0z" />
                </g>
            </g>
        </svg>
    );
}
SvgGreece.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgGreece.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgGreece;
