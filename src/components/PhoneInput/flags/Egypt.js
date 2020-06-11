import React from 'react';
import PropTypes from 'prop-types';

function SvgEgypt({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z"
                    fill="#D80027"
                />
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#000"
                />
                <path
                    d="M21.565 14.26h-4.174a1.391 1.391 0 00-2.782 0h-4.174c0 .77.669 1.392 1.437 1.392h-.046c0 .769.623 1.392 1.391 1.392 0 .768.623 1.39 1.392 1.39h2.782c.769 0 1.392-.622 1.392-1.39.768 0 1.39-.623 1.39-1.392h-.045c.768 0 1.437-.623 1.437-1.391z"
                    fill="#FF9811"
                />
            </g>
        </svg>
    );
}
SvgEgypt.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgEgypt.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgEgypt;
