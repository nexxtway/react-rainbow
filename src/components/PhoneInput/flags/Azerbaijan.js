import React from 'react';
import PropTypes from 'prop-types';

function SvgAzerbaijan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M32 16c0-1.957-.352-3.832-.995-5.565L16 9.739l-15.005.696A15.966 15.966 0 000 16c0 1.957.352 3.832.995 5.565L16 22.261l15.005-.696C31.648 19.832 32 17.957 32 16z"
                    fill="#FF4B55"
                />
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#73AF00"
                />
                <path
                    d="M.995 10.435h30.01C28.745 4.342 22.879 0 16 0 9.12 0 3.256 4.342.995 10.435z"
                    fill="#82AFFF"
                />
                <g fill="#F0F0F0">
                    <path d="M16.31 19.768a3.768 3.768 0 111.793-7.083 4.638 4.638 0 100 6.63 3.75 3.75 0 01-1.792.453z" />
                    <path d="M19.21 13.391l.498 1.404 1.346-.64-.64 1.346 1.404.499-1.404.5.64 1.345-1.346-.64-.499 1.404-.499-1.404-1.345.64.64-1.346L16.6 16l1.403-.5-.64-1.345 1.346.64z" />
                </g>
            </g>
        </svg>
    );
}
SvgAzerbaijan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAzerbaijan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAzerbaijan;
