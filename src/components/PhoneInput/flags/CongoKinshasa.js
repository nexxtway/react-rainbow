import React from 'react';
import PropTypes from 'prop-types';

function SvgCongoKinshasa({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M30.223 8.664a15.99 15.99 0 00-2.909-3.978c-1.2-1.201-2.545-2.17-3.977-2.91L12.065 12.066 1.777 23.336a15.99 15.99 0 002.909 3.978 15.99 15.99 0 003.978 2.91l11.271-10.289L30.223 8.664z"
                    fill="#FFDA44"
                />
                <path
                    d="M4.686 27.314c.671.671 1.387 1.27 2.138 1.797L29.111 6.824a16.092 16.092 0 00-3.935-3.935L2.889 25.176a16.095 16.095 0 001.797 2.138z"
                    fill="#D80027"
                />
                <g fill="#338AF3">
                    <path d="M4.686 4.686c-5.048 5.048-6.017 12.629-2.91 18.65l21.56-21.56C17.316-1.33 9.735-.361 4.687 4.687zM27.314 27.314c5.048-5.048 6.017-12.629 2.91-18.65l-21.56 21.56c6.021 3.107 13.602 2.138 18.65-2.91z" />
                </g>
                <path
                    fill="#FFDA44"
                    d="M8.527 4.87l.863 2.656h2.794L9.924 9.17l.863 2.657-2.26-1.642-2.26 1.642.863-2.657-2.26-1.643h2.793z"
                />
            </g>
        </svg>
    );
}
SvgCongoKinshasa.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCongoKinshasa.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCongoKinshasa;
