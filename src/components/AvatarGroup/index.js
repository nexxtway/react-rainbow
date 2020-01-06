import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import Avatars from './avatars';
import RenderIf from '../RenderIf';
import Counter from './counter';

/**
 * Avatar groups are used to bunch together avatars
 */
export default function AvatarGroup(props) {
    const { size, className, style, avatars, maxAvatars, showCounter } = props;

    return (
        <StyledContainer className={className} style={style} size={size}>
            <RenderIf isTrue={showCounter}>
                <Counter size={size} avatars={avatars} maxAvatars={maxAvatars} />
            </RenderIf>
            <Avatars
                size={size}
                avatars={avatars}
                showCounter={showCounter}
                maxAvatars={maxAvatars}
            />
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
    /** The content of the AvatarGroup. */
    avatars: PropTypes.array,
    /** Specify how many Avatars will render. */
    maxAvatars: PropTypes.number,
    /** An object with custom style applied to the outer element. */
    showCounter: PropTypes.bool,
};

AvatarGroup.defaultProps = {
    size: 'medium',
    className: undefined,
    style: undefined,
    avatars: [],
    maxAvatars: 3,
    showCounter: false,
};
