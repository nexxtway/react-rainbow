import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CalendarIcon from './calendarIcon';
import './styles.css';

/**
 * The TimelineMarker displays one event of an item timeline.
 * @category Layout
 */
export default function TimelineMarker(props) {
    const { icon, label, description, datetime, children, className, style } = props;

    const getContainerClassName = () => classnames('rainbow-timeline-marker_container', className);

    return (
        <li className={getContainerClassName()} style={style}>
            <div className="rainbow-timeline-marker_column-left">
                <span className="rainbow-timeline-marker_icon-container">{icon}</span>
            </div>
            <div className="rainbow-timeline-marker_content">
                <div className="rainbow-timeline-marker_content-header">
                    <div className="rainbow-timeline-marker_content-header-title">
                        <h1 className="rainbow-timeline-marker_label">{label}</h1>
                        <p className="rainbow-timeline-marker_datetime">{datetime}</p>
                    </div>
                    <p className="rainbow-timeline-marker_description">{description}</p>
                </div>
                <div className="rainbow-timeline-marker_body">{children}</div>
            </div>
        </li>
    );
}

TimelineMarker.propTypes = {
    /** The text to be displayed as the TimelineMarker's label. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The text to be displayed as the TimelineMarker's description. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The text with the formatted datetime of the event. */
    datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show at the left of the TimelineMarker.
     * If not passed by default a calendar icon will be showed.  */
    icon: PropTypes.node,
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

TimelineMarker.defaultProps = {
    label: null,
    description: null,
    datetime: null,
    icon: <CalendarIcon />,
    children: null,
    className: undefined,
    style: undefined,
};
