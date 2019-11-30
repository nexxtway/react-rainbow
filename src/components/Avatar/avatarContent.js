/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import normalizeInitials from './normalizeInitials';
import StyledContent from './styled/content';
import StyledImage from './styled/image';

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
        const { src, initials, title, icon, assistiveText, initialsVariant } = this.props;

        const { imageFailed } = this.state;
        if (src && !imageFailed) {
            return (
                <StyledImage
                    src={src}
                    onError={this.handleImageError}
                    title={title}
                    alt={assistiveText}
                />
            );
        } else if (initials) {
            return (
                <StyledContent as="abbr" initialsVariant={initialsVariant} title={title}>
                    {normalizeInitials(initials)}
                </StyledContent>
            );
        } else if (icon) {
            return (
                <StyledContent initialsVariant={initialsVariant} title={title}>
                    {icon}
                </StyledContent>
            );
        }
        return <StyledContent initialsVariant={initialsVariant} title={title} />;
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
