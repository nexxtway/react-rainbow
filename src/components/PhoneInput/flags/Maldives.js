import React from 'react';
import PropTypes from 'prop-types';

function SvgMaldives({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <path fill="#6DA544" d="M5.565 8.348h20.87v15.304H5.565z" />
                <path
                    d="M18.577 20.522a4.522 4.522 0 112.15-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z"
                    fill="#F0F0F0"
                />
            </g>
        </svg>
    );
}
SvgMaldives.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMaldives.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMaldives;
