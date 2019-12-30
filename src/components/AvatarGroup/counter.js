/* eslint-disable react/prop-types */
import React from 'react';
import StyledCounter from './styled/counter';
import abbreviateNumber from './helpers/abbreviateNumber';

export default function Counter(props) {
    const { avatars, maxAvatars, size } = props;
    const total = avatars.length;

    if (total <= maxAvatars) return null;

    const max = total > maxAvatars ? maxAvatars - 1 : maxAvatars;

    const moreItems = avatars.slice(max).length;

    return (
        <StyledCounter size={size}>
            <span>{abbreviateNumber(moreItems)}</span>
        </StyledCounter>
    );
}
