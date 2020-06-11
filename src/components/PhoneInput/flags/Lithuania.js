import React from 'react';
import PropTypes from 'prop-types';

function SvgLithuania({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M31.005 21.565C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565L16 9.043.995 10.435A15.964 15.964 0 000 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39z"
                    fill="#6DA544"
                />
                <path
                    d="M31.005 10.435C28.745 4.342 22.879 0 16 0 9.12 0 3.256 4.342.995 10.435h30.01z"
                    fill="#FFDA44"
                />
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgLithuania.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgLithuania.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgLithuania;
