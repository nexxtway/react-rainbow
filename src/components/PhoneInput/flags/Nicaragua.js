import React from 'react';
import PropTypes from 'prop-types';

function SvgNicaragua({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <g fill="#338AF3">
                    <path d="M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0zM16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z" />
                </g>
                <path
                    d="M16 11.13a4.87 4.87 0 100 9.74 4.87 4.87 0 000-9.74zm0 7.653a2.783 2.783 0 110-5.566 2.783 2.783 0 010 5.566z"
                    fill="#FFDA44"
                />
                <path fill="#0052B4" d="M18.41 16.696L16 16l-2.41.696-.803 1.39h6.426z" />
                <path fill="#338AF3" d="M16 12.522l-1.607 2.782L16 16l1.607-.696z" />
                <path fill="#6DA544" d="M13.59 16.696h4.82l-.803-1.392h-3.214z" />
            </g>
        </svg>
    );
}
SvgNicaragua.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgNicaragua.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgNicaragua;
