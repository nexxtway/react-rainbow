import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import ButtonGroup from './../ButtonGroup';
import ButtonIcon from './../ButtonIcon';
import RenderIf from './../RenderIf';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';
import { getChildTabNodes, insertChildOrderly, getActiveTabIndex, getTabsetChildrenTotalWidth } from './utils';
import RightThinChevron from './rightThinChevron';
import LeftThinChevron from './leftThinChevron';
import './styles.css';

const RIGHT_SIDE = 1;
const LEFT_SIDE = -1;

/**
* Tabs make it easy to explore and switch between different views.
* @category Layout
*/
export default class Tabset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabChildren: [],
            isTabsetButtonsVisible: false,
            tabsetPosition: undefined,
            screenWidth: undefined,
            tabsetScrollLeft: undefined,
            tabsetMaxScroll: undefined,
            tabsetWidth: undefined,
        };
        this.containerRef = React.createRef();
        this.tabsetRef = React.createRef();
        this.registerTab = this.registerTab.bind(this);
        this.unRegisterTab = this.unRegisterTab.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
        this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
        this.updateTabsetButtonsVisibility = this.updateTabsetButtonsVisibility.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectTab(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectTab(LEFT_SIDE),
        };
    }

    componentDidMount() {
        this.updateTabsetButtonsVisibility();
        window.addEventListener('resize', this.updateTabsetButtonsVisibility);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateTabsetButtonsVisibility);
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-tabset', className);
    }

    getInnerContainerClassName() {
        const { fullWidth } = this.props;
        return classnames('rainbow-tabset_inner-container', {
            'rainbow-tabset_inner-container--full-width': fullWidth,
        });
    }

    setAsSelectedTab(tabIndex) {
        const { tabChildren } = this.state;
        tabChildren[tabIndex].ref.click();
        tabChildren[tabIndex].ref.focus();
    }

    updateTabsetButtonsVisibility() {
        const tabset = this.tabsetRef.current;
        const {
            scrollWidth: tabsetScrollWidth,
            scrollLeft: tabsetScrollLeft,
            offsetLeft: tabsetPosition,
            offsetWidth: tabsetWidth,
            children: tabsetChildren,
        } = tabset;
        const screenWidth = window.innerWidth;
        const tabsetMaxScroll = tabsetScrollWidth - tabsetWidth;
        const tabsetChildrenArray = [].slice.call(tabsetChildren, 0);
        const tabsetChildrenWidth = tabsetChildrenArray.map(child => child.offsetWidth);
        const tabsetChildrenTotalWidth = getTabsetChildrenTotalWidth(tabsetChildrenWidth);
        const showButtons = tabsetChildrenTotalWidth > tabsetWidth;
        this.setState({
            tabsetPosition,
            screenWidth,
            tabsetScrollLeft,
            tabsetMaxScroll,
            tabsetWidth,
            isTabsetButtonsVisible: showButtons,
        });
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
        const activeTabIndex = getActiveTabIndex(tabChildren, activeTabName);

        if (activeTabIndex === tabChildren.length - 1 && side === RIGHT_SIDE) {
            this.setAsSelectedTab(0);
        } else if (activeTabIndex === 0 && side === LEFT_SIDE) {
            this.setAsSelectedTab(tabChildren.length - 1);
        } else {
            this.setAsSelectedTab(activeTabIndex + side);
        }
    }

    isLeftButtonDisabled() {
        const { activeTabName } = this.props;
        const { tabChildren, screenWidth, tabsetScrollLeft } = this.state;
        const activeTabIndex = getActiveTabIndex(tabChildren, activeTabName);

        if (screenWidth < 600 && activeTabIndex === 0) {
            return true;
        } if (screenWidth > 600 && tabsetScrollLeft === 0) {
            return true;
        }
        return false;
    }

    isRightButtonDisabled() {
        const { activeTabName } = this.props;
        const { tabChildren, screenWidth, tabsetScrollLeft, tabsetMaxScroll } = this.state;
        const lastTabIndex = tabChildren.length - 1;
        const activeTabIndex = getActiveTabIndex(tabChildren, activeTabName);

        if (screenWidth < 600 && lastTabIndex === activeTabIndex) {
            return true;
        } if (screenWidth > 600 && tabsetScrollLeft === tabsetMaxScroll) {
            return true;
        }
        return false;
    }

    handleRightButtonClick() {
        const { screenWidth, tabsetWidth, tabsetScrollLeft } = this.state;
        if (screenWidth > 600) {
            return this.tabsetRef.current.scrollTo(tabsetScrollLeft + tabsetWidth, 0);
        }
        return this.selectTab(RIGHT_SIDE);
    }

    handleLeftButtonClick() {
        const { screenWidth, tabsetWidth, tabsetScrollLeft } = this.state;
        if (screenWidth > 600) {
            return this.tabsetRef.current.scrollTo(tabsetScrollLeft - tabsetWidth, 0);
        }
        return this.selectTab(LEFT_SIDE);
    }

    registerTab(tab) {
        const { tabChildren } = this.state;
        const [...nodes] = getChildTabNodes(this.tabsetRef.current);
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
        const { isTabsetButtonsVisible, screenWidth } = this.state;
        const privateRegisterTab = this.registerTab;
        const privateUnRegisterTab = this.unRegisterTab;
        return (
            <div
                className={this.getContainerClassName()}
                style={style}
                id={id}
                ref={this.containerRef}>
                <ul
                    className={this.getInnerContainerClassName()}
                    role="tablist"
                    onKeyDown={this.handleKeyPressed}
                    onScroll={this.updateTabsetButtonsVisibility}
                    ref={this.tabsetRef}>

                    <Provider value={{
                        activeTabName,
                        onSelect,
                        privateRegisterTab,
                        privateUnRegisterTab,
                        fullWidth,
                    }}>
                        {children}
                    </Provider>

                </ul>
                <RenderIf isTrue={isTabsetButtonsVisible || screenWidth < 600}>
                    <ButtonGroup className="rainbow-tabset_button-group">
                        <ButtonIcon
                            className="rainbow-tabset_button-icon"
                            icon={<LeftThinChevron />}
                            disabled={this.isLeftButtonDisabled()}
                            onClick={this.handleLeftButtonClick}
                            assistiveText="previus tab button"
                            variant="border-filled" />
                        <ButtonIcon
                            className="rainbow-tabset_button-icon"
                            icon={<RightThinChevron />}
                            disabled={this.isRightButtonDisabled()}
                            onClick={this.handleRightButtonClick}
                            assistiveText="next tab button"
                            variant="border-filled" />
                    </ButtonGroup>
                </RenderIf>
            </div>
        );
    }
}

Tabset.propTypes = {
    /** The name of the tab that is selected. It must match the name of the tab. */
    activeTabName: PropTypes.node,
    /** Action fired when an item is selected.
     * The event params include the `name` of the selected item. */
    onSelect: PropTypes.func,
    /** If true, the tabs will grow to use all the available space.
    * This value defaults to false. */
    fullWidth: PropTypes.bool,
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
