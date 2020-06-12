import React from 'react';
import PropTypes from 'prop-types';

function SvgDjibouti({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M14.643 17.357S4.749 4.675 4.739 4.677A15.919 15.919 0 0116.031 0C24.851 0 32 7.15 32 15.969l-17.357 1.388z"
                    fill="#338AF3"
                />
                <path
                    d="M14.643 15.969S4.749 27.263 4.739 27.26a15.919 15.919 0 0011.292 4.678c8.82 0 15.969-7.15 15.969-15.97H14.643z"
                    fill="#6DA544"
                />
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#F0F0F0"
                />
                <path
                    fill="#D80027"
                    d="M6.525 11.803l1.034 3.182h3.347l-2.707 1.967 1.033 3.183-2.707-1.967-2.707 1.967 1.034-3.183-2.707-1.967h3.346z"
                />
            </g>
        </svg>
    );
}
SvgDjibouti.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgDjibouti.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgDjibouti;
