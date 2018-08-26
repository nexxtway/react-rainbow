import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNamePropType from './../../propTypes/iconNamePropType';
import Icon from './badgeIcon';

/**
 * Badges are labels which hold small amounts of information.
 */
export default function Badge(props) {
    const {
        className,
        style,
        label,
        variant,
        iconName,
        iconPosition,
    } = props;

    function getClassName() {
        return classnames('slds-align_absolute-center', 'slds-badge', `slds-badge_${variant}`, className);
    }

    const showLeftIcon = !!(iconName && iconPosition === 'left');
    const showRightIcon = !!(iconName && iconPosition === 'right');

    return (
        <span className={getClassName()} style={style}>
            <Icon
                data-id="left-icon"
                iconName={iconName}
                iconPosition={iconPosition}
                label={label}
                isVisible={showLeftIcon} />

            {label}
            <Icon
                data-id="right-icon"
                iconName={iconName}
                iconPosition={iconPosition}
                label={label}
                isVisible={showRightIcon} />

        </span>
    );
}

Badge.propTypes = {
    /** The text to be displayed inside the badge. */
    label: PropTypes.node,
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * Only utility icons can be used in this component. */
    iconName: iconNamePropType.oneOf(['utility']),
    /** Describes the position of the icon with respect to body. Options include left and right.
    * This value defaults to left. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    /** The variant changes the appearance of the badge. Accepted variants include base,
    * default, inverse and lightest. This value defaults to default. */
    variant: PropTypes.oneOf([
        'default', 'inverse', 'lightest',
    ]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Badge.defaultProps = {
    label: null,
    iconName: '',
    iconPosition: 'left',
    variant: 'default',
    className: undefined,
    style: undefined,
};
