import React from 'react';
import PropTypes from 'prop-types';

function SvgSvalbardAndJanMayen({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <defs>
                <circle id="svalbard-and-jan-mayen_svg__a" cx={16} cy={16} r={16} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="svalbard-and-jan-mayen_svg__b" fill="#fff">
                    <use xlinkHref="#svalbard-and-jan-mayen_svg__a" />
                </mask>
                <use fill="#D8D8D8" xlinkHref="#svalbard-and-jan-mayen_svg__a" />
                <g mask="url(#svalbard-and-jan-mayen_svg__b)" fillRule="nonzero">
                    <path fill="#EF2B2D" d="M-4-.91h46.504v33.822H-4z" />
                    <path fill="#FFF" d="M8.683-.91h8.455v33.822H8.683z" />
                    <path fill="#FFF" d="M-4 11.774h46.504v8.455H-4z" />
                    <path fill="#002868" d="M10.797-.91h4.228v33.822h-4.228z" />
                    <path fill="#002868" d="M-4 13.888h46.504v4.228H-4z" />
                </g>
            </g>
        </svg>
    );
}
SvgSvalbardAndJanMayen.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSvalbardAndJanMayen.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSvalbardAndJanMayen;
