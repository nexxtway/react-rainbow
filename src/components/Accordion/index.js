import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { LEFT_KEY, RIGHT_KEY, DOWN_KEY, UP_KEY } from '../../libs/constants';
import StyledUl from './styled/ul';
import { useChildrenRegisterRef } from '../../libs/hooks';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;
const SELECTOR = 'li[data-id="accordion-section-li"]';

/**
 * An Accordion is a collection of vertically stacked sections with multiple content areas.
 * Allows a user to toggle the display of a section of content.
 * @category Layout
 */
const Accordion = props => {
    const { id, children, style, className, activeSectionNames, multiple, onToggleSection } = props;
    const containerRef = useRef();

    const [activeNames, setActiveNames] = useState(activeSectionNames);
    const [currentSection, setCurrentSection] = useState();

    const { childrenRegistered, register, unregister } = useChildrenRegisterRef({
        containerRef,
        selector: SELECTOR,
    });

    useEffect(() => {
        if (activeSectionNames !== activeNames) {
            setActiveNames(activeSectionNames);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSectionNames]);

    const handleToggleSection = (event, name) => {
        if (typeof onToggleSection === 'function') {
            return onToggleSection(event, name);
        }
        return setActiveNames(name);
    };

    const setAsSelectAccordionSection = accordionSectionIndex => {
        childrenRegistered[accordionSectionIndex].focusButton();
    };

    const selectAccordionSection = side => {
        const accordionSectionIndex = childrenRegistered.findIndex(
            section => section.id === currentSection,
        );

        if (accordionSectionIndex === childrenRegistered.length - 1 && side === RIGHT_SIDE) {
            setAsSelectAccordionSection(0);
        } else if (accordionSectionIndex === 0 && side === LEFT_SIDE) {
            setAsSelectAccordionSection(childrenRegistered.length - 1);
        } else {
            setAsSelectAccordionSection(accordionSectionIndex + side);
        }
    };

    const keyHandlerMap = {
        [RIGHT_KEY]: () => selectAccordionSection(RIGHT_SIDE),
        [LEFT_KEY]: () => selectAccordionSection(LEFT_SIDE),
        [DOWN_KEY]: () => selectAccordionSection(RIGHT_SIDE),
        [UP_KEY]: () => selectAccordionSection(LEFT_SIDE),
    };

    const handleKeyPressed = event => {
        if (keyHandlerMap[event.keyCode]) {
            event.preventDefault();
            return keyHandlerMap[event.keyCode]();
        }
        return null;
    };

    const context = {
        activeNames,
        multiple,
        privateOnToggleSection: handleToggleSection,
        privateOnFocusSection: setCurrentSection,
        privateRegisterAccordionSection: register,
        privateUnregisterAccordionSection: unregister,
        privateOnKeyPressed: handleKeyPressed,
    };

    return (
        <StyledUl ref={containerRef} id={id} className={className} style={style}>
            <Provider value={context}>{children}</Provider>
        </StyledUl>
    );
};

Accordion.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** If true, expands multiples AccordionSections.
     * This value defaults to false. */
    multiple: PropTypes.bool,
    /** Action fired when an AccordionSection is selected.
     * The event params include the `name` of the selected AccordionSection. */
    onToggleSection: PropTypes.func,
    /** It contain the name of the AccordionSection that is expanded.
     * It is an array of string when multiple is true,
     * or a string when when multiple is false.
     * It must match the name of the AccordionSection. */
    activeSectionNames: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
    ]),
};

Accordion.defaultProps = {
    className: undefined,
    style: undefined,
    children: null,
    id: undefined,
    multiple: false,
    onToggleSection: undefined,
    activeSectionNames: undefined,
};

export default Accordion;
