import React from 'react';
import PropTypes from 'prop-types';

function SvgTogo({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFDA44" cx={16} cy={16} r={16} />
                <g fill="#496E2D">
                    <path d="M16 0c-.012 0-.696 6.4-.696 6.4h13.497C25.88 2.514 21.235 0 16 0zM16 32c5.235 0 9.882-2.514 12.8-6.4H3.2C6.117 29.486 10.765 32 16 32zM31.68 12.8H15.304L16 19.2h15.68c.21-1.034.32-2.104.32-3.2s-.11-2.166-.32-3.2z" />
                </g>
                <path
                    d="M16 19.2V0C7.163 0 0 7.163 0 16c0 1.096.11 2.166.32 3.2H16z"
                    fill="#D80027"
                />
                <path
                    fill="#F0F0F0"
                    d="M8.829 7.652l1.036 3.189h3.352l-2.712 1.97L11.541 16l-2.712-1.97L6.116 16l1.036-3.189-2.712-1.97h3.353z"
                />
            </g>
        </svg>
    );
}
SvgTogo.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTogo.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTogo;
