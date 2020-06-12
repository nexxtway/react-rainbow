import React from 'react';
import PropTypes from 'prop-types';

function SvgAntiguaAndBarbuda({ className, style }) {
    return (
        <svg width={32} height={33} className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M.32 13.425h31.36C30.197 6.122 23.74.625 16 .625 8.26.625 1.803 6.122.32 13.425z"
                    fill="#464655"
                />
                <path
                    fill="#FFE15A"
                    d="M15.672 4.625l.846 4.42 2.473-3.76-.91 4.407 3.724-2.527-2.527 3.723 4.407-.91-3.76 2.473 4.42.846-4.42.846 3.76 2.473-4.407-.91 2.527 3.724-3.724-2.527.91 4.407-2.473-3.76-.846 4.42-.846-4.42-2.472 3.76.91-4.407L9.54 19.43l2.527-3.724-4.407.91 3.76-2.473L7 13.297l4.42-.846L7.66 9.98l4.407.91L9.54 7.164l3.723 2.527-.91-4.407 2.473 3.76z"
                />
                <path
                    d="M0 16.625c0 1.096.11 2.166.32 3.2l15.68.974 15.68-.974c.21-1.034.32-2.104.32-3.2s-.11-2.166-.32-3.2L16 12.451l-15.68.974a16.069 16.069 0 00-.32 3.2z"
                    fill="#4173CD"
                />
                <path
                    d="M31.68 19.825H.32c1.483 7.303 7.94 12.8 15.68 12.8 7.74 0 14.197-5.497 15.68-12.8z"
                    fill="#F0F0F0"
                />
                <path
                    d="M0 16.625c0 8.837 7.163 16 16 16L3.2 7.025a15.929 15.929 0 00-3.2 9.6zM16 32.625c8.837 0 16-7.163 16-16 0-3.602-1.19-6.926-3.2-9.6L16 32.624z"
                    fill="#FF4B55"
                />
            </g>
        </svg>
    );
}

SvgAntiguaAndBarbuda.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAntiguaAndBarbuda.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAntiguaAndBarbuda;
