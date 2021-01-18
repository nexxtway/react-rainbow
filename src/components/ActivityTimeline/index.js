import React from 'react';
import PropTypes from 'prop-types';
import AccordionTimeline from './accordionTimeline';
import BasicTimeline from './basicTimeline';

/**
 * The ActivityTimeline displays each of any item's upcoming, current, and past activities in chronological order (ascending or descending).
 * Notice that ActivityTimeline and TimelineMarker components are related and should be implemented together.
 * @category Layout
 */
export default function ActivityTimeline(props) {
    const { variant, ...rest } = props;
    if (variant === 'accordion') {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <AccordionTimeline {...rest} />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <BasicTimeline {...rest} />;
}

ActivityTimeline.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** If true, expands multiples TimelineMarkers.
     * This value defaults to false.
     * Important: this prop is only to use when variant is `accordion`. */
    multiple: PropTypes.bool,
    /** The variant changes the appearance of the timeline. Accepted variants include
     * default and accordion. */
    variant: PropTypes.oneOf(['default', 'accordion']),
    /** It contain the name of the TimelineMarker that is expanded.
     * It is an array of string when multiple is true,
     * or a string when when multiple is false.
     * It must match the name of the TimelineMarker.
     * Important: this prop is only to use when variant is `accordion`. */
    activeSectionNames: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
    ]),
    /** Action fired when a TimelineMarker is selected.
     * The event params include the `activeSectionNames` and `toggledSection`.
     * Important: this prop is only to use when variant is `accordion`. */
    onToggleSection: PropTypes.func,
};

ActivityTimeline.defaultProps = {
    id: undefined,
    children: null,
    className: undefined,
    style: undefined,
    variant: 'default',
    multiple: false,
    onToggleSection: undefined,
    activeSectionNames: undefined,
};
