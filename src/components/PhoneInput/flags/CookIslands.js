import React from 'react';
import PropTypes from 'prop-types';

function SvgCookIslands({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fill="none" fillRule="evenodd">
                <path
                    d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16C0 16.004 16 .002 16 0c8.837 0 16 7.163 16 16z"
                    fill="#0052B4"
                    fillRule="nonzero"
                />
                <g fill="#F0F0F0" fillRule="nonzero">
                    <path d="M16.019 0h-.022.022zM15.957 16.3h.343v-.343l-.343.343zM16 8.348V0h-.003C7.162.002 0 7.164 0 16h8.348v-4.7l4.7 4.7h2.91l.042-.043V13.05l-4.7-4.701H16z" />
                </g>
                <g fill="#D80027" fillRule="nonzero">
                    <path d="M8.095 2.087a16.076 16.076 0 00-6.008 6.008V16H6.26V6.261H16V2.087H8.095z" />
                    <path d="M16 14.032l-5.685-5.684H8.348L16 16v-1.968z" />
                </g>
                <g fill="#F0F0F0" fillRule="nonzero">
                    <path d="M21.565 16l.296.911h.958l-.775.563.296.911-.775-.563-.775.563.296-.911-.775-.563h.958zM17.63 17.63l.854.435.677-.677-.15.946.854.435-.947.15-.15.946-.434-.854-.946.15.677-.677zM16 21.565l.911-.296v-.958l.563.775.911-.296-.563.775.563.775-.911-.296-.563.775v-.958zM17.63 25.5l.435-.853-.677-.677.946.15.435-.854.15.946.946.15-.854.435.15.946-.678-.678zM21.565 27.13l-.296-.91h-.958l.775-.564-.296-.91.775.562.775-.563-.296.911.775.563h-.958zM25.5 25.5l-.853-.434-.677.677.15-.946-.854-.435.946-.15.15-.946.435.853.946-.15-.678.678zM27.13 21.565l-.91.296v.958l-.564-.775-.91.296.562-.775-.563-.775.911.296.563-.775v.958zM25.5 17.63l-.434.854.677.677-.946-.15-.435.854-.15-.947-.946-.15.853-.434-.15-.946.678.677z" />
                </g>
            </g>
        </svg>
    );
}
SvgCookIslands.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCookIslands.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCookIslands;
