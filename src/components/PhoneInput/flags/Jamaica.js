import React from 'react';
import PropTypes from 'prop-types';

function SvgJamaica({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFDA44" cx={16} cy={16} r={16} />
                <path
                    d="M25.741 3.308A15.928 15.928 0 0016 0a15.929 15.929 0 00-9.741 3.308L16 13.047l9.741-9.74z"
                    fill="#6DA544"
                />
                <path
                    d="M3.307 6.259A15.929 15.929 0 000 16c0 3.666 1.234 7.043 3.308 9.741L13.047 16l-9.74-9.741z"
                    fill="#000"
                />
                <path
                    d="M6.259 28.692A15.928 15.928 0 0016 32c3.666 0 7.043-1.234 9.741-3.308L16 18.953l-9.741 9.74z"
                    fill="#6DA544"
                />
                <path
                    d="M28.692 25.741A15.928 15.928 0 0032 16c0-3.666-1.234-7.043-3.308-9.741L18.953 16l9.74 9.741z"
                    fill="#000"
                />
            </g>
        </svg>
    );
}
SvgJamaica.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgJamaica.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgJamaica;
