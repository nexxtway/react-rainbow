/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import RenderIf from './../RenderIf';
import { LEFT_KEY, RIGHT_KEY } from '../../libs/constants';
import {
    getChildTabNodes,
    insertChildOrderly,
    getTabIndexFromName,
    getChildrenTotalWidth,
    getChildrenTotalWidthUpToClickedTab,
    isNotSameChildren,
    getUpdatedTabsetChildren,
    getRightButtonDisabledState,
    getLeftButtonDisabledState,
} from './utils';
import RightThinChevron from './rightThinChevron';
import LeftThinChevron from './leftThinChevron';
import ResizeSensor from '../../libs/ResizeSensor';
import debounce from '../../libs/debounce';
import StyledContainer from './styled/container';
import StyledObserver from './styled/observer';
import StyledTabset from './styled/tabset';
import StyledInnerContainer from './styled/innerContainer';
import StyledButtonGroup from './styled/buttonGroup';
import StyledButtonIcon from './styled/buttonIcon';

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
            tabsetChildren: [],
            areButtonsVisible: false,
        };
        this.isFirstTime = true;
        this.tabsetRef = React.createRef();
        this.resizeTarget = React.createRef();
        this.registerTab = this.registerTab.bind(this);
        this.unRegisterTab = this.unRegisterTab.bind(this);
        this.updateTab = this.updateTab.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
        this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
        this.updateButtonsVisibility = this.updateButtonsVisibility.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.keyHandlerMap = {
            [RIGHT_KEY]: () => this.selectTab(RIGHT_SIDE),
            [LEFT_KEY]: () => this.selectTab(LEFT_SIDE),
        };
    }

    componentDidMount() {
        this.widthObserver = new ResizeSensor(
            this.resizeTarget.current,
            debounce(this.updateButtonsVisibility, 100),
        );
    }

    componentDidUpdate(prevProp) {
        const { tabsetChildren } = this.state;
        const { isFirstTime } = this;
        const { children } = this.props;
        const areAllChildrenRegistered = children.length === tabsetChildren.length;
        if (isNotSameChildren(children, prevProp.children)) {
            this.updateButtonsVisibility();
        }
        if (areAllChildrenRegistered && isFirstTime) {
            this.updateButtonsVisibility();
            this.isFirstTime = false;
        }
    }

    componentWillUnmount() {
        this.widthObserver.detach(this.resizeTarget.current);
    }

    setAsSelectedTab(tabIndex) {
        const { tabsetChildren } = this.state;
        tabsetChildren[tabIndex].ref.click();
        tabsetChildren[tabIndex].ref.focus();
    }

    updateButtonsVisibility() {
        const { tabsetChildren } = this.state;
        const tabset = this.tabsetRef.current;
        const { scrollWidth, scrollLeft, offsetWidth: tabsetWidth } = tabset;
        const childrenTotalWidth = getChildrenTotalWidth(tabsetChildren);
        const showButtons = childrenTotalWidth > tabsetWidth;
        this.screenWidth = window.innerWidth;
        this.scrollLeft = scrollLeft;
        this.maxScroll = scrollWidth - tabsetWidth;
        this.tabsetWidth = tabsetWidth;
        this.setState({ areButtonsVisible: showButtons });
    }

    handleKeyPressed(event) {
        if (this.keyHandlerMap[event.keyCode]) {
            return this.keyHandlerMap[event.keyCode]();
        }
        return null;
    }

    selectTab(side) {
        const { activeTabName } = this.props;
        const { tabsetChildren } = this.state;
        const activeTabIndex = getTabIndexFromName(tabsetChildren, activeTabName);

        if (activeTabIndex === tabsetChildren.length - 1 && side === RIGHT_SIDE) {
            this.setAsSelectedTab(0);
        } else if (activeTabIndex === 0 && side === LEFT_SIDE) {
            this.setAsSelectedTab(tabsetChildren.length - 1);
        } else {
            this.setAsSelectedTab(activeTabIndex + side);
        }
    }

    isLeftButtonDisabled() {
        const { activeTabName } = this.props;
        const { tabsetChildren } = this.state;
        const { screenWidth, scrollLeft } = this;
        return getLeftButtonDisabledState({
            activeTabName,
            tabsetChildren,
            screenWidth,
            scrollLeft,
        });
    }

    isRightButtonDisabled() {
        const { activeTabName } = this.props;
        const { tabsetChildren } = this.state;
        const { screenWidth, scrollLeft, maxScroll } = this;
        return getRightButtonDisabledState({
            activeTabName,
            tabsetChildren,
            screenWidth,
            scrollLeft,
            maxScroll,
        });
    }

    handleRightButtonClick() {
        const { screenWidth, tabsetWidth, scrollLeft } = this;
        if (screenWidth > 600) {
            return this.tabsetRef.current.scrollTo(scrollLeft + tabsetWidth, 0);
        }
        return this.selectTab(RIGHT_SIDE);
    }

    handleLeftButtonClick() {
        const { screenWidth, tabsetWidth, scrollLeft } = this;
        if (screenWidth > 600) {
            return this.tabsetRef.current.scrollTo(scrollLeft - tabsetWidth, 0);
        }
        return this.selectTab(LEFT_SIDE);
    }

    updateTab(tab, nameToUpdate) {
        const { tabsetChildren } = this.state;
        const newTabsetChildren = getUpdatedTabsetChildren(tabsetChildren, tab, nameToUpdate);
        this.setState({ tabsetChildren: newTabsetChildren });
    }

    registerTab(tab) {
        const { tabsetChildren } = this.state;
        const [...nodes] = getChildTabNodes(this.tabsetRef.current);
        const newChildrenRefs = insertChildOrderly(tabsetChildren, tab, nodes);
        this.setState({ tabsetChildren: newChildrenRefs });
    }

    unRegisterTab(tabName) {
        const { tabsetChildren } = this.state;
        const newTabsetChildren = tabsetChildren.filter(tab => tab.name !== tabName);
        this.setState({ tabsetChildren: newTabsetChildren });
    }

    scrollToSelectedTab(name) {
        const { tabsetChildren } = this.state;
        const tabset = this.tabsetRef.current;
        const { scrollLeft, offsetWidth: tabsetWidth } = tabset;
        const tabIndex = getTabIndexFromName(tabsetChildren, name);
        const isFirstTab = tabIndex === 0;

        if (isFirstTab) {
            this.tabsetRef.current.scrollTo(0, 0);
        } else {
            const totalWidthUpToCurrentTab = getChildrenTotalWidthUpToClickedTab(
                tabsetChildren,
                tabIndex + 1,
            );
            const totalWidthUpToPrevTab = getChildrenTotalWidthUpToClickedTab(
                tabsetChildren,
                tabIndex,
            );
            const tabsetWidthUpToCurrentTab = tabsetWidth + scrollLeft;
            const isCurrentTabOutOfViewOnRightSide =
                totalWidthUpToCurrentTab > tabsetWidthUpToCurrentTab - 20;
            const isCurrentTabOutOfViewOnLeftSide = scrollLeft > totalWidthUpToPrevTab;
            if (isCurrentTabOutOfViewOnLeftSide) {
                this.tabsetRef.current.scrollTo(totalWidthUpToPrevTab, 0);
            }
            if (isCurrentTabOutOfViewOnRightSide) {
                const moveScroll = totalWidthUpToCurrentTab - tabsetWidthUpToCurrentTab + 20;
                this.tabsetRef.current.scrollTo(scrollLeft + moveScroll, 0);
            }
        }
    }

    handleSelect(e, name) {
        const { onSelect } = this.props;
        this.scrollToSelectedTab(name);
        onSelect(e, name);
    }

    render() {
        const { activeTabName, fullWidth, children, style, className, id } = this.props;
        const { areButtonsVisible } = this.state;
        const { screenWidth } = this;
        const showButtons = areButtonsVisible || screenWidth < 600;
        const context = {
            activeTabName,
            onSelect: this.handleSelect,
            privateRegisterTab: this.registerTab,
            privateUnRegisterTab: this.unRegisterTab,
            privateUpdateTab: this.updateTab,
            fullWidth,
        };

        return (
            <StyledContainer className={className} style={style} id={id}>
                <StyledObserver ref={this.resizeTarget} />
                <StyledTabset>
                    <StyledInnerContainer
                        fullWidth={fullWidth}
                        role="tablist"
                        onKeyDown={this.handleKeyPressed}
                        onScroll={this.updateButtonsVisibility}
                        ref={this.tabsetRef}
                    >
                        <Provider value={context}>{children}</Provider>
                    </StyledInnerContainer>
                    <RenderIf isTrue={showButtons}>
                        <StyledButtonGroup>
                            <StyledButtonIcon
                                icon={<LeftThinChevron />}
                                disabled={this.isLeftButtonDisabled()}
                                onClick={this.handleLeftButtonClick}
                                assistiveText="previus tab button"
                                variant="border-filled"
                            />
                            <StyledButtonIcon
                                icon={<RightThinChevron />}
                                disabled={this.isRightButtonDisabled()}
                                onClick={this.handleRightButtonClick}
                                assistiveText="next tab button"
                                variant="border-filled"
                            />
                        </StyledButtonGroup>
                    </RenderIf>
                </StyledTabset>
            </StyledContainer>
        );
    }
}

Tabset.propTypes = {
    /** The name of the tab that is selected. It must match the name of the tab. */
    activeTabName: PropTypes.string,
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
