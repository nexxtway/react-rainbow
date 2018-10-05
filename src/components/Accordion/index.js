import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';

/**
* Accordions are used for freeform data entry.
*/
export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.handleToggleSection = this.handleToggleSection.bind(this);
        this.state = {
            activeNames: props.activeSectionNames,
            multiple: props.multiple,
            privateOnToggleSection: this.handleToggleSection,
        };
    }

    static getDerivedStateFromProps(props, state) {
        const { activeSectionNames } = props;
        if (activeSectionNames && activeSectionNames !== state.activeNames) {
            return {
                activeNames: activeSectionNames,
            };
        }
        return null;
    }

    handleToggleSection(event, name) {
        const { onToggleSection } = this.props;
        if (typeof onToggleSection === 'function') {
            return onToggleSection(event, name);
        }
        return this.setState({ activeNames: name });
    }

    render() {
        const { id, children, style, className } = this.props;
        return (
            <ul
                id={id}
                className={className}
                style={style}>

                <Provider value={this.state}>
                    {children}
                </Provider>
            </ul>
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
