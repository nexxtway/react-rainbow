/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import isInitialsValid from './isInitialsValid';

export default class AvatarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFailed: false,
        };

        this.handleImageError = this.handleImageError.bind(this);
    }

    getAbbrClassNames() {
        const { initialsVariant } = this.props;
        return classnames(
            'slds-avatar__initials',
            initialsVariant === 'default' ? 'slds-icon-standard-user' : `slds-avatar__initials_${initialsVariant}`,
        );
    }

    handleImageError() {
        this.setState({ imageFailed: true });
    }

    render() {
        const {
            src,
            initials,
            iconName,
            title,
        } = this.props;
        const { imageFailed } = this.state;
        if (src && !imageFailed) {
            return <img src={src} onError={this.handleImageError} title={title} />;
        } else if (isInitialsValid(initials)) {
            return (
                <abbr
                    className={this.getAbbrClassNames()}
                    title={title}>

                    {initials}
                </abbr>
            );
        }
        return <Icon iconName={iconName} size="medium" title={title} />;
    }
}

AvatarContent.propTypes = {
    src: PropTypes.string,
    initials: PropTypes.string,
    initialsVariant: PropTypes.oneOf(['default', 'inverse']),
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string,
};

AvatarContent.defaultProps = {
    src: undefined,
    initials: undefined,
    initialsVariant: 'default',
    title: undefined,
};
