import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

/**
 * The ActivityTimeline displays each of any item upcoming, current, and past activities.
 * @category Layout
 */
export default function ActivityTimeline(props) {
    const { children, className, style } = props;

    const getContainerClassName = () =>
        classnames('rainbow-activity-timeline_container', className);

    return (
        <ul className={getContainerClassName()} style={style}>
            {children}
        </ul>
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
