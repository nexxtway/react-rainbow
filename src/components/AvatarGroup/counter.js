import React from 'react';
import PropTypes from 'prop-types';
import StyledCounter from './styled/counter';
import { getSuffixSI } from '../../libs/utils';

export default function Counter(props) {
    const { avatars, size } = props;
    const total = avatars.length;

    return (
        <StyledCounter size={size}>
            <h1>{getSuffixSI(total)}</h1>
        </StyledCounter>
    );
}

Counter.propTypes = {
    avatars: PropTypes.array,
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

Counter.defaultProps = {
    avatars: [],
    size: 'medium',
};
