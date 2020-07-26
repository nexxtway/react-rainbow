import React from 'react';
import PropTypes from 'prop-types';

function SvgMicronesia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#338AF3" cx={16} cy={16} r={16} />
                <g fill="#F0F0F0">
                    <path d="M16 6.957l.69 2.125h2.236l-1.808 1.314.69 2.126L16 11.208l-1.808 1.314.69-2.126-1.808-1.314h2.235zM6.957 16l2.125-.69v-2.236l1.314 1.809 2.126-.691L11.208 16l1.314 1.808-2.126-.69-1.314 1.808V16.69zM16 25.044l-.69-2.126h-2.236l1.808-1.314-.69-2.126L16 20.792l1.808-1.314-.69 2.126 1.808 1.314H16.69zM25.044 16l-2.126.69v2.236l-1.314-1.808-2.126.69L20.792 16l-1.314-1.808 2.126.69 1.314-1.808v2.235z" />
                </g>
            </g>
        </svg>
    );
}
SvgMicronesia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMicronesia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMicronesia;
