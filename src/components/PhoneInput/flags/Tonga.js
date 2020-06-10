import React from 'react';
import PropTypes from 'prop-types';

function SvgTonga({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#D80027">
                    <path d="M10.435 8.348V6.26H8.348v2.087H6.26v2.087h2.087v2.087h2.087v-2.087h2.087V8.348z" />
                    <path d="M16 0v16H0c0 8.837 7.163 16 16 16s16-7.163 16-16S24.837 0 16 0z" />
                </g>
            </g>
        </svg>
    );
}
SvgTonga.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTonga.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTonga;
