import React from 'react';
import PropTypes from 'prop-types';

function SvgTurksAndCaicos({ className, style }) {
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
                    fill="#FFDA44"
                />
                <path
                    d="M22.26 11.13c0 .769-.622 2.783-1.39 2.783-.769 0-1.392-2.014-1.392-2.783 0-.768 1.392-1.39 1.392-1.39s1.39.622 1.39 1.39z"
                    fill="#FF9811"
                />
                <path
                    d="M25.953 12.646c.224-.548.399-1.349.399-1.747 0-.64-.835-1.16-.835-1.16s-.835.52-.835 1.16c0 .398.175 1.199.4 1.747l-.483 1.088a2.431 2.431 0 001.836 0l-.482-1.088z"
                    fill="#A2001D"
                />
                <path
                    d="M21.913 16s-.696 1.391-.696 2.783h3.479C24.696 17.39 24 16 24 16l-1.044-.696-1.043.696z"
                    fill="#6DA544"
                />
                <path d="M24 16v-.348a1.044 1.044 0 00-2.087 0V16H24z" fill="#D80027" />
            </g>
        </svg>
    );
}
SvgTurksAndCaicos.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgTurksAndCaicos.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgTurksAndCaicos;
