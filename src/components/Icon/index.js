import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNamePropType from './../../propTypes/iconNamePropType';
import IconSvg from './../IconSvg';
import AssistiveText from './../AssistiveText';
import {
    isActionSprite,
    isUtilitySprite,
    normalizeIconName,
    hasBackgroundColor,
} from './utils';

/**
* The Icon component is the Lightning Design System Icon
* component and should be used for naked icons.
*/
export default function Icon(props) {
    const {
        className,
        svgClassName,
        style,
        svgStyle,
        iconName,
        title,
        assistiveText,
        size,
        variant,
    } = props;

    const getContainerClassNames = () => {
        const icon = normalizeIconName(iconName);
        const iconBackgroundColorClassName = `slds-icon-${icon}`;

        return classnames('slds-icon_container', {
            'slds-icon_container_circle': isActionSprite(iconName),
            [iconBackgroundColorClassName]: hasBackgroundColor(iconName),
        }, className);
    };

    const getSvgSizeClassName = () => {
        const isMediumSize = size === 'medium';
        const isXSmall = size === 'x-small' || size === 'xx-small';
        if (isMediumSize) {
            return '';
        }
        if (hasBackgroundColor(iconName) && isXSmall) {
            return 'slds-icon_small';
        }
        return `slds-icon_${size}`;
    };

    const getSvgClassNames = () => classnames('slds-icon', getSvgSizeClassName(), {
        [`slds-icon-text-${variant}`]: isUtilitySprite(iconName),
    }, svgClassName);

    return (
        <span className={getContainerClassNames()} title={title} style={style}>
            <IconSvg className={getSvgClassNames()} style={svgStyle} iconName={iconName} />
            <AssistiveText text={assistiveText} />
        </span>
    );
}

Icon.propTypes = {
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * The icon is displayed in the header to the left of the title. */
    iconName: iconNamePropType.simple.isRequired,
    /** The size of the icon. Options include xx-small, x-small, small, medium, or large.
    * This value defaults to medium. */
    size: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** The variant changes the appearance of a utility icon.
    * Accepted variants include default, light, warning, and error.
    * Use the light variant to implement a white fill in utility icons on dark backgrounds. */
    variant: PropTypes.oneOf([
        'default',
        'light',
        'error',
        'warning',
    ]),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** It is an object with custom style applied to the svg element. */
    svgStyle: PropTypes.object,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** A CSS class for the  svg element. */
    svgClassName: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Icon.defaultProps = {
    className: undefined,
    svgClassName: undefined,
    style: undefined,
    svgStyle: undefined,
    title: undefined,
    assistiveText: undefined,
    size: 'medium',
    variant: 'default',
};
