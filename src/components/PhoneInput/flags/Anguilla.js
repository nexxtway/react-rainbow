import React from 'react';
import PropTypes from 'prop-types';

function SvgAnguilla({ className, style }) {
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
                <path
                    d="M27.059 18.342c.46-.633.767-1.406.767-2.342V9.043a3.462 3.462 0 01-2.087.696 3.473 3.473 0 01-2.783-1.391 3.473 3.473 0 01-2.782 1.391 3.463 3.463 0 01-2.087-.695V16c0 .936.307 1.71.767 2.342h8.205z"
                    fill="#F3F3F3"
                    fillRule="nonzero"
                />
                <g fill="#FF9811" fillRule="nonzero">
                    <path d="M25.612 14.71c.221-.54.393-1.33.393-1.724 0-.631-.823-1.143-.823-1.143s-.823.512-.823 1.143c0 .393.172 1.183.393 1.723l-.475 1.074a2.397 2.397 0 001.81 0l-.475-1.074zM22.393 11.235c-.578.078-1.348.324-1.689.52-.547.316-.578 1.285-.578 1.285s.855.457 1.402.141c.34-.196.938-.74 1.295-1.202l1.167-.125a2.4 2.4 0 00-.905-1.568l-.692.949zM20.993 15.76c.357.46.955 1.005 1.296 1.201.547.316 1.402-.14 1.402-.14s-.032-.97-.579-1.286c-.34-.196-1.11-.442-1.69-.52l-.69-.948a2.4 2.4 0 00-.906 1.567l1.167.125z" />
                </g>
                <path
                    d="M18.682 18.087c1.3 2.085 4.275 2.783 4.275 2.783s2.975-.698 4.274-2.783h-8.549z"
                    fill="#338AF3"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
}

SvgAnguilla.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgAnguilla.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgAnguilla;
