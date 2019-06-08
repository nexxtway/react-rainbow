import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class TimelineMarker extends Component {
    render() {
        const { icon, label, description, children } = this.props;
        return (
            <li>
                <div className="rainbow-timeline-marker_container">
                    <div className="rainbow-timeline-marker_header">
                        <span className="rainbow-timeline-marker_icon-container">{icon}</span>
                        <h1 className="rainbow-timeline-marker_label">{label}</h1>
                    </div>
                    <p className="rainbow-timeline-marker_description">{description}</p>
                    <p className="rainbow-timeline-marker_body">{children}</p>
                </div>
            </li>
        );
    }
}

TimelineMarker.propTypes = {
    icon: PropTypes.element,
};

TimelineMarker.defaultProps = {
    icon: <span />,
};
