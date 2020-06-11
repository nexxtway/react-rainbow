import React from 'react';
import PropTypes from 'prop-types';

function SvgBurkinaFaso({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16c-.696 0-16 2.087-16 2.087L0 16z"
                    fill="#D80027"
                />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16" fill="#6DA544" />
                <path
                    fill="#FFDA44"
                    d="M16 10.435l1.209 3.72h3.911l-3.164 2.299 1.208 3.72-3.164-2.3-3.165 2.3 1.21-3.72-3.165-2.3h3.911z"
                />
            </g>
        </svg>
    );
}
SvgBurkinaFaso.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgBurkinaFaso.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgBurkinaFaso;
