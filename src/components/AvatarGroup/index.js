/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../';
// import StyledCounter from '../Avatar/styled/container';
import StyledContainer from './styled/container';

/**
 * Avatar groups are used to bunch together avatars
 */
export default function AvatarGroup(props) {
    const { size, className, style, avatars, maxAvatars, showCounter } = props;

    const spacing = {
        'x-small': '-0.625rem',
        small: '-0.75rem',
        medium: '-1.25rem',
        large: '-1.6rem',
    };

    const renderCounter = (max, total) => {
        if (total <= max || !showCounter) return null;

        const moreItems = avatars.slice(max).length;

        return (
            <Avatar
                assistiveText="Counter"
                title="Counter"
                style={{ zIndex: 1000, marginLeft: `${spacing[size]}` }}
                initials={`+${moreItems}`}
                counter
            />
        );
    };

    const total = avatars.length;
    const maxAvatar = total > maxAvatars && showCounter ? maxAvatars - 1 : maxAvatars;

    const items = avatars
        .slice(0, maxAvatar)
        .map((avatar, idx) => (
            <Avatar
                {...avatar.props}
                size={size}
                style={{ zIndex: `${maxAvatar - idx}`, marginLeft: `${spacing[size]}` }}
                key={idx}
            />
        ));

    return (
        <StyledContainer className={className} style={style} role="group">
            {renderCounter(+maxAvatar, total)}
            {items}
        </StyledContainer>
    );
}

AvatarGroup.propTypes = {
    /** Defines the size of the avatar */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The content of the AvatarGroup.
     * Accepted avatars are Avatar | Avatar[]. */
    avatars: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /** Specify how many Avatars will render. */
    maxAvatars: PropTypes.number,
    /** An object with custom style applied to the outer element. */
    showCounter: PropTypes.bool,
};

AvatarGroup.defaultProps = {
    size: 'medium',
    className: undefined,
    style: undefined,
    avatars: null,
    maxAvatars: 3,
    showCounter: false,
};
