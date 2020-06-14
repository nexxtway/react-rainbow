import React from 'react';
import PropTypes from 'prop-types';

function SvgLibya({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M1.588 9.043A15.936 15.936 0 000 16c0 2.493.57 4.853 1.588 6.956L16 24.348l14.412-1.392A15.936 15.936 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 7.654 1.588 9.042z"
                    fill="#000"
                />
                <path
                    d="M1.588 22.956C4.176 28.308 9.657 32 16 32s11.824-3.692 14.412-9.044H1.588z"
                    fill="#496E2D"
                />
                <path
                    d="M1.588 9.043h28.824C27.824 3.692 22.343 0 16 0S4.176 3.692 1.588 9.043z"
                    fill="#D80027"
                />
                <g fill="#F0F0F0">
                    <path d="M19.724 13.074l1.313 1.81 2.126-.69L21.848 16l1.313 1.81-2.126-.693-1.314 1.808V16.69l-2.124-.692 2.126-.69z" />
                    <path d="M16.141 20.522a4.522 4.522 0 112.151-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544z" />
                </g>
            </g>
        </svg>
    );
}
SvgLibya.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgLibya.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgLibya;
