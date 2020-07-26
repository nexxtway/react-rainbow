import React from 'react';
import PropTypes from 'prop-types';

function SvgJersey({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M28.694 25.742L18.95 16l9.743-9.742a16.17 16.17 0 00-2.952-2.952L16 13.05 6.258 3.306a16.153 16.153 0 00-2.952 2.952L13.05 16l-9.743 9.742a16.17 16.17 0 002.952 2.952L16 18.95l9.742 9.743a16.161 16.161 0 002.952-2.952z"
                    fill="#D80027"
                />
                <path
                    fill="#FFDA44"
                    d="M13.217 4.87L16 5.565l2.783-.695V2.504l-1.113.557L16 1.39l-1.67 1.67-1.113-.557z"
                />
                <path
                    d="M13.217 4.87v1.739C13.217 8.739 16 9.39 16 9.39s2.783-.652 2.783-2.782v-1.74h-5.566z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgJersey.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgJersey.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgJersey;
