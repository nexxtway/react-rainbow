import React from 'react';
import PropTypes from 'prop-types';

function SvgVietnam({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#D80027" cx={16} cy={16} r={16} />
                <path
                    fill="#FFDA44"
                    d="M16 8.348l1.727 5.314h5.588l-4.521 3.284 1.727 5.315L16 18.976l-4.52 3.285 1.726-5.314-4.52-3.285h5.587z"
                />
            </g>
        </svg>
    );
}
SvgVietnam.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgVietnam.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgVietnam;
