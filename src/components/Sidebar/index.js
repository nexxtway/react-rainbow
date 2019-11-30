import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import StyledNav from './styled/nav';
import StyledUl from './styled/ul';

/**
 * Sidebar represents a list of links that either take the user to another
 * page or parts of the page the user is in.
 * @category Layout
 */
export default function Sidebar(props) {
    const { ariaLabel, style, selectedItem, onSelect, className, children, id } = props;

    const context = {
        selectedItem,
        onSelect,
    };

    return (
        <StyledNav id={id} className={className} style={style} aria-label={ariaLabel}>
            <Provider value={context}>
                <StyledUl>{children}</StyledUl>
            </Provider>
        </StyledNav>
    );
}

Sidebar.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Name of the nagivation item to make active. */
    selectedItem: PropTypes.string,
    /** Action fired when an item is selected.
     * The event params include the `name` of the selected item. */
    onSelect: PropTypes.func,
    /** The aria label attribute for the navigation component. */
    ariaLabel: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

Sidebar.defaultProps = {
    selectedItem: null,
    onSelect: () => {},
    ariaLabel: undefined,
    className: undefined,
    style: undefined,
    children: null,
    id: undefined,
};
