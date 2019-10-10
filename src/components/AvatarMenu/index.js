import React from 'react';
import PropTypes from 'prop-types';
import PrimitiveMenu from '../PrimitiveMenu';
import AvatarButton from './avatarButton';

/**
 * A Avatar Menu offers a list of actions or functions that a user can access.
 */
export default function AvatarMenu(props) {
    const {
        src,
        initials,
        icon,
        avatarSize,
        initialsVariant,
        title,
        assistiveText,
        disabled,
        tabIndex,
        onClick,
        onFocus,
        onBlur,
        children,
        ...rest
    } = props;

    return (
        <PrimitiveMenu
            {...rest}
            src={src}
            icon={icon}
            initials={initials}
            disabled={disabled}
            tabIndex={tabIndex}
            avatarSize={avatarSize}
            initialsVariant={initialsVariant}
            title={title}
            assistiveText={assistiveText}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            trigger={AvatarButton}
        >
            {children}
        </PrimitiveMenu>
    );
}

AvatarMenu.propTypes = {
    /** The URL for the image.
     * It take precedence over the initials and icon. */
    src: PropTypes.string,
    /** If the record name contains two words, like first and last name,
     * use the first capitalized letter of each. For records that only have a single word name,
     * use the first two letters of that word using one capital and one lower case letter. */
    initials: PropTypes.string,
    /** The fallback icon to show when src and initials are not passed. */
    icon: PropTypes.node,
    /** The size of the avatar. Valid values are x-small, small, medium, and large.
     * It take precedence over the icon.
     * This value defaults to medium. */
    avatarSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** The variant of the initials. Only make sense when initials is used. */
    initialsVariant: PropTypes.oneOf(['default', 'inverse']),
    /** The content of the AvatarMenu. Used to render the menuItem elements
     * when the AvatarMenu is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The size of the menu. Options include xx-small, x-small, medium, or large.
     * This value defaults to small. */
    menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Determines the alignment of the menu relative to the AvatarMenu.
     * Available options are: left, center, right, bottom, bottom-left, bottom-right.
     * This value defaults to left. */
    menuAlignment: PropTypes.oneOf([
        'left',
        'right',
        'bottom',
        'center',
        'bottom-right',
        'bottom-left',
    ]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** If true, the menu is disabled. Disabling the menu prevents users from opening it.
     * This value defaults to false. */
    disabled: PropTypes.bool,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

AvatarMenu.defaultProps = {
    src: undefined,
    initials: undefined,
    icon: null,
    avatarSize: 'medium',
    initialsVariant: 'default',
    title: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    children: null,
    menuSize: 'xx-small',
    menuAlignment: 'left',
    isLoading: false,
    id: undefined,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};
