import React from 'react';
import PropTypes from 'prop-types';

function SvgNewZealand({ className, style }) {
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
                    <path d="M16 14.032l-5.685-5.684H8.348L16 16v-1.968zM27.708 11.872l.345 1.063h1.118l-.904.657.345 1.063-.904-.657-.904.657.345-1.063-.904-.657h1.118zM23.713 19.525l.518 1.594h1.677l-1.357.985.518 1.595-1.356-.986-1.356.985.518-1.594-1.356-.985h1.676zM23.864 7.003l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.821.432-1.329-1.13-.82h1.396zM20.02 11.826l.518 1.594h1.677l-1.357.986.518 1.594-1.356-.985-1.356.985.518-1.594-1.356-.986h1.676z" />
                </g>
            </g>
        </svg>
    );
}
SvgNewZealand.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgNewZealand.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgNewZealand;
