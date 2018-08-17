import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AvatarContent from './avatarContent';
import AssistiveText from './../AssistiveText';

/**
* An avatar component represents an object or entity
*/
export default function Avatar(props) {
    const {
        className,
        style,
        variant,
        size,
        assistiveText,
        ...rest
    } = props;
    const getContainerClassNames = () => classnames(
        'slds-avatar',
        { 'slds-avatar_circle': variant === 'circle' },
        `slds-avatar_${size}`,
        className,
    );

    return (
        <span className={getContainerClassNames()} style={style}>
            <AvatarContent {...rest} />
            <AssistiveText text={assistiveText} />
        </span>
    );
}

Avatar.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Is the avatar source path. Its value is the relative URL to the image.
     It take precedence over the initials and icon */
    src: PropTypes.string,
    /** If set to true make the avatar a circle. */
    variant: PropTypes.oneOf(['default', 'circle']),
    /** The user initials. It only can have two letters (the first name and last name
     first letter in upper case). It take precedence over the icon */
    initials: PropTypes.string,
    /** only make sense when initials is used. */
    initialsVariant: PropTypes.oneOf(['default', 'inverse']),
    /** The icon name. It have the less precedence. It take the following format:
     ‘sprite name:icon name’ e.g. ‘utility:add’ */
    iconName: PropTypes.string,
    /** The icon size. */
    size: PropTypes.oneOf([
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** This is a description that is showed when a user hover the avatar */
    title: PropTypes.string,
    /** Description for assistive sreen readers */
    assistiveText: PropTypes.string,
};

Avatar.defaultProps = {
    className: undefined,
    iconName: 'standard:user',
    size: 'medium',
    variant: 'default',
    src: undefined,
    initials: undefined,
    initialsVariant: 'default',
    style: {},
    title: undefined,
    assistiveText: undefined,
};
