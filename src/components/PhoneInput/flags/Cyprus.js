import React from 'react';
import PropTypes from 'prop-types';

function SvgCyprus({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FCFCFC" cx={16} cy={16} r={16} />
                <path
                    d="M25.044 13.913h-2.087a6.957 6.957 0 01-13.913 0H6.957a9.047 9.047 0 006.574 8.702 2.315 2.315 0 00.241 2.527l2.274-1.822 2.274 1.822c.6-.749.66-1.756.23-2.55a9.047 9.047 0 006.494-8.679z"
                    fill="#6DA544"
                />
                <path
                    d="M10.435 13.217s0 3.479 3.478 3.479l.696.695H16s.696-2.087 2.087-2.087c0 0 0-1.391 1.391-1.391h2.087s-.695-2.783 2.783-4.87l-1.392-.695s-4.87 3.478-8.347 2.782v1.392h-1.392l-.695-.696-2.087 1.391z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgCyprus.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCyprus.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCyprus;
