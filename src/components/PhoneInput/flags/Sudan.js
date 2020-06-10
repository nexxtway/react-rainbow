import React from 'react';
import PropTypes from 'prop-types';

function SvgSudan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M1.647 9.026a15.905 15.905 0 00-1.585 6.943c0 2.488.57 4.843 1.585 6.943L16.03 24.3l14.384-1.388A15.905 15.905 0 0032 15.969c0-2.489-.57-4.844-1.585-6.943L16.031 7.637 1.647 9.026z"
                    fill="#F0F0F0"
                />
                <path
                    d="M1.647 22.912c2.583 5.341 8.053 9.026 14.384 9.026 6.331 0 11.801-3.685 14.384-9.026H1.647z"
                    fill="#000"
                />
                <path
                    d="M1.647 9.026h28.768C27.832 3.684 22.362 0 16.03 0c-6.33 0-11.8 3.684-14.384 9.026z"
                    fill="#D80027"
                />
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#496E2D"
                />
            </g>
        </svg>
    );
}
SvgSudan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSudan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSudan;
