import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';

/**
* Accordions are used for freeform data entry.
*/
export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNames: props.activeSectionNames,
        };
        this.handleChangeExpanded = this.handleChangeExpanded.bind(this);
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

    getContainerClassName() {
        const { className } = this.props;
        return classnames(className);
    }

    handleChangeExpanded(event, name) {
        const { onToggleSection } = this.props;
        if (typeof onToggleSection === 'function') {
            return onToggleSection(event, name);
        }
        return this.setState({ activeNames: name });
    }

    render() {
        const { id, children, style, multiple } = this.props;
        const { activeNames } = this.state;
        return (
            <ul
                id={id}
                className={this.getContainerClassName()}
                style={style}>

                <Provider value={{
                    multiple,
                    activeNames,
                    privateOnToggleSection: this.handleChangeExpanded,
                }}>
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
    /** The name of the AccordionSection that is selected.
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
