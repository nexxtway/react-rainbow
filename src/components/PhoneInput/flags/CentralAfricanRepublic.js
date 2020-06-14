import React from 'react';
import PropTypes from 'prop-types';

function SvgCentralAfricanRepublic({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#0052B4">
                    <path d="M30.055 8.348A16.036 16.036 0 0020.174.55l-.696 7.798h10.577zM1.945 8.348h10.577L11.826.55a16.036 16.036 0 00-9.88 7.798z" />
                </g>
                <g fill="#6DA544">
                    <path d="M19.478 16v7.652h10.576A15.928 15.928 0 0032 16H19.478zM12.522 16H0c0 2.772.705 5.379 1.945 7.652h10.577V16z" />
                </g>
                <g fill="#FFDA44">
                    <path d="M1.945 23.652a16.036 16.036 0 009.881 7.798l.696-6.82-10.577-.978zM20.174 31.45a16.036 16.036 0 009.88-7.798l-10.576.978.696 6.82z" />
                    <path d="M19.478 24.63l10.577-.978H19.478zM12.522 23.652H1.945l10.577.978z" />
                </g>
                <path
                    d="M16 0c-1.444 0-2.843.193-4.174.551V31.45c1.33.358 2.73.551 4.174.551 1.444 0 2.843-.192 4.174-.551V.55A16.018 16.018 0 0016 0z"
                    fill="#D80027"
                />
                <path
                    fill="#FFDA44"
                    d="M8.606 3.478l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.822.432-1.33-1.13-.82h1.397z"
                />
            </g>
        </svg>
    );
}
SvgCentralAfricanRepublic.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCentralAfricanRepublic.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCentralAfricanRepublic;
