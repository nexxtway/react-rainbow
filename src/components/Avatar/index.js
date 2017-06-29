/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

const INITIALS_REGEX = /^[A-Z][A-Z]$/;

export default class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFailed: false,
        };

        this.handleImageError = this.handleImageError.bind(this);
    }

    getContainerClassNames() {
        const { className, size, variant } = this.props;

        return classnames('slds-avatar', {
            'slds-avatar_circle': variant,
            'slds-avatar_large': size === 'large',
            'slds-avatar_medium': size === 'medium',
            'slds-avatar_small': size === 'small',
            'slds-avatar_x-small': size === 'x-small',
        }, className);
    }

    handleImageError() {
        this.setState({ imageFailed: true });
    }

    renderAvatar() {
        const {
            src,
            initials,
            iconName,
            alt,
            style,
            title,
        } = this.props;
        const { imageFailed } = this.state;
        const isInitialsValid = INITIALS_REGEX.test(initials);

        if (src && !imageFailed) {
            return <img alt={alt} src={src} onError={this.handleImageError} title={title} />;
        } else if (isInitialsValid) {
            return (
                <abbr className="slds-avatar__initials slds-icon-standard-user"
                      style={style}
                      title={title}>
                    { initials }
                </abbr>
            );
        }
        return <Icon iconName={iconName} size="medium" variant="bare" />;
    }

    render() {
        const { style } = this.props;
        return (
            <span className={this.getContainerClassNames()} style={style}>
                {this.renderAvatar()}
            </span>
        );
    }
}

Avatar.propTypes = {
    /** Avatar description. It usually is a person name. Can be used only if
     valid src is available */
    alt: PropTypes.string,
    /** Is the avatar source path. Its value is the relative URL to the image.
     It take precedence over the initials and icon */
    src: PropTypes.string,
    /** If set to true make the avatar a circle. */
    variant: PropTypes.bool,
    /** Class for custom styles */
    className: PropTypes.string,
    /** The user initials. It only can have two letters (the first name and last name
     first letter in upper case). It take precedence over the icon */
    initials: PropTypes.string,
    /** The icon name. It have the less precedence. It take the following format:
     ‘sprite name:icon name’ e.g. ‘utility:add’ */
    iconName: PropTypes.string,
    /** The icon size. */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'x-small']),
    /** Object with the custom styles. The properties must be in camelCase naming
    convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** This is a description that is showed when a user hover the avatar */
    title: PropTypes.string,
};

Avatar.defaultProps = {
    iconName: 'standard:user',
    size: 'medium',
    variant: false,
};
