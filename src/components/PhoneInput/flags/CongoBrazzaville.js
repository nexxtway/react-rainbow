import React from 'react';
import PropTypes from 'prop-types';

function SvgCongoBrazzaville({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M8.656 30.169l11.731-9.782 9.782-11.73a16.04 16.04 0 00-6.878-6.883L11.55 11.55 1.773 23.29a16.038 16.038 0 006.882 6.879z"
                    fill="#FFDA44"
                />
                <path
                    d="M27.26 27.261c5.039-5.038 6.006-12.604 2.904-18.614L8.647 30.164c6.01 3.102 13.576 2.135 18.614-2.903z"
                    fill="#D80027"
                />
                <path
                    d="M4.677 4.677C-.361 9.715-1.328 17.28 1.773 23.29L23.291 1.773C17.28-1.329 9.715-.36 4.677 4.677z"
                    fill="#6DA544"
                />
            </g>
        </svg>
    );
}
SvgCongoBrazzaville.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCongoBrazzaville.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCongoBrazzaville;
