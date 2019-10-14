import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './../Avatar';
import StyledButton from './styled/button';

export default class AvatarButton extends Component {
    constructor(props) {
        super(props);
        this.avatarButtonRef = React.createRef();
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.avatarButtonRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.avatarButtonRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.avatarButtonRef.current.blur();
    }

    render() {
        const {
            title,
            tabIndex,
            onClick,
            onFocus,
            onBlur,
            disabled,
            assistiveText,
            ariaHaspopup,
            src,
            initials,
            icon,
            avatarSize,
            initialsVariant,
        } = this.props;

        return (
            <StyledButton
                data-id="avatar-menu-button"
                tabIndex={tabIndex}
                onFocus={onFocus}
                onBlur={onBlur}
                disabled={disabled}
                onClick={onClick}
                title={title}
                aria-haspopup={ariaHaspopup}
                ref={this.avatarButtonRef}
            >
                <Avatar
                    src={src}
                    icon={icon}
                    initials={initials}
                    size={avatarSize}
                    initialsVariant={initialsVariant}
                    title={title}
                    assistiveText={assistiveText}
                    ariaHaspopup
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </StyledButton>
        );
    }
}

AvatarButton.propTypes = {
    title: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    assistiveText: PropTypes.string,
    ariaHaspopup: PropTypes.bool,
    disabled: PropTypes.bool,
    src: PropTypes.string,
    initials: PropTypes.string,
    icon: PropTypes.node,
    avatarSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    initialsVariant: PropTypes.oneOf(['default', 'inverse']),
};

AvatarButton.defaultProps = {
    title: undefined,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    assistiveText: undefined,
    ariaHaspopup: false,
    src: undefined,
    initials: undefined,
    icon: null,
    avatarSize: 'medium',
    initialsVariant: 'default',
};
