import React from 'react';
import PropTypes from 'prop-types';

function SvgSolomonIslands({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M27.26 27.26c5.99-5.988 6.226-15.55.713-21.822l-12.004 10.53L5.438 27.974c6.272 5.513 15.834 5.277 21.823-.712z"
                    fill="#496E2D"
                />
                <path
                    d="M4.677 4.677c5.989-5.99 15.55-6.226 21.823-.712L15.97 15.969 3.965 26.5c-5.514-6.273-5.277-15.834.712-21.823z"
                    fill="#0052B4"
                />
                <path
                    d="M26.5 3.965L3.965 26.5a16.125 16.125 0 001.473 1.473L27.973 5.438A16.16 16.16 0 0026.5 3.965z"
                    fill="#FFDA44"
                />
                <g fill="#F0F0F0">
                    <path d="M6.728 5.554l.345 1.06h1.115l-.902.656.345 1.061-.903-.655-.902.655.345-1.06-.903-.656h1.116zM12.426 5.554l.344 1.06h1.116l-.903.656.345 1.061-.902-.655-.903.655.345-1.06-.902-.656h1.115zM6.728 11.108l.345 1.061h1.115l-.902.656.345 1.06-.903-.655-.902.656.345-1.061-.903-.656h1.116zM12.426 11.108l.344 1.061h1.116l-.903.656.345 1.06-.902-.655-.903.656.345-1.061-.902-.656h1.115zM9.577 8.331l.345 1.061h1.115l-.902.656.344 1.06-.902-.655-.902.655.344-1.06-.902-.656h1.115z" />
                </g>
            </g>
        </svg>
    );
}
SvgSolomonIslands.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSolomonIslands.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSolomonIslands;
