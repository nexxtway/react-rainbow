/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
        if (initialsVariant === 'inverse') {
            return 'rainbow-avatar__initials_inverse';
        }
        return null;
    }

    getAbbrClassNames() {
        return classnames(
            'rainbow-avatar__initials',
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
        return <abbr className={this.getAbbrClassNames()} title={title} />;
    }
}

AvatarContent.propTypes = {
    src: PropTypes.string,
    initials: PropTypes.string,
    initialsVariant: PropTypes.string.isRequired,
    title: PropTypes.string,
};

AvatarContent.defaultProps = {
    src: undefined,
    initials: undefined,
    title: undefined,
};
