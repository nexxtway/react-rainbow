import React from 'react';
import PropTypes from 'prop-types';

function SvgLiechtenstein({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16c.696 0 16-2.087 16-2.087L32 16z"
                    fill="#D80027"
                />
                <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16" fill="#0052B4" />
                <path
                    d="M11.826 11.13a2.087 2.087 0 00-3.478-1.555V8.348h.695V6.956h-.695v-.695H6.956v.696h-.695v1.39h.696v1.228a2.087 2.087 0 00-2.783 3.11v1.228h6.956v-1.227c.427-.383.696-.938.696-1.556z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgLiechtenstein.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgLiechtenstein.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgLiechtenstein;
