/* eslint-disable react/prop-types */
import React from 'react';
import StyledCounter from './styled/counter';
import abbreviateNumber from './helpers/abbreviateNumber';

export default function Counter(props) {
    const { avatars, size } = props;
    const total = avatars.length;

    return (
        <StyledCounter size={size}>
            <h1>{abbreviateNumber(total)}</h1>
        </StyledCounter>
    );
}
