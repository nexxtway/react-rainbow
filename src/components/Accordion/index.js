import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { LEFT_KEY, RIGHT_KEY, DOWN_KEY, UP_KEY } from '../../libs/constants';
import { getChildAccordionSectionNodes, insertChildOrderly } from './utils';
import StyledUl from './styled/ul';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

/**
 * An Accordion is a collection of vertically stacked sections with multiple content areas.
 * Allows a user to toggle the display of a section of content.
 * @category Layout
 */
export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.handleToggleSection = this.handleToggleSection.bind(this);
        this.handleFocusSection = this.handleFocusSection.bind(this);
        this.registerAccordionSection = this.registerAccordionSection.bind(this);
        this.unregisterAccordionSection = this.unregisterAccordionSection.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectAccordionSection(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectAccordionSection(LEFT_SIDE),
            [DOWN_KEY]: () => this.selectAccordionSection(RIGHT_SIDE),
            [UP_KEY]: () => this.selectAccordionSection(LEFT_SIDE),
        };
        this.state = {
            activeNames: props.activeSectionNames,
            multiple: props.multiple,
            privateOnToggleSection: this.handleToggleSection,
            privateOnFocusSection: this.handleFocusSection,
            privateRegisterAccordionSection: this.registerAccordionSection,
            privateUnregisterAccordionSection: this.unregisterAccordionSection,
            privateOnKeyPressed: this.handleKeyPressed,
            childrenRegistered: [],
        };
    }

    static getDerivedStateFromProps(props, state) {
        const { activeSectionNames, onToggleSection } = props;
        if (
            activeSectionNames &&
            activeSectionNames !== state.activeNames &&
            typeof onToggleSection === 'function'
        ) {
            return {
                activeNames: activeSectionNames,
            };
        }
        return null;
    }

    setAsSelectAccordionSection(accordionSectionIndex) {
        const { childrenRegistered } = this.state;
        childrenRegistered[accordionSectionIndex].focusButtonIcon();
    }

    handleToggleSection(event, name) {
        const { onToggleSection } = this.props;
        if (typeof onToggleSection === 'function') {
            return onToggleSection(event, name);
        }
        return this.setState({ activeNames: name });
    }

    handleFocusSection(currentSection) {
        return this.setState({ currentSection });
    }

    handleKeyPressed(event) {
        if (this.keyHandlerMap[event.keyCode]) {
            event.preventDefault();
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    selectAccordionSection(side) {
        const { childrenRegistered, currentSection } = this.state;
        const accordionSectionIndex = childrenRegistered.findIndex(
            section => section.name === currentSection,
        );
        if (accordionSectionIndex === childrenRegistered.length - 1 && side === RIGHT_SIDE) {
            this.setAsSelectAccordionSection(0);
        } else if (accordionSectionIndex === 0 && side === LEFT_SIDE) {
            this.setAsSelectAccordionSection(childrenRegistered.length - 1);
        } else {
            this.setAsSelectAccordionSection(accordionSectionIndex + side);
        }
    }

    registerAccordionSection(section) {
        const { childrenRegistered } = this.state;
        const [...nodes] = getChildAccordionSectionNodes(this.containerRef.current);
        const newChildrenRefs = insertChildOrderly(childrenRegistered, section, nodes);
        this.setState({ childrenRegistered: newChildrenRefs });
    }

    unregisterAccordionSection(sectionName) {
        const { childrenRegistered } = this.state;
        const newAccordionSectionChildren = childrenRegistered.filter(
            section => section.name !== sectionName,
        );
        this.setState({ childrenRegistered: newAccordionSectionChildren });
    }

    render() {
        const { id, children, style, className } = this.props;
        return (
            <StyledUl ref={this.containerRef} id={id} className={className} style={style}>
                <Provider value={this.state}>{children}</Provider>
            </StyledUl>
        );
    }
}

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
