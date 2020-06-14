import React from 'react';
import PropTypes from 'prop-types';

function SvgZambia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#496E2D" cx={16} cy={16} r={16} />
                <path d="M22.26 16H16v16c1.87 0 3.665-.322 5.333-.912L22.261 16z" fill="#D80027" />
                <path
                    d="M26.667 27.925A15.959 15.959 0 0032 16h-6.26l.927 11.925z"
                    fill="#FF9811"
                />
                <path d="M21.333 16v15.088a15.99 15.99 0 005.334-3.163V16h-5.334z" fill="#000" />
                <path
                    d="M29.565 10.435h-4.174a1.391 1.391 0 00-2.782 0h-4.174c0 .768.669 1.391 1.437 1.391h-.046c0 .769.623 1.391 1.391 1.391 0 .769.623 1.392 1.392 1.392h2.782c.769 0 1.392-.623 1.392-1.392.768 0 1.39-.622 1.39-1.39h-.045c.768 0 1.437-.624 1.437-1.392z"
                    fill="#FF9811"
                />
            </g>
        </svg>
    );
}
SvgZambia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgZambia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgZambia;
