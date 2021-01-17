import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import isChildRegistered from '../InternalDropdown/helpers/isChildRegistered';
import insertChildOrderly from '../InternalDropdown/helpers/insertChildOrderly';
import { getChildTimelineMarkersNodes } from './helpers';
import { Provider } from './context';
import StyledUl from './styled/ul';

export default function AccordionTimeline(props) {
    const { id, children, className, style, multiple, activeSectionNames, onToggleSection } = props;
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
        ({ name }) => {
            if (typeof onToggleSection === 'function') {
                return onToggleSection({ name });
            }
            return setActiveNames(name);
        },
        [onToggleSection],
    );

    const context = useMemo(() => {
        return {
            activeNames,
            multiple,
            privateRegisterMarker,
            privateUnregisterMarker,
            privateOnToggleMarker,
        };
    }, [
        activeNames,
        multiple,
        privateRegisterMarker,
        privateUnregisterMarker,
        privateOnToggleMarker,
    ]);

    return (
        <StyledUl
            id={id}
            className={className}
            style={style}
            ref={containerRef}
            variant="accordion"
        >
            <Provider value={context}>{children}</Provider>
        </StyledUl>
    );
}

AccordionTimeline.propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    className: PropTypes.string,
    style: PropTypes.object,
    multiple: PropTypes.bool,
    activeSectionNames: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
    ]),
    onToggleSection: PropTypes.func,
};

AccordionTimeline.defaultProps = {
    id: undefined,
    children: null,
    className: undefined,
    style: undefined,
    multiple: false,
    onToggleSection: undefined,
    activeSectionNames: undefined,
};
