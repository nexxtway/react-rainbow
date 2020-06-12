import React from 'react';
import PropTypes from 'prop-types';

function SvgSingapore({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16" fill="#D80027" />
                <g fill="#F0F0F0">
                    <path d="M9.74 8.348a4.87 4.87 0 013.825-4.757 4.87 4.87 0 100 9.513A4.87 4.87 0 019.74 8.348zM16 3.826l.345 1.063h1.118l-.904.657.345 1.063L16 5.952l-.904.657.345-1.063-.904-.657h1.118z" />
                    <path d="M13.29 5.913l.344 1.063h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM18.711 5.913l.345 1.063h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM17.668 9.043l.345 1.063h1.117l-.904.657.346 1.063-.904-.657-.905.657.346-1.063-.904-.657h1.117zM14.332 9.043l.346 1.063h1.117l-.904.657.346 1.063-.905-.657-.904.657.346-1.063-.904-.657h1.117z" />
                </g>
            </g>
        </svg>
    );
}
SvgSingapore.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSingapore.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSingapore;
