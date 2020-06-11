import React from 'react';
import PropTypes from 'prop-types';

function SvgAngola({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16c-.696 0-16 2.087-16 2.087L0 16z"
                    fill="#D80027"
                />
                <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16" fill="#000" />
                <g fill="#FFDA44">
                    <path d="M13.806 12.726l1.357.984-.517 1.594L16 14.318l1.356.985-.518-1.594 1.355-.986-1.676.001-.519-1.594-.517 1.595z" />
                    <path d="M20 9.072a7.949 7.949 0 00-4-1.07v2.087a5.874 5.874 0 012.957.79 5.92 5.92 0 012.164 8.078 5.92 5.92 0 01-8.078 2.164 5.874 5.874 0 01-1.976-1.864l-1.742 1.15A7.95 7.95 0 0012 22.928c3.82 2.206 8.723.892 10.928-2.928 2.206-3.82.892-8.723-2.928-10.928z" />
                    <path d="M11.387 14.609a2.087 2.087 0 00.83 2.832l6.777 3.704c-.46.842-.216 1.868.627 2.329l1.83 1.002a1.74 1.74 0 002.361-.692l1.002-1.83-13.427-7.345z" />
                </g>
            </g>
        </svg>
    );
}

SvgAngola.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAngola.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAngola;
