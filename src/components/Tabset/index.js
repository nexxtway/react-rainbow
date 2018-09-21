import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';
import './styles.css';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

export default class Tabset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabChildren: [],
        };
        this.registerTab = this.registerTab.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectTab(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectTab(LEFT_SIDE),
        };
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-tabset', className);
    }

    handleKeyPressed(event) {
        event.preventDefault();
        if (this.keyHandlerMap[event.keyCode]) {
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    selectTab(side) {
        const { activeTabName, onSelect } = this.props;
        const { tabChildren } = this.state;
        const tabIndex = tabChildren.findIndex(tab => tab === activeTabName);
        if (tabIndex === tabChildren.length - 1 && side === RIGHT_SIDE) {
            onSelect(tabChildren[0]);
        } else if (tabIndex === 0 && side === LEFT_SIDE) {
            onSelect(tabChildren[tabChildren.length - 1]);
        } else {
            onSelect(tabChildren[tabIndex + side]);
        }
    }

    registerTab(tab) {
        const { tabChildren } = this.state;
        const newTabChildren = tabChildren;
        newTabChildren.push(tab);
        this.setState({ tabChildren: newTabChildren });
    }

    render() {
        const { id, onSelect, activeTabName, children, style } = this.props;
        return (
            <ul
                id={id}
                className={this.getContainerClassName()}
                style={style}
                role="tablist"
                onKeyDown={this.handleKeyPressed}>

                <Provider value={{ activeTabName, onSelect, registerTab: this.registerTab }}>
                    {children}
                </Provider>
            </ul>
        );
    }
}

Tabset.propTypes = {
    onSelect: PropTypes.func,
    activeTabName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
};

Tabset.defaultProps = {
    onSelect: () => {},
    activeTabName: undefined,
    children: null,
    className: undefined,
    style: undefined,
    id: undefined,
};
