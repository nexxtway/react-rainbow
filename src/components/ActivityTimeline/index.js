import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import isChildRegistered from '../InternalDropdown/helpers/isChildRegistered';
import insertChildOrderly from '../InternalDropdown/helpers/insertChildOrderly';
import { getChildTimelineMarkersNodes } from './helpers';
import { Provider } from './context';
import StyledUl from './styled/ul';

/**
 * The ActivityTimeline displays each of any item upcoming, current, and past activities in cronological order (ascending or descending).
 * Notice that ActivityTimeline and TimelineMarker components are related and should be implemented together.
 * @category Layout
 */
export default function ActivityTimeline(props) {
    const {
        id,
        children,
        className,
        style,
        variant,
        multiple,
        activeSectionNames,
        onToggleSection,
    } = props;
    const registeredTimelineMarkers = useRef([]);
    const [activeNames, setActiveNames] = useState(activeSectionNames);
    const containerRef = useRef();

    useEffect(() => {
        if (
            activeSectionNames &&
            activeSectionNames !== activeNames &&
            typeof onToggleSection === 'function'
        ) {
            setActiveNames(activeSectionNames);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSectionNames, onToggleSection]);

    const privateRegisterMarker = useCallback((stepRef, stepProps) => {
        if (isChildRegistered(stepProps.name, registeredTimelineMarkers.current)) return;
        const [...nodes] = getChildTimelineMarkersNodes(containerRef.current);
        const newStepsList = insertChildOrderly(
            registeredTimelineMarkers.current,
            {
                ref: stepRef,
                ...stepProps,
            },
            nodes,
        );
        registeredTimelineMarkers.current = newStepsList;
    }, []);

    const privateUnregisterMarker = useCallback((stepRef, stepName) => {
        if (!isChildRegistered(stepName, registeredTimelineMarkers.current)) return;
        registeredTimelineMarkers.current = registeredTimelineMarkers.current.filter(
            step => step.name !== stepName,
        );
    }, []);

    const privateOnToggleMarker = useCallback(
        (event, name) => {
            if (typeof onToggleSection === 'function') {
                return onToggleSection(event, name);
            }
            return setActiveNames(name);
        },
        [onToggleSection],
    );

    const context = useMemo(() => {
        return {
            activeNames,
            multiple,
            isVariantAccordion: variant === 'accordion',
            privateRegisterMarker,
            privateUnregisterMarker,
            privateOnToggleMarker,
        };
    }, [
        variant,
        activeNames,
        multiple,
        privateRegisterMarker,
        privateUnregisterMarker,
        privateOnToggleMarker,
    ]);

    return (
        <StyledUl id={id} className={className} style={style} ref={containerRef} variant={variant}>
            <Provider value={context}>{children}</Provider>
        </StyledUl>
    );
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
     * This value defaults to false. */
    multiple: PropTypes.bool,
    /** The variant changes the appearance of the timeline. Accepted variants include
     * default and accordion. */
    variant: PropTypes.oneOf(['default', 'accordion']),
    /** It contain the name of the TimelineMarker that is expanded.
     * It is an array of string when multiple is true,
     * or a string when when multiple is false.
     * It must match the name of the TimelineMarker. */
    activeSectionNames: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
    ]),
    /** Action fired when a TimelineMarker is selected.
     * The event params include the `name` of the selected TimelineMarker. */
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
