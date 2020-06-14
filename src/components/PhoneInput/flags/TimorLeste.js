import React from 'react';
import PropTypes from 'prop-types';

function SvgTimorLeste({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFDA44" cx={16.031} cy={15.969} r={15.969} />
                <path
                    d="M16.031 0c-3.91 0-7.49 1.406-10.266 3.739l17.21 12.23-17.21 12.23a15.903 15.903 0 0010.266 3.739c8.82 0 15.969-7.15 15.969-15.97C32 7.15 24.85 0 16.031 0z"
                    fill="#D80027"
                />
                <path
                    d="M4.74 4.677c-6.237 6.236-6.237 16.347 0 22.584L16.03 15.969 4.74 4.677z"
                    fill="#000"
                />
                <path
                    fill="#F0F0F0"
                    d="M4.49 12.31l2.43 2.3 2.939-1.6-1.437 3.022 2.43 2.3-3.317-.432-1.437 3.022-.614-3.29-3.318-.432 2.938-1.6z"
                />
            </g>
        </svg>
    );
}
SvgTimorLeste.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTimorLeste.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTimorLeste;
