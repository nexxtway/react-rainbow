import React from 'react';
import PropTypes from 'prop-types';

function SvgSaintMartin({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <defs>
                <circle id="saint-martin_svg__a" cx={16} cy={16} r={16} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="saint-martin_svg__b" fill="#fff">
                    <use xlinkHref="#saint-martin_svg__a" />
                </mask>
                <use fill="#D8D8D8" xlinkHref="#saint-martin_svg__a" />
                <g mask="url(#saint-martin_svg__b)" fillRule="nonzero">
                    <g transform="translate(-11 -3)">
                        <path fill="#003787" d="M0 0h54v36H0z" />
                        <path fill="#F1F2F2" d="M0 0h54L30 24v12h-6V24z" />
                        <circle fill="#F9D90F" cx={27} cy={15} r={4} />
                        <path fill="#F1F2F2" d="M22 15h10l-5 9z" />
                        <path fill="#CF142B" d="M27 24l-8-7.5h16z" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
SvgSaintMartin.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSaintMartin.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSaintMartin;
