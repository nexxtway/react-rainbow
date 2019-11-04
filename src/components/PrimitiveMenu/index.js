import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuContent from './menuContent';
import { Provider } from './context';
import { findItemByKey, findItemIndex, insertChildOrderly, getChildMenuItemNodes } from './utils';
import { UP_KEY, DOWN_KEY, ESCAPE_KEY, TAB_KEY, ENTER_KEY } from './../../libs/constants';
import StyledContainer from './styled/container';
import StyledDropdown from './styled/dropdown';
import StyledContent from './styled/content';

export default class PrimitiveMenu extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.triggerRef = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleKeyEscapePressed = this.handleKeyEscapePressed.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleKeyDownPressed = this.handleKeyDownPressed.bind(this);
        this.handleKeyUpPressed = this.handleKeyUpPressed.bind(this);
        this.handleKeyEnterPressed = this.handleKeyEnterPressed.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.hoverChild = this.hoverChild.bind(this);

        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);

        this.state = {
            isOpen: false,
            childrenRefs: [],
            childFocusedIndex: -1,
            context: {
                privateOnClose: this.closeMenu,
                privateRegisterChild: this.registerChild,
                privateUnregisterChild: this.unregisterChild,
                privateOnHover: this.hoverChild,
            },
        };
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('touchstart', this.handleClick);
    }

    focusChild(index) {
        const { isLoading } = this.props;
        const { childrenRefs } = this.state;

        if (isLoading || !childrenRefs[index]) {
            return null;
        }
        this.setState({ childFocusedIndex: index });
        return childrenRefs[index].focus();
    }

    handleKeyEscapePressed() {
        this.toggleMenu();
        return this.triggerRef.current.focus();
    }

    handleKeyDownPressed() {
        const { childrenRefs, childFocusedIndex } = this.state;
        const lastChild = childrenRefs.length - 1;
        const isLastChild = childFocusedIndex === lastChild;
        const isBetweenFirstAndLast = childFocusedIndex >= 0 && !isLastChild;
        const isInvalidIndexOrLast = childFocusedIndex === -1 || isLastChild;

        if (isBetweenFirstAndLast) {
            return this.focusChild(childFocusedIndex + 1);
        }
        if (isInvalidIndexOrLast) {
            return this.focusChild(0);
        }
        return null;
    }

    handleKeyUpPressed() {
        const { childrenRefs, childFocusedIndex } = this.state;
        const isFirstChild = childFocusedIndex === 0;
        const isValidIndexGreaterThanFirst = childFocusedIndex >= 0 && !isFirstChild;
        const isInvalidIndexOrFirst = childFocusedIndex === -1 || isFirstChild;
        const lastChild = childrenRefs.length - 1;

        if (isValidIndexGreaterThanFirst) {
            return this.focusChild(childFocusedIndex - 1);
        }
        if (isInvalidIndexOrFirst) {
            return this.focusChild(lastChild);
        }
        return null;
    }

    handleKeyEnterPressed() {
        const { childrenRefs, childFocusedIndex } = this.state;
        const isValidIndex = childFocusedIndex >= 0;
        if (isValidIndex) {
            return childrenRefs[childFocusedIndex].click();
        }
        return null;
    }

    focusMatchedItem(matchedItem) {
        const { childrenRefs } = this.state;
        const itemIndex = findItemIndex(childrenRefs, matchedItem);
        return this.focusChild(itemIndex);
    }

    findItemByKeyPressed(key) {
        const { childrenRefs, childFocusedIndex, matchedKeyPressed } = this.state;
        if (matchedKeyPressed) {
            const newChildrenRefs = childrenRefs.slice(childFocusedIndex + 1);
            const matchedItem = findItemByKey(key, newChildrenRefs);
            if (matchedItem) {
                return this.focusMatchedItem(matchedItem);
            }
            const newMatchedItem = findItemByKey(key, childrenRefs);
            if (newMatchedItem) this.focusChild(findItemIndex(childrenRefs, newMatchedItem));
            return null;
        }
        const newChildrenRefs = childrenRefs.slice(childFocusedIndex + 1);
        const matchedItem = findItemByKey(key, newChildrenRefs);
        if (matchedItem) {
            this.setState({ matchedKeyPressed: key });
            return this.focusMatchedItem(matchedItem);
        }
        return null;
    }

    handleKeyPressed(event) {
        const { isOpen } = this.state;
        if (isOpen) {
            if (event.keyCode !== TAB_KEY) event.preventDefault();
            const keyHandlerMap = {
                [DOWN_KEY]: this.handleKeyDownPressed,
                [UP_KEY]: this.handleKeyUpPressed,
                [ESCAPE_KEY]: this.handleKeyEscapePressed,
                [TAB_KEY]: this.toggleMenu,
                [ENTER_KEY]: this.handleKeyEnterPressed,
            };
            if (keyHandlerMap[event.keyCode]) {
                return keyHandlerMap[event.keyCode]();
            }
            return this.findItemByKeyPressed(event.key);
        }
        return null;
    }

    registerChild(childRef) {
        const { childrenRefs } = this.state;
        const [...nodes] = getChildMenuItemNodes(this.containerRef.current);
        const newChildrenRefs = insertChildOrderly(childrenRefs, childRef, nodes);
        this.setState({
            childrenRefs: newChildrenRefs,
        });
    }

    unregisterChild(childRef) {
        const { childrenRefs } = this.state;
        const newChildrenRefs = childrenRefs.filter(child => child !== childRef);
        this.setState({
            childrenRefs: newChildrenRefs,
        });
    }

    hoverChild(event, childRef) {
        return this.focusMatchedItem(childRef);
    }

    handleClick(event) {
        const isClickInsidePrimitiveMenu = this.containerRef.current.contains(event.target);
        if (isClickInsidePrimitiveMenu) {
            return null;
        }
        return this.closeMenu();
    }

    openMenu() {
        window.addEventListener('click', this.handleClick);
        window.addEventListener('touchstart', this.handleClick);
        setTimeout(() => this.focusChild(0), 0);
        return this.setState({
            isOpen: true,
        });
    }

    closeMenu() {
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('touchstart', this.handleClick);
        return this.setState({
            isOpen: false,
            childFocusedIndex: -1,
        });
    }

    toggleMenu() {
        const { isOpen } = this.state;
        if (isOpen) {
            return this.closeMenu();
        }
        return this.openMenu();
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.triggerRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.triggerRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.triggerRef.current.blur();
    }

    render() {
        const {
            style,
            title,
            assistiveText,
            isLoading,
            children,
            id,
            className,
            menuAlignment,
            menuSize,
            trigger: Trigger,
            ...rest
        } = this.props;
        const { context, isOpen } = this.state;
        const ariaLabel = title || assistiveText;

        return (
            <StyledContainer
                id={id}
                role="presentation"
                className={className}
                style={style}
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}
            >
                <Trigger
                    {...rest}
                    isOpen={isOpen}
                    title={title}
                    ariaExpanded={isOpen}
                    ariaHaspopup
                    assistiveText={assistiveText}
                    onClick={this.toggleMenu}
                    ref={this.triggerRef}
                />

                <StyledDropdown
                    data-id="primitive-menu_dropdown"
                    menuSize={menuSize}
                    menuAlignment={menuAlignment}
                    isLoading={isLoading}
                    isOpen={isOpen}
                >
                    <StyledContent role="menu" aria-label={ariaLabel}>
                        <MenuContent isLoading={isLoading}>
                            <Provider value={context}>{children}</Provider>
                        </MenuContent>
                    </StyledContent>
                </StyledDropdown>
            </StyledContainer>
        );
    }
}

PrimitiveMenu.propTypes = {
    /** The content of the PrimitiveMenu. Used to render the menuItem elements
     * when the PrimitiveMenu is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The size of the menu. Options include xx-small, x-small, medium, or large.
     * This value defaults to xx-small. */
    menuSize: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
    /** Determines the alignment of the menu relative to the trigger element.
     * Available options are: left, center, right, bottom, bottom-left, bottom-right.
     * This value defaults to left. */
    menuAlignment: PropTypes.oneOf([
        'left',
        'right',
        'bottom',
        'center',
        'bottom-right',
        'bottom-left',
    ]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The trigger element. */
    trigger: PropTypes.func.isRequired,
};

PrimitiveMenu.defaultProps = {
    children: null,
    menuSize: 'xx-small',
    menuAlignment: 'left',
    isLoading: false,
    title: undefined,
    assistiveText: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
};
