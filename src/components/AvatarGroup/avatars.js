import React from 'react';
import StyledAvatar from './styled/avatar';

export default function Avatars(props) {
    const { avatars, maxAvatars, showCounter, size } = props;
    const total = avatars.length;
    const maxAvatar = total > maxAvatars && showCounter ? maxAvatars - 1 : maxAvatars;

    const items = avatars.slice(0, maxAvatar).map((avatar, idx) => {
        const { src, assistiveText, title, initials, icon, initialsVariant } = avatar;
        const key = `avatar-${idx}`;
        const zIndex = `${maxAvatar - idx}`;
        const iconImg = <img src={icon} alt="icon" />;

        return (
            <StyledAvatar
                src={src}
                assistiveText={assistiveText}
                title={title}
                initials={initials}
                icon={iconImg}
                initialsVariant={initialsVariant}
                size={size}
                zIndex={zIndex}
                key={key}
            />
        );
    });
    return items;
}
