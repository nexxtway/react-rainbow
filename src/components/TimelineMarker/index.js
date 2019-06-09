import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from './calendarIcon';
import './styles.css';

/**
 * The TimelineMarker displays each of the user’s upcoming, current, and past activities.
 * @category Layout
 */
export default class TimelineMarker extends Component {
    render() {
        const { icon, label, description, datetime, children } = this.props;
        return (
            <li className="rainbow-timeline-marker_container">
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
}

TimelineMarker.propTypes = {
    /** The title of the content to be displayed inside the TimelineMarker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The title of the content to be displayed inside the TimelineMarker. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The content of the TimelineMarker, used to render differents
     * content type inside TimelineMarker. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The title of the content to be displayed inside the TimelineMarker. */
    datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon displayed for the TimelineMarker.
     * If not passed by default a calendar icon will be showed.  */
    icon: PropTypes.node,
};

TimelineMarker.defaultProps = {
    label: null,
    description: null,
    children: null,
    datetime: null,
    icon: <CalendarIcon />,
};
