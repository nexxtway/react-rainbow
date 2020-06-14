import React from 'react';
import PropTypes from 'prop-types';

function SvgNamibia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M4.686 27.314c.671.67 1.388 1.27 2.139 1.796L29.11 6.825a16.086 16.086 0 00-3.935-3.935L2.89 25.175a16.098 16.098 0 001.796 2.139z"
                    fill="#A2001D"
                />
                <path
                    d="M4.686 4.686C-.36 9.734-1.33 17.315 1.777 23.336l21.56-21.559C17.314-1.33 9.733-.36 4.686 4.687z"
                    fill="#0052B4"
                />
                <path
                    d="M27.314 27.314c5.047-5.048 6.016-12.629 2.909-18.65L8.663 30.223c6.022 3.107 13.603 2.138 18.65-2.91z"
                    fill="#496E2D"
                />
                <path
                    fill="#FFDA44"
                    d="M13.217 9.043l-1.793.844.955 1.736-1.947-.372-.246 1.966-1.356-1.446-1.356 1.446-.247-1.966-1.947.372.955-1.736-1.793-.844L6.235 8.2 5.28 6.464l1.947.372.247-1.966L8.83 6.316l1.356-1.446.246 1.966 1.947-.372-.954 1.736z"
                />
            </g>
        </svg>
    );
}
SvgNamibia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgNamibia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgNamibia;
