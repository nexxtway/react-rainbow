import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';

class VerticalNavigation extends Component {
    constructor(props) {
        super(props);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.state = {
            privateSelectedItem: props.selectedItem,
            privateOnSelect: this.handleOnSelect,
        };
    }

    componentWillReceiveProps(prevProps, newProps) {
        if (prevProps.selectedItem !== newProps.selectedItem) {
            this.setState({ privateSelectedItem: newProps.selectedItem });
        }
    }

    getClassNames() {
        const { compact, shaded, className } = this.props;
        return classnames('slds-nav-vertical', {
            'slds-nav-vertical_compact': compact,
            'slds-nav-vertical_shade': shaded,
        }, className);
    }

    handleOnSelect(e, selectedItem) {
        const { onSelect } = this.props;
        if (typeof onSelect === 'function') {
            onSelect(e, selectedItem);
        } else {
            this.setState({ privateSelectedItem: selectedItem });
        }
    }

    render() {
        const {
            ariaLabel,
            style,
            children,
        } = this.props;

        return (
            <nav
                className={this.getClassNames()}
                style={style}
                aria-label={ariaLabel}>
                <Provider value={this.state}>
                    {children}
                </Provider>
            </nav>
        );
    }
}

VerticalNavigation.propTypes = {
    /** The content body section */
    children: PropTypes.node,
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
    /** The aria label attribute for the navigation component */
    ariaLabel: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

VerticalNavigation.defaultProps = {
    children: null,
    selectedItem: null,
    onSelect: undefined,
    compact: false,
    shaded: false,
    ariaLabel: '',
    className: '',
    style: {},
};

export default VerticalNavigation;
