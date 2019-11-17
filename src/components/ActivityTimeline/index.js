import React from 'react';
import PropTypes from 'prop-types';
import StyledUl from './styled/ul';

/**
 * The ActivityTimeline displays each of any item upcoming, current, and past activities.
 * @category Layout
 */
export default function ActivityTimeline(props) {
    const { children, className, style } = props;

    return (
        <StyledUl className={className} style={style}>
            {children}
        </StyledUl>
    );
}

ActivityTimeline.propTypes = {
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ActivityTimeline.defaultProps = {
    children: null,
    className: undefined,
    style: undefined,
};
