import React from 'react';
import PropTypes from 'prop-types';

function SvgQatar({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M32 16c0-8.837-7.163-16-16-16-3.13 0-6.05.9-8.516 2.453l3.507 1.49-4.73 2.01 4.73 2.01-4.73 2.01 4.73 2.01-4.73 2.009 4.73 2.01-4.73 2.009 4.73 2.01-4.73 2.009 4.73 2.01-4.73 2.01 4.73 2.009-3.505 1.489A15.925 15.925 0 0016 32c8.837 0 16-7.163 16-16z"
                    fill="#751A46"
                />
            </g>
        </svg>
    );
}
SvgQatar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgQatar.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgQatar;
