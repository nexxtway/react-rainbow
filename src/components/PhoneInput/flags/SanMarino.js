import React from 'react';
import PropTypes from 'prop-types';

function SvgSanMarino({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16c.696 0 16-2.087 16-2.087L32 16z"
                    fill="#338AF3"
                />
                <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16" fill="#F0F0F0" />
                <path
                    d="M22.351 11.04L16 17.391l-6.351-6.35a7.608 7.608 0 00-1.301 4.263v2.087c0 3.351 2.165 6.206 5.17 7.239a2.314 2.314 0 00.254 2.5l2.274-1.822 2.274 1.822a2.315 2.315 0 00.24-2.528c2.965-1.055 5.092-3.89 5.092-7.21v-2.088c0-1.577-.48-3.045-1.301-4.264z"
                    fill="#6DA544"
                />
                <path
                    d="M16 22.956a5.571 5.571 0 01-5.565-5.565v-2.087A5.571 5.571 0 0116 9.74a5.572 5.572 0 015.565 5.565v2.087A5.571 5.571 0 0116 22.957z"
                    fill="#FFDA44"
                />
                <path
                    d="M19.478 17.391v-2.087A3.482 3.482 0 0016 11.826a3.482 3.482 0 00-3.478 3.478v2.087l3.478.696 3.478-.696z"
                    fill="#338AF3"
                />
                <path
                    d="M12.522 17.391A3.482 3.482 0 0016 20.87a3.482 3.482 0 003.478-3.479h-6.956z"
                    fill="#6DA544"
                />
                <path
                    d="M20.174 9.74a2.087 2.087 0 00-3.478-1.556V6.957h.695V5.565h-.695V4.87h-1.392v.695h-.695v1.391h.695v1.228a2.087 2.087 0 00-2.783 3.11v1.228h6.957v-1.228c.427-.382.696-.937.696-1.555z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgSanMarino.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSanMarino.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSanMarino;
