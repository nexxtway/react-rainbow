/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import iconNamePropType from './../../propTypes/iconNamePropType';
import { Consumer } from './../Application';
import {
    isIconNameValid,
    getSpriteName,
    getIconName,
} from './utils';

function Svg(props) {
    const {
        className,
        style,
        iconName,
        assetsSrc,
    } = props;

    const resolveSrc = () => assetsSrc || '';

    if (isIconNameValid(iconName)) {
        const sprite = getSpriteName(iconName);
        const icon = getIconName(iconName);

        return (
            <svg className={className} style={style} aria-hidden>
                <use xmlnsXlink="http://www.w3.org/1999/xlink" href={`${resolveSrc()}/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
            </svg>
        );
    }
    return null;
}

export default function IconSvg(props) {
    return (
        <Consumer>
            {values => <Svg {...props} {...values} />}
        </Consumer>
    );
}

IconSvg.propTypes = {
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed. */
    iconName: iconNamePropType.simple.isRequired,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

IconSvg.defaultProps = {
    className: undefined,
    style: undefined,
};
