import React from 'react';
import PropTypes from 'prop-types';

function SvgGuernsey({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M31.865 13.913H18.087V.135a16.16 16.16 0 00-4.174 0v13.778H.135a16.158 16.158 0 000 4.174h13.778v13.778a16.16 16.16 0 004.174 0V18.087h13.778a16.16 16.16 0 000-4.174z"
                    fill="#D80027"
                />
                <path
                    fill="#FFDA44"
                    d="M20.522 16.696l1.043.695V14.61l-1.043.695h-3.826v-3.826l.695-1.043H14.61l.695 1.043v3.826h-3.826l-1.043-.695v2.782l1.043-.695h3.826v3.826l-.695 1.043h2.782l-.695-1.043v-3.826z"
                />
            </g>
        </svg>
    );
}
SvgGuernsey.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgGuernsey.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgGuernsey;
