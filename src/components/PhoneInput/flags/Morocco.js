import React from 'react';
import PropTypes from 'prop-types';

function SvgMorocco({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <path
                    d="M25.456 13.13h-7.224L16 6.26l-2.232 6.87H6.544l5.844 4.246-2.232 6.87L16 20.001l5.844 4.245-2.232-6.87 5.844-4.245zm-11.432 3.715l.755-2.323h2.442l.755 2.323L16 18.281l-1.976-1.436zm2.745-3.714h-1.538L16 10.763l.77 2.368zm2.39 2.854l-.475-1.463h2.49l-2.014 1.463zm-5.843-1.463l-.476 1.463-2.014-1.463h2.49zm-.513 6.082l.769-2.368 1.245.905-2.014 1.463zm4.38-1.463l1.245-.905.77 2.368-2.015-1.463z"
                    fill="#FFDA44"
                />
            </g>
        </svg>
    );
}
SvgMorocco.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMorocco.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMorocco;
