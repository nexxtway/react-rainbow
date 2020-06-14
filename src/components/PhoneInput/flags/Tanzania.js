import React from 'react';
import PropTypes from 'prop-types';

function SvgTanzania({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFDA44" cx={16} cy={16} r={16} />
                <path
                    d="M4.686 27.314c.671.67 1.388 1.27 2.139 1.796L29.11 6.825a16.086 16.086 0 00-3.935-3.935L2.89 25.175a16.105 16.105 0 001.796 2.139z"
                    fill="#000"
                />
                <path
                    d="M4.686 4.686C-.36 9.734-1.33 17.315 1.777 23.336l21.56-21.559C17.314-1.33 9.733-.36 4.686 4.687z"
                    fill="#6DA544"
                />
                <path
                    d="M27.314 27.314c5.047-5.048 6.016-12.629 2.909-18.65L8.663 30.223c6.022 3.107 13.603 2.138 18.65-2.91z"
                    fill="#338AF3"
                />
            </g>
        </svg>
    );
}
SvgTanzania.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTanzania.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTanzania;
