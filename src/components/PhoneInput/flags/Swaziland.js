import React from 'react';
import PropTypes from 'prop-types';

function SvgSwaziland({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M30.412 22.956A15.936 15.936 0 0032 16c0-2.493-.57-4.853-1.588-6.957L16 8.348l-14.412.695A15.937 15.937 0 000 16c0 2.493.57 4.853 1.588 6.956L16 23.652l14.412-.696z"
                    fill="#FFDA44"
                />
                <path
                    d="M16 0C9.657 0 4.176 3.692 1.588 9.043h28.824C27.824 3.692 22.343 0 16 0z"
                    fill="#000"
                />
                <path
                    d="M16 32c-6.343 0-11.824-3.692-14.412-9.044h28.824C27.824 28.308 22.343 32 16 32z"
                    fill="#0052B4"
                />
                <path
                    d="M31.244 11.13H.756A15.988 15.988 0 000 16c0 1.698.265 3.334.756 4.87h30.488c.49-1.536.756-3.172.756-4.87s-.265-3.334-.756-4.87z"
                    fill="#A2001D"
                />
                <g fill="#FFDA44">
                    <path d="M5.566 15.304h20.87v1.391H5.566zM8.348 12.522H23.65v1.391H8.348z" />
                </g>
                <path
                    d="M23.752 16S20.174 20.174 16 20.174c-4.174 0-4.174-4.174-4.174-4.174s0-4.174 4.174-4.174S23.752 16 23.752 16z"
                    fill="#F0F0F0"
                />
                <path
                    d="M16 20.174C11.826 20.174 8.248 16 8.248 16s3.578-4.174 7.752-4.174"
                    fill="#000"
                />
                <path fill="#F0F0F0" d="M13.217 14.609h1.391v2.783h-1.391z" />
                <path fill="#000" d="M17.391 14.609h1.391v2.783h-1.391z" />
                <g transform="translate(4.125 14.563)" fill="#0052B4">
                    <circle cx={1.44} cy={1.438} r={1.391} />
                    <circle cx={22.31} cy={1.438} r={1.391} />
                </g>
            </g>
        </svg>
    );
}
SvgSwaziland.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSwaziland.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSwaziland;
