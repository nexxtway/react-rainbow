import React from 'react';
import PropTypes from 'prop-types';

function SvgEcuador({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16l-16 1.391L0 16z"
                    fill="#FFDA44"
                />
                <path
                    d="M2.141 24c2.767 4.782 7.937 8 13.859 8s11.092-3.218 13.859-8L16 22.956 2.141 24z"
                    fill="#D80027"
                />
                <path
                    d="M29.859 24A15.926 15.926 0 0032 16H0c0 2.914.78 5.647 2.141 8h27.718z"
                    fill="#0052B4"
                />
                <circle fill="#FFDA44" cx={16} cy={16} r={5.565} />
                <path
                    d="M16 19.478A3.482 3.482 0 0112.522 16v-2.087A3.482 3.482 0 0116 10.435a3.482 3.482 0 013.478 3.478V16A3.482 3.482 0 0116 19.478z"
                    fill="#338AF3"
                />
                <path
                    d="M21.565 7.652h-4.174a1.391 1.391 0 00-2.782 0h-4.174c0 .769.669 1.391 1.437 1.391h-.046c0 .769.623 1.392 1.391 1.392 0 .768.623 1.391 1.392 1.391h2.782c.769 0 1.392-.623 1.392-1.391.768 0 1.39-.623 1.39-1.392h-.045c.768 0 1.437-.622 1.437-1.39z"
                    fill="#000"
                />
            </g>
        </svg>
    );
}
SvgEcuador.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgEcuador.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgEcuador;
