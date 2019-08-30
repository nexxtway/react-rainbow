import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, ESCAPE_KEY, TAB_KEY, SPACE_KEY, ENTER_KEY } from '../../libs/constants';
import { Provider } from './context';
import MenuContent from './menuContent';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import Label from './label';
import './styles.css';
import { uniqueId } from '../../libs/utils';
import MenuArrowButton from './menuArrowButton';
import getNormalizeValue from './helpers/getNormalizeValue';
import isChildRegistered from './helpers/isChildRegistered';
import isOptionVisible from './helpers/isOptionVisible';
import shouldOpenMenu from './helpers/shouldOpenMenu';
import calculateScrollOffset from './helpers/calculateScrollOffset';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';

const sizeMap = {
    medium: 230,
};

/**
 * A Picklist provides a user with an read-only input field that is accompanied with
 *  a listbox of pre-defined options.
 * @category Form
 */
class Picklist extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('picklist-input');
        this.errorMessageId = uniqueId('error-message');
        this.containerRef = React.createRef();
        this.triggerRef = React.createRef();
        this.menuRef = React.createRef();
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.hoverChild = this.hoverChild.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleScrollUpArrowHover = this.handleScrollUpArrowHover.bind(this);
        this.handleScrollDownArrowHover = this.handleScrollDownArrowHover.bind(this);
        this.updateScrollingArrows = this.updateScrollingArrows.bind(this);
        this.stopArrowScoll = this.stopArrowScoll.bind(this);

        this.registerChild = this.registerChild.bind(this);
        this.unregisterChild = this.unregisterChild.bind(this);

        this.state = {
            isOpen: false,
            activeChildren: [],
            activeOptionIndex: -1,
            activeOptionName: null,
            showScrollUpArrow: undefined,
            showScrollDownArrow: undefined,
        };

        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed.bind(this),
            [DOWN_KEY]: this.handleKeyDownPressed.bind(this),
            [ESCAPE_KEY]: this.closeMenu.bind(this),
            [TAB_KEY]: this.closeMenu.bind(this),
            [ENTER_KEY]: this.handleKeyEnterPressed.bind(this),
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { isOpen: wasOpen } = prevState;
        const { isOpen } = this.state;
        if (!wasOpen && isOpen) {
            this.scrollTo(0);
            this.updateScrollingArrows();
        }
    }

    getContainerClassNames() {
        const { isOpen } = this.state;
        const { className, readOnly, error } = this.props;

        return classnames(
            'rainbow-picklist',
            {
                'rainbow-picklist--error': error,
                'rainbow-picklist--readonly': readOnly,
                'rainbow-picklist--open': isOpen && !readOnly,
            },
            className,
        );
    }

    getContext() {
        const { activeOptionName } = this.state;
        const { value } = this.props;
        const { name } = getNormalizeValue(value);
        return {
            privateOnClick: this.handleOptionClick,
            privateRegisterChild: this.registerChild,
            privateUnregisterChild: this.unregisterChild,
            privateOnHover: this.hoverChild,
            activeOptionName,
            currentValueName: name,
        };
    }

    // eslint-disable-next-line class-methods-use-this
    getMenuMaxHeight() {
        return sizeMap.medium;
    }

    getInputClassNames() {
        const { value } = this.props;
        const { icon } = getNormalizeValue(value);
        return classnames('rainbow-picklist_input', {
            'rainbow-picklist_input--icon': !!icon,
        });
    }

    getIndicatorClassNames() {
        const { disabled } = this.props;
        return classnames('rainbow-picklist_input-dropdown-indicator', {
            'rainbow-picklist_input-dropdown-indicator--disabled': disabled,
        });
    }

    getDropdownClassNames() {
        const { isLoading } = this.props;
        return classnames('rainbow-picklist_dropdown', {
            'rainbow-picklist_dropdown--loading-box': isLoading,
        });
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    handleKeyUpPressed() {
        const { activeChildren, activeOptionIndex } = this.state;
        const nextActiveIndex =
            (activeChildren.length + activeOptionIndex - 1) % activeChildren.length;

        if (nextActiveIndex < activeOptionIndex) {
            if (nextActiveIndex === 0) {
                this.scrollTo(0);
            } else {
                this.scrollToOption(nextActiveIndex);
            }
            this.setState({
                activeOptionIndex: nextActiveIndex,
                activeOptionName: activeChildren[nextActiveIndex].name,
            });
        }
    }

    handleKeyDownPressed() {
        const { activeChildren, activeOptionIndex } = this.state;
        const nextActiveIndex = (activeOptionIndex + 1) % activeChildren.length;
        if (nextActiveIndex > 0) {
            this.scrollToOption(nextActiveIndex);
            this.setState({
                activeOptionIndex: nextActiveIndex,
                activeOptionName: activeChildren[nextActiveIndex].name,
            });
        }
    }

    handleKeyEnterPressed() {
        const { onChange } = this.props;
        const { activeChildren, activeOptionIndex } = this.state;
        const { label, name, icon, value } = activeChildren[activeOptionIndex];
        this.closeMenu();
        return onChange({
            label,
            name,
            icon,
            value,
        });
    }

    handleKeyPressed(event) {
        const { isOpen } = this.state;
        if (isOpen) {
            if ([UP_KEY, DOWN_KEY, SPACE_KEY].includes(event.keyCode)) event.preventDefault();
            if (this.keyHandlerMap[event.keyCode]) {
                return this.keyHandlerMap[event.keyCode]();
            }
        } else if (shouldOpenMenu(event.keyCode)) {
            event.preventDefault();
            this.openMenu();
        }
        return null;
    }

    registerChild(childRef, childProps) {
        const { activeChildren } = this.state;

        if (isChildRegistered(childRef, activeChildren)) return;
        const [...nodes] = getChildMenuItemNodes(this.containerRef.current);
        const newActiveChildren = insertChildOrderly(
            activeChildren,
            {
                ref: childRef,
                ...childProps,
            },
            nodes,
        );
        this.setState({
            activeChildren: newActiveChildren,
        });
    }

    unregisterChild(childRef) {
        const { activeChildren } = this.state;
        if (!isChildRegistered(childRef, activeChildren)) return;
        const newActiveChildren = activeChildren.filter(child => child.ref !== childRef);
        this.setState({
            activeChildren: newActiveChildren,
        });
    }

    hoverChild(event, name) {
        const { activeChildren } = this.state;
        this.setState({
            activeOptionName: name,
            activeOptionIndex: activeChildren.findIndex(child => child.name === name),
        });
    }

    openMenu() {
        const { activeChildren } = this.state;
        const firstOptionIndex = activeChildren.length > 0 ? 0 : -1;
        const firstOptionName = activeChildren.length > 0 ? activeChildren[0].name : null;

        return this.setState({
            isOpen: true,
            activeOptionIndex: firstOptionIndex,
            activeOptionName: firstOptionName,
        });
    }

    closeMenu() {
        return this.setState({
            isOpen: false,
            activeOptionIndex: -1,
            activeOptionName: null,
        });
    }

    handleInputClick(event) {
        const { onClick } = this.props;
        const { isOpen } = this.state;
        onClick(event);
        if (isOpen) {
            return this.closeMenu();
        }
        return this.openMenu();
    }

    handleFocus() {
        const { onFocus, value } = this.props;
        const eventValue = value || null;
        onFocus(eventValue);
    }

    handleBlur() {
        const { onBlur, value } = this.props;
        this.closeMenu();
        const eventValue = value || null;
        onBlur(eventValue);
    }

    handleOptionClick(event, option) {
        const { onChange } = this.props;
        return onChange(option);
    }

    scrollToOption(nextFocusedIndex) {
        const { activeChildren, activeOptionIndex } = this.state;
        const currentFocusedOptionRef = activeChildren[activeOptionIndex].ref;
        const nextFocusedOptionRef = activeChildren[nextFocusedIndex].ref;
        if (!isOptionVisible(nextFocusedOptionRef, this.menuRef.current)) {
            const amount = calculateScrollOffset(
                currentFocusedOptionRef.offsetTop,
                nextFocusedOptionRef.offsetTop,
            );
            this.scrollBy(amount);
        }
    }

    scrollTo(offset) {
        this.menuRef.current.scrollTo(0, offset);
    }

    scrollBy(offset) {
        this.menuRef.current.scrollBy(0, offset);
    }

    updateScrollingArrows() {
        const menu = this.menuRef.current;
        const showScrollUpArrow = menu.scrollTop > 0;
        const showScrollDownArrow = !isScrollPositionAtMenuBottom(menu);
        this.setState({
            showScrollUpArrow,
            showScrollDownArrow,
        });
    }

    handleScrollUpArrowHover() {
        this.stopArrowScoll();

        const menu = this.menuRef.current;
        this.scrollingTimer = setInterval(() => {
            if (menu.scrollTop > 0) {
                menu.scrollBy(0, -1);
            } else {
                this.stopArrowScoll();
            }
        }, 5);
    }

    handleScrollDownArrowHover() {
        this.stopArrowScoll();

        const menu = this.menuRef.current;
        this.scrollingTimer = setInterval(() => {
            if (!isScrollPositionAtMenuBottom(menu)) {
                menu.scrollBy(0, 1);
            } else {
                this.stopArrowScoll();
            }
        }, 5);
    }

    stopArrowScoll() {
        if (this.scrollingTimer) clearInterval(this.scrollingTimer);
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
            label: pickListLabel,
            hideLabel,
            style,
            error,
            title,
            assistiveText,
            isLoading,
            disabled,
            readOnly,
            required,
            children,
            id,
            tabIndex,
            placeholder,
            name,
            value: valueInProps,
        } = this.props;
        const ariaLabel = title || assistiveText;
        const { label: valueLabel, icon } = getNormalizeValue(valueInProps);
        const value = valueLabel || '';
        const errorMessageId = this.getErrorMessageId();

        const menuContainerStyles = {
            maxHeight: this.getMenuMaxHeight(),
        };

        const { showScrollUpArrow, showScrollDownArrow } = this.state;
        return (
            <div
                id={id}
                role="presentation"
                className={this.getContainerClassNames()}
                style={style}
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}
            >
                <RenderIf isTrue={!!pickListLabel}>
                    <Label
                        label={pickListLabel}
                        hideLabel={hideLabel}
                        required={required}
                        inputId={this.inputId}
                        readOnly={readOnly}
                    />
                </RenderIf>

                <div className="rainbow-picklist_inner-container">
                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-picklist_icon">{icon}</span>
                    </RenderIf>
                    <RenderIf isTrue={!readOnly}>
                        <span className={this.getIndicatorClassNames()} />
                    </RenderIf>
                    <input
                        className={this.getInputClassNames()}
                        id={this.inputId}
                        type="text"
                        name={name}
                        value={value}
                        onClick={this.handleInputClick}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        placeholder={placeholder}
                        tabIndex={tabIndex}
                        readOnly
                        disabled={disabled}
                        required={required}
                        aria-describedby={errorMessageId}
                        autoComplete="off"
                        ref={this.triggerRef}
                    />
                    <div role="listbox" className={this.getDropdownClassNames()}>
                        <RenderIf isTrue={showScrollUpArrow}>
                            <MenuArrowButton
                                arrow="up"
                                onMouseEnter={this.handleScrollUpArrowHover}
                                onMouseLeave={this.stopArrowScoll}
                            />
                        </RenderIf>
                        <ul
                            role="presentation"
                            onScroll={this.updateScrollingArrows}
                            aria-label={ariaLabel}
                            ref={this.menuRef}
                            style={menuContainerStyles}
                        >
                            <MenuContent isLoading={isLoading}>
                                <Provider value={this.getContext()}>{children}</Provider>
                            </MenuContent>
                        </ul>
                        <RenderIf isTrue={showScrollDownArrow}>
                            <MenuArrowButton
                                arrow="down"
                                onMouseEnter={this.handleScrollDownArrowHover}
                                onMouseLeave={this.stopArrowScoll}
                            />
                        </RenderIf>
                    </div>
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={errorMessageId} className="rainbow-picklist_input-error">
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

Picklist.propTypes = {
    /** Text label for the PickList. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the PickList label. */
    hideLabel: PropTypes.bool,
    /** The content of the Picklist. Used to render the options
     * when the Picklist is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** Specifies the selected value of the Picklist. */
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    /**  The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The name of the Picklist. */
    name: PropTypes.string,
    /** Specifies that the Picklist must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an option must be selected before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the Picklist element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that the Picklist is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Picklist.defaultProps = {
    children: null,
    isLoading: false,
    title: undefined,
    assistiveText: undefined,
    value: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
    placeholder: undefined,
    name: undefined,
    hideLabel: false,
    id: undefined,
    error: null,
    disabled: false,
    readOnly: false,
    required: false,
    className: undefined,
    style: undefined,
};

export default withReduxForm(Picklist);
