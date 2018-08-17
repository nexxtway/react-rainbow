import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** The class name of the svg element. */
    svgClassName: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** It is an object with custom style applied to the svg element. */
    svgStyle: PropTypes.object,
    /** The icon name. It is required. It take the following format:
     ‘sprite name:icon name’ e.g. ‘utility:add’. */
    iconName: PropTypes.string.isRequired,
    /** The title that is showed when a user hover the icon. It is necessary
     if the icon sits alone and a sighted user might need to hover for a description. */
    title: PropTypes.string,
     /** Description for assistive screen readers if is required. */
    assistiveText: PropTypes.string,
    /** The icon size. */
    size: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** The icon variant. */
    variant: PropTypes.oneOf([
        'default',
        'light',
        'error',
        'warning',
    ]),
};

Icon.defaultProps = {
    className: undefined,
    svgClassName: undefined,
    style: {},
    svgStyle: {},
    title: undefined,
    assistiveText: undefined,
    size: 'medium',
    variant: 'default',
};
