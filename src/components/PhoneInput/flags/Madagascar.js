import React from 'react';
import PropTypes from 'prop-types';

function SvgMadagascar({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M10.435 16v15.005c1.733.643 3.608.995 5.565.995 8.837 0 16-7.163 16-16s-21.565 0-21.565 0z"
                    fill="#6DA544"
                />
                <path
                    d="M16 0c-1.957 0-3.832.352-5.565.995V16H32c0-8.837-7.163-16-16-16z"
                    fill="#D80027"
                />
            </g>
        </svg>
    );
}
SvgMadagascar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMadagascar.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMadagascar;
