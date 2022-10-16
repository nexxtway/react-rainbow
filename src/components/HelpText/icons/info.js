import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';
import { darken } from '../../../styles/helpers/color';
import getIconSize from '../helpers/getIconSize';

function InfoIcon({ className, style, isFocused, iconSize }) {
    const gray = useTheme().rainbow.palette.text.header;
    const background = isFocused ? darken(gray) : gray;
    const size = getIconSize(iconSize);
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" className={className} style={style}>
            <g id="logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M11,0 C17.0751012,0 22,4.92488175 22,11 C22,17.0750847 17.0750847,22 11,22 C4.92488175,22 0,17.0751012 0,11 C0,4.92486525 4.92486525,0 11,0 Z M11,2 C6.02943475,2 2,6.02943475 2,11 C2,15.9705333 6.02945279,20 11,20 C15.9705153,20 20,15.9705153 20,11 C20,6.02945279 15.9705333,2 11,2 Z M11,10 C11.5128358,10 11.9355072,10.3860402 11.9932723,10.8833789 L12,11 L12,15 C12,15.5522847 11.5522847,16 11,16 C10.4871642,16 10.0644928,15.6139598 10.0067277,15.1166211 L10,15 L10,11 C10,10.4477153 10.4477153,10 11,10 Z M11.01,6 C11.5622847,6 12.01,6.44771525 12.01,7 C12.01,7.51283584 11.6239598,7.93550716 11.1266211,7.99327227 L11,8 C10.4477153,8 10,7.55228475 10,7 C10,6.48716416 10.3860402,6.06449284 10.8833789,6.00672773 L11.01,6 Z"
                    id="Combined-Shape"
                    fill={background}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
}
InfoIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isFocused: PropTypes.bool,
    iconSize: PropTypes.oneOf(['small', 'medium']),
};

InfoIcon.defaultProps = {
    className: undefined,
    style: undefined,
    isFocused: false,
    iconSize: 'medium',
};
export default InfoIcon;
