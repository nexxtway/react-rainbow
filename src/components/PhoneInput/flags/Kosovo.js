import React from 'react';
import PropTypes from 'prop-types';

function SvgKosovo({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#0052B4" cx={16} cy={16} r={16} />
                <g fill="#F0F0F0">
                    <path d="M7.028 9.74l.345 1.062h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM10.506 8.696l.346 1.063h1.117l-.904.657.345 1.062-.904-.656-.904.656.346-1.062-.905-.657h1.118zM13.985 7.652l.345 1.063h1.117l-.904.657.346 1.063-.904-.657-.905.657.346-1.063-.904-.657h1.117zM24.972 9.74l-.345 1.062h-1.118l.904.657-.345 1.063.904-.657.904.657-.345-1.063.904-.657h-1.118zM21.494 8.696l-.346 1.063h-1.117l.904.657-.345 1.062.904-.656.904.656-.346-1.062.904-.657H21.84zM18.015 7.652l-.345 1.063h-1.117l.904.657-.346 1.063.904-.657.905.657-.346-1.063.904-.657h-1.117z" />
                </g>
                <path
                    d="M18.783 16.696L16 13.217l-1.391.696v1.391l-2.087 1.392H11.13v1.797a5.566 5.566 0 013.479 5.16H16V22.26l1.391-1.391 1.392 1.39 1.39-1.39v-1.392l1.392-2.087-2.782-.695z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgKosovo.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgKosovo.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgKosovo;
