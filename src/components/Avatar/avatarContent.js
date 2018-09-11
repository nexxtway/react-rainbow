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

    getClassNames() {
        const { initialsVariant } = this.props;
        return classnames(
            'rainbow-avatar__initials',
            { 'rainbow-avatar__initials_inverse': initialsVariant === 'inverse' },
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
            icon,
            assistiveText,
        } = this.props;

        const { imageFailed } = this.state;
        if (src && !imageFailed) {
            return (
                <img
                    src={src}
                    onError={this.handleImageError}
                    title={title}
                    alt={assistiveText} />
            );
        } else if (initials) {
            return (
                <abbr
                    className={this.getClassNames()}
                    title={title}>

                    {normalizeInitials(initials)}
                </abbr>
            );
        } else if (icon) {
            return (
                <span
                    className={this.getClassNames()}
                    title={title}>

                    {icon}
                </span>
            );
        }
        return <span className={this.getClassNames()} title={title} />;
    }
}

AvatarContent.propTypes = {
    src: PropTypes.string,
    initials: PropTypes.string,
    initialsVariant: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.node,
    assistiveText: PropTypes.string,
};

AvatarContent.defaultProps = {
    src: undefined,
    initials: undefined,
    title: undefined,
    icon: null,
    assistiveText: undefined,
};
