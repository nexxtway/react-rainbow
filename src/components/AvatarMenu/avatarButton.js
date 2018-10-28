import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './../Avatar';
import RightArrow from './rightArrow';
import './styles.css';

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
            isOpen,
        } = this.props;

        return (
            <div className="rainbow-avatar-menu_wrapper">
                <button
                    className="rainbow-avatar-menu_button"
                    data-id="rainbow-avatar-menu_button"
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={disabled}
                    onClick={onClick}
                    title={title}
                    aria-haspopup={ariaHaspopup}
                    ref={this.avatarButtonRef} >

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
                        onBlur={onBlur} />
                </button>
                <button
                    className="rainbow-avatar-menu_right-arrow-button"
                    data-id="rainbow-avatar-menu_right-arrow-button"
                    tabIndex={-1}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={disabled}
                    onClick={onClick}
                    title={title}
                    aria-haspopup={ariaHaspopup} >

                    <RightArrow isOpen={isOpen} />
                </button>
            </div>
        );
    }
}

AvatarButton.propTypes = {
    title: PropTypes.string,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    assistiveText: PropTypes.string,
    ariaHaspopup: PropTypes.bool,
    disabled: PropTypes.bool,
    src: PropTypes.string,
    initials: PropTypes.string,
    icon: PropTypes.node,
    avatarSize: PropTypes.oneOf([
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    initialsVariant: PropTypes.oneOf([
        'default', 'inverse',
    ]),
    isOpen: PropTypes.bool,
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
    isOpen: false,
};
