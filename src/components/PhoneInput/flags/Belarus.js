import React from 'react';
import PropTypes from 'prop-types';

function SvgBelarus({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FCFCFC" cx={16} cy={16} r={16} />
                <g fill="#A2001D">
                    <path d="M6.609 14.84l-1.74-3.155L6.61 8.58l1.739 3.105z" />
                    <path d="M3.13 14.84l-1.739-3.155 1.74-3.105 1.739 3.105zM6.609 23.42l-1.74-3.155 1.74-3.106 1.739 3.106z" />
                    <path d="M3.13 23.42l-1.739-3.155 1.74-3.106 1.739 3.106zM8.348 3.106l-.493-.88a16.044 16.044 0 00-2.474 1.807l1.228 2.228 1.739-3.155zM6.609 25.74l-1.241 2.215c.762.679 1.59 1.286 2.473 1.81l.507-.92-1.74-3.106z" />
                </g>
                <path
                    d="M9.74 20.174v10.554A15.947 15.947 0 0016 32c6.88 0 12.744-4.342 15.005-10.435L9.739 20.174z"
                    fill="#6DA544"
                />
                <path
                    d="M31.005 21.565C31.648 19.832 32 17.957 32 16c0-8.837-7.163-16-16-16a15.95 15.95 0 00-6.26 1.272v20.293h21.265z"
                    fill="#A2001D"
                />
            </g>
        </svg>
    );
}
SvgBelarus.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgBelarus.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgBelarus;
