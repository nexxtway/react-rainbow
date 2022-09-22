import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ActivityTimelineContext } from '../ActivityTimeline/context';
import CalendarIcon from './calendarIcon';
import AccordionTimelineMarker from './accordionMarker';
import BasicTimelineMarker from './basicMarker';

/**
 * The TimelineMarker displays one event of an item's timeline. It's generally used to compose the ActivityTimeline component.
 * @category Layout
 */
export default function TimelineMarker(props) {
    const context = useContext(ActivityTimelineContext);
    if (context) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <AccordionTimelineMarker {...props} />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <BasicTimelineMarker {...props} />;
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
    children: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The name is used to determine which TimelineMarker was clicked.
     * If `name` is not passed it will be generated. */
    name: PropTypes.string,
    /** Set to true to show a loading symbol. Defaults to false */
    isLoading: PropTypes.bool,
};

TimelineMarker.defaultProps = {
    label: null,
    description: null,
    datetime: null,
    icon: <CalendarIcon />,
    children: null,
    className: undefined,
    style: undefined,
    name: undefined,
    isLoading: false,
};
