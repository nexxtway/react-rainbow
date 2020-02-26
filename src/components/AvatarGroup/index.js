import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import Avatars from './avatars';
import RenderIf from '../RenderIf';
import Counter from './counter';

/**
 * An AvatarGroup is an element that communicates to the user
 *  that there are many entities associated to an item.
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
    /** The size of the AvatarGroup. Valid values are x-small, small, medium, and large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** A CSS class for the outer element, in addition to the component’s base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** An array with the Avatars data. */
    avatars: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            initials: PropTypes.string,
            icon: PropTypes.node,
            title: PropTypes.string,
            assistiveText: PropTypes.string,
        }),
    ),
    /** Specify how many Avatars will render. */
    maxAvatars: PropTypes.number,
    /** This shows a counter with the total value of the number of avatars.
     * It is independent of the number of avatars displayed in the component. */
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
