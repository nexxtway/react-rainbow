import React from 'react';
import PropTypes from 'prop-types';

function SvgBonaire({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#F0F0F0" cx={16} cy={16} r={16} />
                <path
                    d="M4.686 4.686a15.964 15.964 0 00-4.64 12.512L17.197.045A15.963 15.963 0 004.686 4.686z"
                    fill="#FFDA44"
                />
                <path
                    d="M5.713 28.254c6.286 5.29 15.684 4.976 21.6-.94 5.918-5.917 6.23-15.315.942-21.6L5.712 28.253z"
                    fill="#0052B4"
                />
                <path
                    d="M15.943 15.356l1.379-.747-1.38-.747a4.873 4.873 0 00-4.065-4.066l-.747-1.379-.747 1.38a4.873 4.873 0 00-4.065 4.065l-1.379.747 1.379.747a4.873 4.873 0 004.065 4.065l.747 1.38.747-1.38a4.873 4.873 0 004.066-4.065zM11.13 17.39a2.783 2.783 0 110-5.565 2.783 2.783 0 010 5.565z"
                    fill="#000"
                />
                <path
                    fill="#D80027"
                    d="M11.13 12.522l.603 1.043h1.205l-.603 1.044.603 1.043h-1.205l-.603 1.044-.602-1.044H9.323l.603-1.043-.603-1.044h1.205z"
                />
            </g>
        </svg>
    );
}
SvgBonaire.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgBonaire.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgBonaire;
