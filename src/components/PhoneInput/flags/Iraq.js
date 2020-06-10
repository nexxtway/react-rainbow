import React from 'react';
import PropTypes from 'prop-types';

function SvgIraq({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M16 0C9.12 0 3.256 4.342.995 10.435h30.01C28.745 4.342 22.879 0 16 0z"
                    fill="#A2001D"
                />
                <path
                    d="M16 32c6.88 0 12.744-4.342 15.005-10.435H.995C3.255 27.658 9.121 32 16 32z"
                    fill="#000"
                />
                <g fill="#496E2D">
                    <path d="M12.174 14.957H9.089c.155-.6.699-1.044 1.346-1.044v-2.087a3.482 3.482 0 00-3.478 3.478v1.74H12.174c.192 0 .348.156.348.347v.696H5.565v2.087h9.044V17.39a2.438 2.438 0 00-2.435-2.434zM17.391 18.087v-6.26h-2.087v8.347h3.479v-2.087zM24.348 18.087v-6.26H22.26v6.26h-.696V16h-2.087v4.174h6.261v-2.087z" />
                </g>
            </g>
        </svg>
    );
}
SvgIraq.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgIraq.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgIraq;
