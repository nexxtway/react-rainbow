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

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-tab', className);
    }

    getTabClassName() {
        const { disabled, fullWidth } = this.props;
        return classnames('rainbow-tab_anchor',
            {
                'rainbow-tab--active': this.isSelected(),
                'rainbow-tab--disabled': disabled,
                'rainbow-tab--full-width': fullWidth,
            },
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
                className={this.getContainerClassName()}
                style={style}
                title={title}
                role="presentation">
                <a
                    href="javascript:void(0);"
                    role="tab"
                    className={this.getTabClassName()}
                    aria-selected={this.isSelected()}
                    onClick={this.handleSelect}
                    tabIndex={this.getTabIndex()}
                    id={id}
                    aria-controls={ariaControls}
                    ref={this.tabRef}>

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
        PropTypes.node, PropTypes.string,
    ]),
    /** The name is used during tabset's onSelect
    * event to determine which tab was clicked. */
    name: PropTypes.string.isRequired,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** Specifies whether this tab should be displayed in a disabled state.
    * Disabled tabs can't be clicked. This value defaults to false. */
    disabled: PropTypes.bool,
    /** This ID is to be associated with the aria-labelledby attribute of the container
     * that show the content of this tab. */
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
