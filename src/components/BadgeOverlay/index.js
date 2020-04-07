import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import StyledBadge from './styled/badge';
import { getSuffixSI } from '../../libs/utils';

/**
 * BadgeOverlay is used to show small numerical value or status
 * descriptors for UI elements. Normally appears in proximity to
 * notifications or user avatars with eye-catching appeal, typically
 * displaying unread messages count.
 */
export default function BadgeOverlay(props) {
    const { className, style, value, overlap, children, variant, isHidden, position } = props;

    if (children === null) {
        return null;
    }

    return (
        <StyledContainer className={className} style={style} overlap={overlap}>
            {children}
            <StyledBadge
                variant={variant}
                position={position}
                overlap={overlap}
                value={value}
                isHidden={isHidden}
            >
                {getSuffixSI(value)}
            </StyledBadge>
        </StyledContainer>
    );
}

BadgeOverlay.propTypes = {
    /** The content rendered within the badge. If the value is not passed a dot is rendered instead of the badge. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Wrapped shape the badge should overlap. This property is used
     * to place the badge relative to the corner of the wrapped element. */
    overlap: PropTypes.oneOf(['circle', 'rectangle']),
    /** Object that will have the BadgeOverlay. */
    children: PropTypes.node,
    /** The variant changes the appearance of the badge. Accepted variants include brand, success, error and warning. The default value is error. */
    variant: PropTypes.oneOf(['brand', 'success', 'error', 'warning']),
    /** If true, the badge will be hidden. The default value is false. */
    isHidden: PropTypes.bool,
    /** Describes the position of the badge respect to container.
     * Options include top-left, top-right, bottom-left and bottom-right.
     * This value defaults to top-right. */
    position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

BadgeOverlay.defaultProps = {
    value: undefined,
    overlap: 'rectangle',
    children: null,
    variant: 'error',
    isHidden: false,
    position: 'top-right',
    className: undefined,
    style: undefined,
};
