import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './styled/avatar';

export default function Avatars(props) {
    const { avatars, maxAvatars, size } = props;

    const items = avatars.slice(0, maxAvatars).map((avatar, idx) => {
        const { src, assistiveText, title, initials, icon } = avatar;
        const key = `avatar-${idx}`;
        const zIndex = `${maxAvatars - idx}`;

        return (
            <StyledAvatar
                src={src}
                assistiveText={assistiveText}
                title={title}
                initials={initials}
                icon={icon}
                size={size}
                zIndex={zIndex}
                key={key}
            />
        );
    });
    return items;
}

Avatars.propTypes = {
    /** Defines the size of the avatar */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    /** Dataset to built avatar. */
    avatars: PropTypes.array,
    /** Specify how many Avatars will render. */
    maxAvatars: PropTypes.number,
};

Avatars.defaultProps = {
    size: 'medium',
    avatars: [],
    maxAvatars: 3,
};
