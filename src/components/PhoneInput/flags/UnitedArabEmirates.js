import React from 'react';
import PropTypes from 'prop-types';

function SvgUnitedArabEmirates({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#FFF" cx={15.99} cy={15.99} r={15.989} />
                <path
                    d="M31.065 10.658h-9.852c.428 3.416.43 7.18.008 10.599h9.865c.575-1.65.892-3.422.892-5.268 0-1.87-.324-3.663-.913-5.33z"
                    fill="#EFECEC"
                />
                <path
                    d="M21.213 10.658h9.851a.11.11 0 00-.005-.014C29.013 4.874 23.75.63 17.425.066c2.447 1.341 3.162 5.592 3.788 10.592z"
                    fill="#429945"
                />
                <path
                    d="M17.425 31.912c6.336-.564 11.607-4.824 13.646-10.61l.015-.045h-9.864c-.621 5.027-1.34 9.308-3.797 10.655z"
                    fill="#0B0B0B"
                />
                <path
                    d="M0 15.99c0 1.846.317 3.617.892 5.267h21.152a44.21 44.21 0 00-.007-10.599H.914A15.956 15.956 0 000 15.989z"
                    fill="#EFEFEF"
                />
                <path
                    d="M.919 10.644a.226.226 0 01-.005.014h21.123c-.627-5-2.165-9.25-4.612-10.592A16.268 16.268 0 0015.99 0C9.033 0 3.119 4.442.919 10.644z"
                    fill="#49A948"
                />
                <path
                    d="M22.044 21.257H.892l.016.045c2.19 6.218 8.114 10.676 15.08 10.676.485 0 .964-.024 1.437-.066 2.458-1.347 3.999-5.628 4.62-10.655z"
                    fill="#151515"
                />
                <path
                    d="M0 15.99c0 6.655 4.068 12.36 9.853 14.766V1.222C4.068 3.628 0 9.332 0 15.989z"
                    fill="#E73B36"
                />
            </g>
        </svg>
    );
}
SvgUnitedArabEmirates.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgUnitedArabEmirates.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgUnitedArabEmirates;
