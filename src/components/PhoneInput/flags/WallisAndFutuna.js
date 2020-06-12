import React from 'react';
import PropTypes from 'prop-types';

function SvgWallisAndFutuna({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <defs>
                <circle id="wallis-and-futuna_svg__a" cx={16} cy={16} r={16} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="wallis-and-futuna_svg__b" fill="#fff">
                    <use xlinkHref="#wallis-and-futuna_svg__a" />
                </mask>
                <use fill="#D8D8D8" xlinkHref="#wallis-and-futuna_svg__a" />
                <g fillRule="nonzero" mask="url(#wallis-and-futuna_svg__b)">
                    <path
                        d="M40.373.099H20.186v13.878H0v13.878A5.047 5.047 0 005.047 32.9h35.326a5.047 5.047 0 005.046-5.046V5.145A5.047 5.047 0 0040.373.1z"
                        fill="#ED2939"
                    />
                    <path
                        d="M7.57.099H5.047A5.047 5.047 0 000 5.145v10.093h7.57V.098z"
                        fill="#002395"
                    />
                    <path fill="#EEE" d="M7.57.099v15.14H0V16.5h23.971V.099z" />
                    <path fill="#ED2939" d="M22.71 15.238h-7.57V.098h7.57z" />
                    <path fill="#EEE" d="M15.14 15.238H7.57V.098h7.57v15.14z" />
                </g>
            </g>
        </svg>
    );
}
SvgWallisAndFutuna.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgWallisAndFutuna.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgWallisAndFutuna;
