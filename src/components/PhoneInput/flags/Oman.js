import React from 'react';
import PropTypes from 'prop-types';

function SvgOman({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#D80027">
                    <path d="M0 16c0 6.065 3.374 11.34 8.348 14.055V1.945C3.374 4.66 0 9.935 0 16z" />
                    <path d="M31.005 21.565C31.648 19.832 32 17.957 32 16c0-1.957-.352-3.832-.995-5.565H.995A15.964 15.964 0 000 16c0 1.957.352 3.832.995 5.565L16 22.956l15.005-1.39z" />
                </g>
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#6DA544"
                />
                <path
                    d="M0 16c0 7.392 5.014 13.613 11.826 15.449V.55C5.014 2.387 0 8.608 0 16z"
                    fill="#D80027"
                />
                <path
                    fill="#F0F0F0"
                    d="M9.789 7.04L8.313 5.566l-.984.984-.984-.984L4.87 7.041l.984.984-.984.984 1.475 1.475.984-.984.984.984L9.789 9.01l-.984-.984z"
                />
            </g>
        </svg>
    );
}
SvgOman.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgOman.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgOman;
