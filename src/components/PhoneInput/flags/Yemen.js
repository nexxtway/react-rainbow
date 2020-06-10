import React from 'react';
import PropTypes from 'prop-types';

function SvgYemen({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#000"
                />
                <path
                    d="M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgYemen.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgYemen.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgYemen;
