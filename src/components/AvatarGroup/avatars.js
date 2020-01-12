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
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    avatars: PropTypes.array,
    maxAvatars: PropTypes.number,
};

Avatars.defaultProps = {
    size: 'medium',
    avatars: [],
    maxAvatars: 3,
};
