import React from 'react';
import PropTypes from 'prop-types';

function SvgUnitedStates({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <defs>
                <rect
                    id="united-states_svg__a"
                    x={0}
                    y={0}
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    rx={16}
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="united-states_svg__b" fill="#fff">
                    <use xlinkHref="#united-states_svg__a" />
                </mask>
                <use fill="#F0F0F0" xlinkHref="#united-states_svg__a" />
                <path
                    fill="#D0021B"
                    mask="url(#united-states_svg__b)"
                    d="M16 0h16v2.667H16zM16 5.333h16V8H16zM16 10.667h16v2.667H16zM0 16h32v2.667H0zM0 21.333h32V24H0zM0 26.667h32v2.667H0z"
                />
                <g mask="url(#united-states_svg__b)">
                    <path fill="#004493" d="M-2.667 0H16v18.667H-2.667z" />
                    <path
                        fill="#FFF"
                        d="M12 15.544l-.824.456.157-.965-.666-.683.921-.14.412-.879.412.878.921.14-.666.684.157.965zM12 10.211l-.824.456.157-.965-.666-.683.921-.141L12 8l.412.878.921.14-.666.684.157.965zM6.667 15.544L5.843 16 6 15.035l-.667-.683.922-.14.412-.879.412.878.921.14-.667.684.158.965zM6.667 10.211l-.824.456L6 9.702l-.667-.683.922-.141L6.667 8l.412.878.921.14-.667.684.158.965zM1.333 15.544L.51 16l.158-.965L0 14.352l.921-.14.412-.879.412.878.922.14-.667.684.157.965zM12 4.878l-.824.455.157-.964-.666-.684.921-.14.412-.878.412.877.921.141-.666.684.157.964zM1.333 4.878l-.824.455.158-.964L0 3.685l.921-.14.412-.878.412.877.922.141L2 4.37l.157.964z"
                    />
                </g>
            </g>
        </svg>
    );
}
SvgUnitedStates.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgUnitedStates.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgUnitedStates;
