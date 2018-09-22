import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';
import { getChildTabNodes, insertChildOrderly } from './utils';
import './styles.css';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

export default class Tabset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabChildren: [],
        };
        this.containerRef = React.createRef();
        this.registerTab = this.registerTab.bind(this);
        this.unRegisterTab = this.unRegisterTab.bind(this);
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

    setAsSelectedTab(tabIndex) {
        const { tabChildren } = this.state;
        tabChildren[tabIndex].ref.click();
        tabChildren[tabIndex].ref.focus();
    }

    handleKeyPressed(event) {
        if (this.keyHandlerMap[event.keyCode]) {
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    selectTab(side) {
        const { activeTabName } = this.props;
        const { tabChildren } = this.state;
        const tabIndex = tabChildren.findIndex(tab => tab.name === activeTabName);

        if (tabIndex === tabChildren.length - 1 && side === RIGHT_SIDE) {
            this.setAsSelectedTab(0);
        } else if (tabIndex === 0 && side === LEFT_SIDE) {
            this.setAsSelectedTab(tabChildren.length - 1);
        } else {
            this.setAsSelectedTab(tabIndex + side);
        }
    }

    registerTab(tab) {
        const { tabChildren } = this.state;
        const [...nodes] = getChildTabNodes(this.containerRef.current);
        const newChildrenRefs = insertChildOrderly(tabChildren, tab, nodes);
        this.setState({
            tabChildren: newChildrenRefs,
        });
    }

    unRegisterTab(tabName) {
        const { tabChildren } = this.state;
        const newTabChildren = tabChildren.filter(t => t.name !== tabName);
        this.setState({ tabChildren: newTabChildren });
    }

    render() {
        const { id, onSelect, activeTabName, fullWidth, children, style } = this.props;
        return (
            <ul
                id={id}
                className={this.getContainerClassName()}
                style={style}
                role="tablist"
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}>

                <Provider value={{
                    activeTabName,
                    onSelect,
                    privateRegisterTab: this.registerTab,
                    privateUnRegisterTab: this.unRegisterTab,
                    fullWidth,
                }}>
                    {children}
                </Provider>
            </ul>
        );
    }
}

Tabset.propTypes = {
    /** Name of the tab item to make active. */
    activeTabName: PropTypes.node,
    /** Action fired when an item is selected.
     * The event params include the `name` of the selected item. */
    onSelect: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** The id of the outer element. */
    id: PropTypes.string,
};

Tabset.defaultProps = {
    activeTabName: undefined,
    onSelect: () => {},
    fullWidth: false,
    className: undefined,
    style: undefined,
    children: null,
    id: undefined,
};
