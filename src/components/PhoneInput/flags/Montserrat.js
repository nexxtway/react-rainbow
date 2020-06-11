import React from 'react';
import PropTypes from 'prop-types';

function SvgMontserrat({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16C0 16.004 16 .002 16 0c8.837 0 16 7.163 16 16z"
                    fill="#0052B4"
                />
                <g fill="#F0F0F0">
                    <path d="M16.019 0h-.022.022zM15.957 16.3h.343v-.343l-.343.343zM16 8.348V0h-.003C7.162.002 0 7.164 0 16h8.348v-4.7l4.7 4.7h2.91l.042-.043V13.05l-4.7-4.701H16z" />
                </g>
                <g fill="#D80027">
                    <path d="M8.095 2.087a16.076 16.076 0 00-6.008 6.008V16H6.26V6.261H16V2.087H8.095z" />
                    <path d="M16 14.032l-5.685-5.684H8.348L16 16v-1.968z" />
                </g>
                <path
                    d="M18.087 8.348V16c0 3.727 4.87 4.87 4.87 4.87s4.87-1.143 4.87-4.87V8.348h-9.74z"
                    fill="#338AF3"
                />
                <path
                    d="M18.087 16c0 3.727 4.87 4.87 4.87 4.87s4.87-1.143 4.87-4.87h-9.74z"
                    fill="#A2001D"
                />
                <path
                    fill="#000"
                    d="M25.044 11.826h-1.392v-1.391h-1.391v1.391H20.87v1.391h1.39v4.174h1.392v-4.174h1.392z"
                />
            </g>
        </svg>
    );
}
SvgMontserrat.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgMontserrat.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgMontserrat;
