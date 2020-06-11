import React from 'react';
import PropTypes from 'prop-types';

function SvgLesotho({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16c0 2.493.57 4.853 1.588 6.956L16 23.652l14.412-.695A15.936 15.936 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 8.348l-14.412.695A15.936 15.936 0 000 16z"
                    fill="#F0F0F0"
                />
                <path
                    d="M16 32c6.343 0 11.824-3.692 14.412-9.044H1.588C4.176 28.308 9.657 32 16 32z"
                    fill="#6DA544"
                />
                <path
                    d="M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0z"
                    fill="#0052B4"
                />
                <path
                    d="M17.044 15.652v-3.826h-2.087v3.826l-2.521 2.52A4.171 4.171 0 0016 20.175c1.51 0 2.831-.801 3.564-2.001l-2.52-2.52z"
                    fill="#000"
                />
            </g>
        </svg>
    );
}
SvgLesotho.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgLesotho.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgLesotho;
