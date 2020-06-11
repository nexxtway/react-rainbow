import React from 'react';
import PropTypes from 'prop-types';

function SvgGuineaBissau({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M16 0c-1.444 0-2.843.193-4.174.551L10.435 16l1.391 15.449c1.33.358 2.73.551 4.174.551 8.837 0 16-7.163 16-16S24.837 0 16 0z"
                    fill="#FFDA44"
                />
                <path
                    d="M10.435 16l1.391 15.449c1.33.358 2.73.551 4.174.551 8.837 0 16-7.163 16-16H10.435z"
                    fill="#6DA544"
                />
                <g fill="#D80027">
                    <path d="M0 16c0 6.065 3.374 11.34 8.348 14.055V1.945C3.374 4.66 0 9.935 0 16z" />
                    <path d="M0 16c0 7.392 5.014 13.613 11.826 15.449V.55C5.014 2.387 0 8.608 0 16z" />
                </g>
                <path
                    fill="#000"
                    d="M6.046 11.826l1.036 3.189h3.353l-2.713 1.97 1.036 3.189-2.712-1.97-2.712 1.97 1.036-3.189-2.713-1.97H5.01z"
                />
            </g>
        </svg>
    );
}
SvgGuineaBissau.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgGuineaBissau.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgGuineaBissau;
