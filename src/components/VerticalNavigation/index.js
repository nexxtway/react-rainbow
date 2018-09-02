import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import './styles.css';

/**
* Navigation represents a list of links that either take the user to another page
* or parts of the page the user is in.
*/
export default function VerticalNavigation(props) {
    const {
        ariaLabel,
        style,
        selectedItem,
        onSelect,
        compact,
        shaded,
        className,
        children,
    } = props;
    const context = {
        selectedItem,
        onSelect,
    };

    const getClassNames = () => classnames('rainbow-nav-vertical', {
        'rainbow-nav-vertical_compact': compact,
        'rainbow-nav-vertical_shade': shaded,
    }, className);

    return (
        <nav
            className={getClassNames()}
            style={style}
            aria-label={ariaLabel}>

            <Provider value={context}>
                {children}
            </Provider>
        </nav>
    );
}

VerticalNavigation.propTypes = {
    /** Name of the nagivation item to make active. */
    selectedItem: PropTypes.node,
    /** Action fired when an item is selected.
    * The event params include the `name` of the selected item. */
    onSelect: PropTypes.func,
    /** Specify true to reduce spacing between navigation items. This value defaults to false. */
    compact: PropTypes.bool,
    /** Specify true when the vertical navigation is sitting on top of a shaded background.
    * This value defaults to false. */
    shaded: PropTypes.bool,
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

VerticalNavigation.defaultProps = {
    selectedItem: null,
    onSelect: () => {},
    compact: false,
    shaded: false,
    ariaLabel: undefined,
    className: undefined,
    style: undefined,
    children: null,
};
