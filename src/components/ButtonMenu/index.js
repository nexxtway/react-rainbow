import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from './../Button';
import MenuContent from './menuContent';
import { Provider } from './context';
import {
    findItemByKey,
    findItemIndex,
    insertChildOrderly,
    getChildMenuItemNodes,
} from './utils';
import {
    UP_KEY,
    DOWN_KEY,
    ESCAPE_KEY,
    TAB_KEY,
    ENTER_KEY,
} from './../../libs/constants';
import './styles.css';

/**
 * A Button Menu offers a list of actions or functions that a user can access.
 */
export default class ButtonMenu extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.buttonRef = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleKeyDownPressed = this.handleKeyDownPressed.bind(this);
        this.handleKeyUpPressed = this.handleKeyUpPressed.bind(this);
        this.handleKeyEscapePressed = this.handleKeyEscapePressed.bind(this);
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

    getContainerClassNames() {
        const { isOpen } = this.state;
        const { className } = this.props;

        return classnames('rainbow-button-menu', {
            'rainbow-button-menu_is-open': isOpen,
        }, className);
    }

    getDropdownClassNames() {
        const { menuAlignment, menuSize, isLoading } = this.props;
        return classnames(
            'rainbow-button-menu-dropdown',
            `rainbow-button-menu-dropdown_${menuAlignment}`,
            `rainbow-button-menu-dropdown_${menuSize}`,
            { 'rainbow-button-menu-dropdown_loading-box': isLoading },
        );
    }

    focusChild(index) {
        const { isLoading } = this.props;
        const { childrenRefs } = this.state;

        if (isLoading) {
            return null;
        }
        this.setState({ childFocusedIndex: index });
        return childrenRefs[index].focus();
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

    handleKeyEscapePressed() {
        this.toggleMenu();
        return this.buttonRef.current.focus();
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
        const isClickInsideButtonMenu = this.containerRef.current.contains(event.target);
        if (isClickInsideButtonMenu) {
            return null;
        }
        return this.closeMenu();
    }

    openMenu() {
        window.addEventListener('click', this.handleClick);
        setTimeout(() => this.focusChild(0), 0);
        return this.setState({
            isOpen: true,
        });
    }

    closeMenu() {
        window.removeEventListener('click', this.handleClick);
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
        this.buttonRef.current.focus();
    }

    /**
    * Sets click on the element.
    * @public
    */
    click() {
        this.buttonRef.current.click();
    }

    /**
    * Sets blur on the element.
    * @public
    */
    blur() {
        this.buttonRef.current.blur();
    }

    render() {
        const {
            style,
            title,
            assistiveText,
            buttonVariant,
            buttonShaded,
            disabled,
            tabIndex,
            label,
            onFocus,
            onBlur,
            isLoading,
            children,
        } = this.props;
        const { context } = this.state;
        const ariaLabel = title || assistiveText;

        return (
            <div
                role="presentation"
                className={this.getContainerClassNames()}
                style={style}
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}>

                <Button
                    data-id="button-menu-icon"
                    disabled={disabled}
                    tabIndex={tabIndex}
                    label={label}
                    variant={buttonVariant}
                    shaded={buttonShaded}
                    ariaHaspopup
                    title={title}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={this.toggleMenu}
                    ref={this.buttonRef} />

                <div className={this.getDropdownClassNames()}>
                    <ul role="menu" aria-label={ariaLabel}>
                        <MenuContent isLoading={isLoading}>
                            <Provider value={context}>
                                {children}
                            </Provider>
                        </MenuContent>
                    </ul>
                </div>
            </div>
        );
    }
}

ButtonMenu.propTypes = {
    /** The text to be displayed inside the button. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** The variant changes the look of the button. Accepted variants include base, container,
    * brand, border, border-filled, bare-inverse, and inverse.
    * This value defaults to border-filled. */
    buttonVariant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
    ]),
    /** Specify true when the button has a shadow around it.
    * This value defaults to false.
    * Only neutral, brand, destructive and success variant can be shaded. */
    buttonShaded: PropTypes.bool,
    /** The size of the menu. Options include xx-small, x-small, medium, or large.
    * This value defaults to small. */
    menuSize: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** Determines the alignment of the menu relative to the button.
    * Available options are: left, center, right, bottom-left, bottom-center, bottom-right.
    * This value defaults to left. */
    menuAlignment: PropTypes.oneOf([
        'left', 'right', 'bottom',
    ]),
    /** If true, the menu is disabled. Disabling the menu prevents users from opening it.
    * This value defaults to false. */
    disabled: PropTypes.bool,
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.number,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**
    * This prop that should not be visible in the documentation.
    * @ignore
    */
    children: PropTypes.node,
};

ButtonMenu.defaultProps = {
    buttonVariant: 'base',
    buttonShaded: false,
    menuSize: 'xx-small',
    menuAlignment: 'left',
    disabled: false,
    isLoading: false,
    tabIndex: undefined,
    title: undefined,
    assistiveText: undefined,
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    children: null,
};
