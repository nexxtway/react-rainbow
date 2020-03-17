import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from './../ButtonIcon';
import PrimitiveMenu from '../PrimitiveMenu';
import ButtonTrigger from './buttonTrigger';

/**
 * A Button Menu offers a list of actions or functions that a user can access.
 */
export default function ButtonMenu(props) {
    const {
        label,
        icon,
        iconPosition,
        buttonSize,
        title,
        assistiveText,
        buttonVariant,
        buttonShaded,
        disabled,
        tabIndex,
        onClick,
        onFocus,
        onBlur,
        children,
        ...rest
    } = props;

    const trigger = label ? ButtonTrigger : ButtonIcon;

    return (
        <PrimitiveMenu
            {...rest}
            label={label}
            icon={icon}
            iconPosition={iconPosition}
            size={buttonSize}
            assistiveText={assistiveText}
            disabled={disabled}
            tabIndex={tabIndex}
            variant={buttonVariant}
            shaded={buttonShaded}
            title={title}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            trigger={trigger}
        >
            {children}
        </PrimitiveMenu>
    );
}

ButtonMenu.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show if it is passed.
     * It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to label. Options include left and right.
     * Only makes sense when icon and label are provided.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** The content of the ButtonMenu. Used to render the menuItem elements
     * when the ButtonMenu is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The variant changes the look of the button.
     * Accepted variants include base, neutral, brand, success, destructive, outline-brand, border, border-filled, inverse and border-inverse.
     * This value defaults to border-filled. */
    buttonVariant: PropTypes.oneOf([
        'base',
        'brand',
        'success',
        'destructive',
        'neutral',
        'outline-brand',
        'border',
        'border-filled',
        'inverse',
        'border-inverse',
    ]),
    /** The size of the button. Options include xx-small, x-small, medium, or large.
     * This value defaults to medium. */
    buttonSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Specify true when the button has a shadow around it.
     * This value defaults to false.
     * Only neutral, brand, destructive and success variant can be shaded. */
    buttonShaded: PropTypes.bool,
    /** The size of the menu. Options include xx-small, x-small, medium, or large.
     * This value defaults to small. */
    menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Determines the alignment of the menu relative to the button.
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
    /** If true, the menu is disabled. Disabling the menu prevents users from opening it.
     * This value defaults to false. */
    disabled: PropTypes.bool,
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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

ButtonMenu.defaultProps = {
    label: undefined,
    icon: null,
    iconPosition: 'left',
    children: null,
    buttonVariant: 'border-filled',
    buttonSize: 'medium',
    buttonShaded: false,
    menuSize: 'xx-small',
    menuAlignment: 'left',
    disabled: false,
    isLoading: false,
    tabIndex: undefined,
    title: undefined,
    assistiveText: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
};
