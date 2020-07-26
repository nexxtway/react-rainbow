import React from 'react';
import PropTypes from 'prop-types';

function SvgAndorra({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M9.043 30.412A15.936 15.936 0 0016 32c2.493 0 4.853-.57 6.956-1.588L24.348 16 22.956 1.588A15.936 15.936 0 0016 0c-2.493 0-4.853.57-6.957 1.588L7.654 16l1.39 14.412z"
                    fill="#FFDA44"
                />
                <path
                    d="M22.956 30.412C28.308 27.824 32 22.343 32 16S28.308 4.176 22.956 1.588v28.824z"
                    fill="#D80027"
                />
                <path
                    d="M9.043 30.412V1.588C3.692 4.176 0 9.657 0 16s3.692 11.824 9.043 14.412z"
                    fill="#0052B4"
                />
                <g fill="#D80027">
                    <path d="M16 21.565V16h4.174v2.087c0 .363-.696 1.691-2.413 2.783-.65.413-1.323.546-1.761.695zM11.826 11.826H16V16h-4.174z" />
                </g>
                <path
                    d="M18.087 10.435A1.391 1.391 0 0016 9.23a1.391 1.391 0 00-2.087 1.204h-3.478v6.956c0 2.59 2.056 4.088 3.67 4.864A1.391 1.391 0 0016 24.16a1.391 1.391 0 001.896-1.905c1.611-.776 3.668-2.274 3.668-4.864v-6.956h-3.478zm1.391 6.956c0 .363 0 1.466-1.717 2.558a8.425 8.425 0 01-1.761.83 8.425 8.425 0 01-1.761-.83c-1.717-1.092-1.717-2.195-1.717-2.558v-4.87h6.956v4.87z"
                    fill="#FF9811"
                />
            </g>
        </svg>
    );
}

SvgAndorra.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAndorra.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAndorra;
