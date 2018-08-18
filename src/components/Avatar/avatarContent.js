/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';
import normalizeInitials from './normalizeInitials';

export default class AvatarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFailed: false,
        };

        this.handleImageError = this.handleImageError.bind(this);
    }

    getAbbrVariantClassNames() {
        const { initialsVariant } = this.props;
        if (initialsVariant === 'default') {
            return 'slds-icon-standard-user';
        }
        return 'slds-avatar__initials_inverse';
    }

    getAbbrClassNames() {
        return classnames(
            'slds-avatar__initials',
            this.getAbbrVariantClassNames(),
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
        } else if (initials) {
            return (
                <abbr
                    className={this.getAbbrClassNames()}
                    title={title}>

                    {normalizeInitials(initials)}
                </abbr>
            );
        }
        return <Icon iconName={iconName} size="medium" title={title} />;
    }
}

AvatarContent.propTypes = {
    src: PropTypes.string,
    initials: PropTypes.string,
    initialsVariant: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string,
};

AvatarContent.defaultProps = {
    src: undefined,
    initials: undefined,
    title: undefined,
};
