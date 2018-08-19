import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
        return classnames('slds-badge', `slds-badge_${variant}`, className);
    }

    const showLeftIcon = iconName && iconPosition === 'left';
    const showRightIcon = iconName && iconPosition === 'right';

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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Label for the badge. */
    label: PropTypes.node,
    /** The badge variant. */
    variant: PropTypes.oneOf([
        'default', 'inverse', 'lightest',
    ]),
    /** The name of the icon. Names are written in the
     format '\utility:down\' where 'utility' is the category, and 'down' is the
     specific icon to be displayed. */
    iconName: PropTypes.string,
    /** The position of the icon if it is passed. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
};

Badge.defaultProps = {
    className: undefined,
    style: {},
    variant: 'default',
    iconName: '',
    iconPosition: 'left',
    label: null,
};
