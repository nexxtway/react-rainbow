import React from 'react';
import PropTypes from 'prop-types';

function SvgAlgeria({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c0-.696-2.087-16-2.087-16L16 0z"
                    fill="#F0F0F0"
                />
                <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0" fill="#496E2D" />
                <g fill="#D80027">
                    <path d="M19.438 12.931l-1.313 1.81-2.126-.69 1.315 1.807L16 17.668l2.125-.693 1.315 1.808-.001-2.235 2.125-.692-2.126-.69z" />
                    <path d="M17.327 20.522a4.522 4.522 0 112.151-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z" />
                </g>
            </g>
        </svg>
    );
}

SvgAlgeria.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAlgeria.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAlgeria;
