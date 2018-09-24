/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from '../Tabset/context';
import './styles.css';

class TabItem extends Component {
    constructor(props) {
        super(props);
        this.tabRef = React.createRef();
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const { privateRegisterTab, name, disabled } = this.props;
        if (!disabled) {
            return setTimeout(() => privateRegisterTab({ name, ref: this.tabRef.current }), 0);
        }
        return null;
    }

    componentWillUnmount() {
        const { privateUnRegisterTab, name } = this.props;
        privateUnRegisterTab(name);
    }

    getTabClassName() {
        const { disabled, fullWidth, className } = this.props;
        return classnames('rainbow-tab',
            {
                'rainbow-tab--full-width': fullWidth,
                'rainbow-tab--active': this.isSelected(),
                'rainbow-tab--disabled': disabled,
            },
            className,
        );
    }

    getTabIndex() {
        if (this.isSelected()) {
            return 0;
        }
        return -1;
    }

    handleSelect(e) {
        const { disabled, onSelect, name } = this.props;
        if (!disabled) {
            onSelect(e, name);
        }
    }

    isSelected() {
        const { activeTabName, name } = this.props;
        return activeTabName === name;
    }

    render() {
        const { label, style, title, id, ariaControls } = this.props;

        return (
            <li
                className={this.getTabClassName()}
                style={style}
                title={title}
                role="presentation">
                <a
                    href="javascript:void(0);"
                    role="tab"
                    className="rainbow-tab_anchor"
                    aria-selected={this.isSelected()}
                    onClick={this.handleSelect}
                    tabIndex={this.getTabIndex()}
                    id={id}
                    aria-controls={ariaControls}
                    ref={this.tabRef}>

                    <div className="rainbow-tab_selected-indicator" />
                    {label}
                </a>
            </li>
        );
    }
}

export default function Tab(props) {
    return (
        <Consumer>
            {context => <TabItem {...props} {...context} />}
        </Consumer>
    );
}

Tab.propTypes = {
    /** The text displayed for the tab item. */
    label: PropTypes.oneOfType([
        PropTypes.node, PropTypes.string]),
    /** A unique identifier for the tab item. */
    name: PropTypes.string,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies whether this tab should be displayed in a disabled state.
    * Disabled tabs can't be clicked. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The optional ID is used during tabset's onSelect
    * event to determine which tab was clicked. */
    id: PropTypes.string,
    /** This prop is associated with the id attribute of the container
    * that show the content of this tab. */
    ariaControls: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Tab.defaultProps = {
    label: null,
    name: undefined,
    title: undefined,
    disabled: false,
    id: undefined,
    ariaControls: undefined,
    className: undefined,
    style: undefined,
};
