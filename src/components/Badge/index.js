import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LeftIcon from './leftIcon';
import RightIcon from './rightIcon';

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

    return (
        <span className={getClassName()} style={style}>
            <LeftIcon label={label} iconName={iconName} position={iconPosition} />
            {label}
            <RightIcon label={label} iconName={iconName} position={iconPosition} />
        </span>
    );
}

Badge.propTypes = {
     /** The class name of the root element. */
    className: PropTypes.string,
     /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Label for the badge. It is required. */
    label: PropTypes.string,
    /** The badge variant. */
    variant: PropTypes.oneOf([
        'default', 'inverse', 'lightest',
    ]),
    /** The Lightning Design System name of the icon. Names are written in the
     format '\utility:down\' where 'utility' is the category, and 'down' is the
     specific icon to be displayed. The icon is displayed in the header to the left of the title */
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
