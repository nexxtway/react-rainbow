import React from 'react';
import PropTypes from 'prop-types';

function SvgColombia({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16l-16 1.391L0 16z"
                    fill="#FFDA44"
                />
                <path
                    d="M2.141 24c2.767 4.782 7.937 8 13.859 8s11.092-3.218 13.859-8L16 22.956 2.141 24z"
                    fill="#D80027"
                />
                <path
                    d="M29.859 24A15.926 15.926 0 0032 16H0c0 2.914.78 5.647 2.141 8h27.718z"
                    fill="#0052B4"
                />
            </g>
        </svg>
    );
}
SvgColombia.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgColombia.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgColombia;
