import React from 'react';
import PropTypes from 'prop-types';
import AvatarContent from './avatarContent';
import AssistiveText from './../AssistiveText';
import StyledContainer from './styled/container';

/**
 * An avatar component represents an object or entity
 */
export default function Avatar(props) {
    const { className, style, size, assistiveText, backgroundColor, ...rest } = props;

    return (
        <StyledContainer
            className={className}
            style={style}
            size={size}
            backgroundColor={backgroundColor}
        >
            <AvatarContent {...rest} assistiveText={assistiveText} />
            <AssistiveText text={assistiveText} />
        </StyledContainer>
    );
}

Avatar.propTypes = {
    /** The URL for the image.
     * It take precedence over the initials and icon. */
    src: PropTypes.string,
    /** If the record name contains two words, like first and last name,
     * use the first capitalized letter of each. For records that only have a single word name,
     * use the first two letters of that word using one capital and one lower case letter. */
    initials: PropTypes.string,
    /** The fallback icon to show when src and initials are not passed. */
    icon: PropTypes.node,
    /** The size of the avatar. Valid values are x-small, small, medium, and large.
     * It take precedence over the icon.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** The variant of the initials. Only make sense when initials is used. */
    initialsVariant: PropTypes.oneOf(['default', 'inverse']),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** A valid background color to customize the avatar. */
    backgroundColor: PropTypes.string,
};

Avatar.defaultProps = {
    src: undefined,
    initials: undefined,
    icon: null,
    size: 'medium',
    initialsVariant: 'default',
    title: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    backgroundColor: '',
};
