import React from 'react';
import PropTypes from 'prop-types';

function SvgTrinidadAndTobago({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M8.664 1.777a15.99 15.99 0 00-3.978 2.909c-1.201 1.2-2.17 2.545-2.91 3.978l10.289 11.271 11.271 10.288a15.991 15.991 0 003.978-2.909 15.99 15.99 0 002.91-3.978L19.934 12.065 8.664 1.777z"
                    fill="#F0F0F0"
                />
                <path
                    d="M27.314 27.314a16.097 16.097 0 001.797-2.138L6.824 2.889A16.092 16.092 0 002.89 6.824l22.287 22.287a16.095 16.095 0 002.138-1.797z"
                    fill="#000"
                />
                <g fill="#D80027">
                    <path d="M4.686 27.314c5.048 5.048 12.629 6.017 18.65 2.91L1.776 8.663c-3.107 6.021-2.138 13.602 2.91 18.65zM27.314 4.686c-5.048-5.048-12.629-6.017-18.65-2.91l21.56 21.56c3.107-6.021 2.138-13.602-2.91-18.65z" />
                </g>
            </g>
        </svg>
    );
}
SvgTrinidadAndTobago.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTrinidadAndTobago.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTrinidadAndTobago;
