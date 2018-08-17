import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const INITIALS_REGEX = /^[A-Z][A-Z]$/;

export default class AvatarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFailed: false,
        };

        this.handleImageError = this.handleImageError.bind(this);
    }

    handleImageError() {
        this.setState({ imageFailed: true });
    }

    render() {
        const {
            src,
            initials,
            iconName,
            alt,
            title,
        } = this.props;
        const { imageFailed } = this.state;
        const isInitialsValid = INITIALS_REGEX.test(initials);
        if (src && !imageFailed) {
            return <img alt={alt} src={src} onError={this.handleImageError} title={title} />;
        } else if (isInitialsValid) {
            return (
                <abbr
                    className="slds-avatar__initials slds-icon-standard-user"
                    title={title}>

                    {initials}
                </abbr>
            );
        }
        return <Icon iconName={iconName} size="medium" />;
    }
}

AvatarContent.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    initials: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string,
};

AvatarContent.defaultProps = {
    alt: undefined,
    src: undefined,
    initials: undefined,
    title: undefined,
};
