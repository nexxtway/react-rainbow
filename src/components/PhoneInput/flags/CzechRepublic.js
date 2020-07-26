import React from 'react';
import PropTypes from 'prop-types';

function SvgCzechRepublic({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16.031} cy={15.969} r={15.969} />
                <path
                    d="M14.643 15.969S4.749 27.263 4.739 27.26a15.919 15.919 0 0011.292 4.678c8.82 0 15.969-7.15 15.969-15.97H14.643z"
                    fill="#D80027"
                />
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#0052B4"
                />
            </g>
        </svg>
    );
}
SvgCzechRepublic.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCzechRepublic.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCzechRepublic;
