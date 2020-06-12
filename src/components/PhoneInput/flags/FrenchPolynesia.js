import React from 'react';
import PropTypes from 'prop-types';

function SvgFrenchPolynesia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#D80027">
                    <path d="M1.945 8.348h28.11C27.34 3.374 22.065 0 16 0 9.935 0 4.66 3.374 1.945 8.348zM16 32c6.065 0 11.34-3.374 14.055-8.348H1.945C4.66 28.626 9.935 32 16 32z" />
                </g>
                <path
                    d="M21.565 16c0 3.074-2.491 4.87-5.565 4.87-3.074 0-5.565-1.796-5.565-4.87a5.565 5.565 0 1111.13 0z"
                    fill="#FFDA44"
                />
                <path d="M21.565 16a5.565 5.565 0 11-11.13 0" fill="#0052B4" />
                <g fill="#D80027">
                    <path d="M12.522 14.609h1.391v2.783h-1.391zM18.087 14.609h1.391v2.783h-1.391zM15.304 12.522h1.391v4.87h-1.391z" />
                </g>
            </g>
        </svg>
    );
}
SvgFrenchPolynesia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgFrenchPolynesia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgFrenchPolynesia;
