import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ActivityTimeline displays each of the user’s upcoming, current, and past activities.
 * @category Layout
 */
export default function ActivityTimeline(props) {
    const { children } = props;
    return <ul>{children}</ul>;
}

ActivityTimeline.propTypes = {
    /** The content of the ActivityTimeline. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

ActivityTimeline.defaultProps = {
    children: null,
};
