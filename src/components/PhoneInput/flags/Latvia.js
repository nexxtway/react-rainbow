import React from 'react';
import PropTypes from 'prop-types';

function SvgLatvia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#A2001D">
                    <path d="M16 0C8.608 0 2.387 5.014.551 11.826H31.45C29.613 5.014 23.392 0 16 0zM16 32c7.392 0 13.613-5.014 15.449-11.826H.55C2.387 26.986 8.608 32 16 32z" />
                </g>
            </g>
        </svg>
    );
}
SvgLatvia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgLatvia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgLatvia;
