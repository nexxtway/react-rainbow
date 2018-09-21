/* eslint-disable no-script-url, react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer } from '../Tabset/context';
import './styles.css';

class TabItem extends Component {

    componentDidMount() {
        const { registerTab, name, disabled } = this.props;
        if (!disabled) {
            registerTab(name);
        }
    }

    getTabClassName() {
        const { disabled, className } = this.props;
        return classnames('rainbow-tab',
            { 'rainbow-tab--active': this.isSelected() },
            { 'rainbow-tab--disabled': disabled },
            className,
        );
    }

    isSelected() {
        const { activeTabName, name } = this.props;
        return activeTabName === name;
    }

    handleSelect() {
        const { disabled, onSelect, name } = this.props;
        if (!disabled) {
            onSelect(name);
        }
    }

    render() {
        const { label, icon, style } = this.props;
        const tabIndex = this.isSelected() ? '0' : '-1';

        return (
            <li
                className={this.getTabClassName()}
                style={style}
                role="presentation">
                <a
                    href="javascript:void(0);"
                    role="tab"
                    aria-selected={this.isSelected()}
                    onClick={() => this.handleSelect()}
                    tabIndex={tabIndex}>

                    {icon}
                    <span>{label}</span>
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
    label: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
};

Tab.defaultProps = {
    label: undefined,
    name: undefined,
    icon: null,
    disabled: false,
    className: undefined,
    style: undefined,
};
