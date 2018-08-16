import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AvatarContent from './avatarContent';

export default function Avatar(props) {
    const {
        className,
        style,
        variant,
        size,
        ...rest
    } = props;
    const getContainerClassNames = () => classnames('slds-avatar', {
        'slds-avatar_circle': variant,
        'slds-avatar_large': size === 'large',
        'slds-avatar_medium': size === 'medium',
        'slds-avatar_small': size === 'small',
        'slds-avatar_x-small': size === 'x-small',
    }, className);

    return (
        <span className={getContainerClassNames()} style={style}>
            <AvatarContent {...rest} />
        </span>
    );
}

Avatar.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Avatar description. It usually is a person name. Can be used only if
     valid src is available */
    alt: PropTypes.string,
    /** Is the avatar source path. Its value is the relative URL to the image.
     It take precedence over the initials and icon */
    src: PropTypes.string,
    /** If set to true make the avatar a circle. */
    variant: PropTypes.bool,
    /** The user initials. It only can have two letters (the first name and last name
     first letter in upper case). It take precedence over the icon */
    initials: PropTypes.string,
    /** The icon name. It have the less precedence. It take the following format:
     ‘sprite name:icon name’ e.g. ‘utility:add’ */
    iconName: PropTypes.string,
    /** The icon size. */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    /** This is a description that is showed when a user hover the avatar */
    title: PropTypes.string,
};

Avatar.defaultProps = {
    className: undefined,
    iconName: 'standard:user',
    size: 'medium',
    variant: false,
    alt: undefined,
    src: undefined,
    initials: undefined,
    style: {},
    title: undefined,
};
