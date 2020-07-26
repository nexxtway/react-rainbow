import React from 'react';
import PropTypes from 'prop-types';

function SvgMontenegro({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFDA44" cx={16} cy={16} r={16} />
                <path
                    d="M32 16c0-5.491-2.767-10.336-6.982-13.217H6.982C2.767 5.664 0 10.509 0 16c0 5.491 2.767 10.336 6.982 13.217h18.036C29.233 26.336 32 21.491 32 16z"
                    fill="#A2001D"
                />
                <g fill="#FFDA44">
                    <path d="M12.522 11.826h6.956V9.043l-1.391.696L16 7.652 13.913 9.74l-1.391-.696zM22.26 16h-3.476a1.605 1.605 0 10-2.805-1.559A1.605 1.605 0 1013.174 16H9.739c0 1.064.927 1.926 1.99 1.926h-.064c0 .873.58 1.61 1.377 1.847l-1.564 1.563 1.476 1.476 2.093-2.093c.082.03.167.054.255.07l-1.265 2.856a5.199 5.199 0 001.963.383 5.2 5.2 0 001.963-.383l-1.265-2.856c.088-.016.173-.04.255-.07l2.093 2.093 1.476-1.476-1.564-1.563a1.927 1.927 0 001.376-1.847h-.064c1.064 0 1.99-.862 1.99-1.926z" />
                </g>
                <path
                    fill="#6DA544"
                    d="M16 17.044l-2.26 1.043v2.087L16 21.565l2.26-1.391v-2.087z"
                />
                <path fill="#0052B4" d="M13.739 16h4.522v2.783h-4.522z" />
            </g>
        </svg>
    );
}
SvgMontenegro.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMontenegro.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMontenegro;
