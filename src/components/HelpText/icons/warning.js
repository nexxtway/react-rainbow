import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';
import { darken } from '../../../styles/helpers/color';
import getIconSize from '../helpers/getIconSize';

function WarningIcon({ className, style, isFocused, iconSize }) {
    const warning = useTheme().rainbow.palette.warning.main;
    const background = isFocused ? darken(warning) : warning;
    const size = getIconSize(iconSize);
    return (
        <svg width={size + 2} height={size} viewBox="0 0 24 22" className={className} style={style}>
            <path
                fill={background}
                d="M12 0c1.342 0 2.512.738 3.138 1.834l8.378 14.675c.307.539.484 1.162.484 1.828C24 20.36 22.378 22 20.378 22H3.622C1.622 22 0 20.36 0 18.337c0-.582.135-1.133.375-1.622l.109-.206L8.862 1.834C9.453.8 10.53.084 11.778.007L12 0zm.198 16.5c-.506 0-.916.41-.916.916s.41.917.916.917.917-.41.917-.917c0-.506-.41-.916-.917-.916zm-.013-9.732c-.34 0-.663.142-.892.393-.23.25-.342.586-.312.924l.482 5.966c.034.373.347.659.722.659s.687-.286.721-.66l.482-5.965c.03-.338-.082-.673-.311-.924-.229-.25-.553-.393-.892-.393z"
            />
        </svg>
    );
}
WarningIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isFocused: PropTypes.bool,
    iconSize: PropTypes.oneOf(['small', 'medium']),
};

WarningIcon.defaultProps = {
    className: undefined,
    style: undefined,
    isFocused: false,
    iconSize: 'medium',
};
export default WarningIcon;
