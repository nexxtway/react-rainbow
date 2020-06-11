import React from 'react';
import PropTypes from 'prop-types';

function SvgPanama({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path d="M0 16c0 8.837 7.163 16 16 16V16H0z" fill="#0052B4" />
                <path d="M16 0c8.837 0 16 7.163 16 16H16V0z" fill="#D80027" />
                <path
                    fill="#0052B4"
                    d="M9.524 5.565l1.036 3.189h3.353l-2.712 1.97 1.036 3.19-2.713-1.972-2.712 1.971 1.036-3.189-2.712-1.97h3.352z"
                />
                <path
                    fill="#D80027"
                    d="M22.476 18.087l1.036 3.189h3.352l-2.712 1.97 1.036 3.189-2.712-1.97-2.713 1.97 1.036-3.189-2.712-1.97h3.353z"
                />
            </g>
        </svg>
    );
}
SvgPanama.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgPanama.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgPanama;
