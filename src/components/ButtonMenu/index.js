import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonIcon from './../ButtonIcon';
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
} from './../../constants';

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
            },
        };
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        const { className } = this.props;

        return classnames('slds-dropdown-trigger slds-dropdown-trigger_click', {
            'slds-is-open': isOpen,
        }, className);
    }

    getDropdownClassNames() {
        const { menuAlignment, menuSize, isLoading } = this.props;
        return classnames(
            'slds-dropdown',
            `slds-dropdown_${menuAlignment}`,
            `slds-dropdown_${menuSize}`,
            { 'slds-icon_large': isLoading },
        );
    }

    focusChild(index) {
        const { childrenRefs } = this.state;
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
        const matchedItem = findItemByKey(key, childrenRefs);
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

    handleClick(event) {
        const isClickInsideButtonMenu = this.containerRef.current.contains(event.target);
        if (isClickInsideButtonMenu) {
            return null;
        }
        return this.closeMenu();
    }

    openMenu() {
        window.addEventListener('click', this.handleClick);
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

    render() {
        const {
            style,
            title,
            assistiveText,
            iconName,
            buttonVariant,
            buttonSize,
            disabled,
            tabIndex,
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

                <ButtonIcon
                    disabled={disabled}
                    tabIndex={tabIndex}
                    variant={buttonVariant}
                    size={buttonSize}
                    ariaHaspopup
                    title={title}
                    assistiveText={assistiveText}
                    iconName={iconName}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={this.toggleMenu}
                    ref={this.buttonRef} />

                <div className={this.getDropdownClassNames()}>
                    <ul className="slds-dropdown__list" role="menu" aria-label={ariaLabel}>
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
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    assistiveText: PropTypes.string,
    iconName: PropTypes.string,
    menuAlignment: PropTypes.oneOf([
        'left', 'right', 'bottom',
    ]),
    menuSize: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    /** The variant for the button with predefined styles. */
    buttonVariant: PropTypes.oneOf([
        'base',
        'border-filled',
        'border-inverse',
        'border',
        'brand',
        'inverse',
        'container',
    ]),
    /** The button icon size. */
    buttonSize: PropTypes.oneOf([
        'xx-small',
        'x-small',
        'small',
        'medium',
        'large',
    ]),
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    tabIndex: PropTypes.number,
};

ButtonMenu.defaultProps = {
    className: '',
    style: {},
    title: undefined,
    assistiveText: undefined,
    iconName: 'utility:down',
    menuAlignment: 'left',
    menuSize: 'xx-small',
    buttonVariant: 'border-filled',
    buttonSize: 'medium',
    disabled: false,
    isLoading: false,
    children: null,
    onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
};
