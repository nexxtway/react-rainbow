import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import { UP_KEY, DOWN_KEY, ESCAPE_KEY, TAB_KEY, SPACE_KEY, ENTER_KEY } from '../../libs/constants';
import { Provider } from './context';
import MenuContent from './menuContent';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import { uniqueId } from '../../libs/utils';
import Label from '../Input/label';
import MenuArrowButton from './menuArrowButton';
import getNormalizeValue from './helpers/getNormalizeValue';
import getSelectedOptionName from './helpers/getSelectedOptionName';
import isChildRegistered from './helpers/isChildRegistered';
import isOptionVisible from './helpers/isOptionVisible';
import shouldOpenMenu from './helpers/shouldOpenMenu';
import calculateScrollOffset from './helpers/calculateScrollOffset';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';
import StyledInput from './styled/input';
import StyledContainer from './styled/container';
import StyledInnerContainer from './styled/innerContainer';
import StyledIcon from './styled/icon';
import StyledError from '../Input/styled/errorText';
import StyledIndicator from './styled/indicator';
import StyledDropdown from './styled/dropdown';
import StyledUl from './styled/ul';

const sizeMap = {
    medium: 227,
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
        this.listboxId = uniqueId('listbox');
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

        this.activeChildren = [];

        this.state = {
            isOpen: false,
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

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    getAriaActivedescendant() {
        const { activeOptionName } = this.state;
        const { value } = this.props;
        return activeOptionName || getSelectedOptionName(value);
    }

    handleKeyUpPressed() {
        const { activeOptionIndex } = this.state;
        const nextActiveIndex =
            (this.activeChildren.length + activeOptionIndex - 1) % this.activeChildren.length;

        if (nextActiveIndex < activeOptionIndex) {
            if (nextActiveIndex === 0) {
                this.scrollTo(0);
            } else {
                this.scrollToOption(nextActiveIndex);
            }
            this.setState({
                activeOptionIndex: nextActiveIndex,
                activeOptionName: this.activeChildren[nextActiveIndex].name,
            });
        }
    }

    handleKeyDownPressed() {
        const { activeOptionIndex } = this.state;
        const nextActiveIndex = (activeOptionIndex + 1) % this.activeChildren.length;
        if (nextActiveIndex > 0) {
            this.scrollToOption(nextActiveIndex);
            this.setState({
                activeOptionIndex: nextActiveIndex,
                activeOptionName: this.activeChildren[nextActiveIndex].name,
            });
        }
    }

    handleKeyEnterPressed() {
        const { onChange } = this.props;
        const { activeOptionIndex } = this.state;
        const { label, name, icon, value } = this.activeChildren[activeOptionIndex];
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
        if (isChildRegistered(childRef, this.activeChildren)) return;
        const [...nodes] = getChildMenuItemNodes(this.containerRef.current);
        this.activeChildren = insertChildOrderly(
            this.activeChildren,
            {
                ref: childRef,
                ...childProps,
            },
            nodes,
        );
    }

    unregisterChild(childRef) {
        if (!isChildRegistered(childRef, this.activeChildren)) return;
        this.activeChildren = this.activeChildren.filter(child => child.ref !== childRef);
    }

    hoverChild(event, name) {
        this.setState({
            activeOptionName: name,
            activeOptionIndex: this.activeChildren.findIndex(child => child.name === name),
        });
    }

    openMenu() {
        const firstOptionIndex = this.activeChildren.length > 0 ? 0 : -1;
        const firstOptionName = this.activeChildren.length > 0 ? this.activeChildren[0].name : null;

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
        const { activeOptionIndex } = this.state;
        const currentFocusedOptionRef = this.activeChildren[activeOptionIndex].ref;
        const nextFocusedOptionRef = this.activeChildren[nextFocusedIndex].ref;
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
            className,
            variant,
            error,
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
        const { label: valueLabel, icon } = getNormalizeValue(valueInProps);
        const value = valueLabel || '';
        const errorMessageId = this.getErrorMessageId();

        const menuContainerStyles = {
            maxHeight: this.getMenuMaxHeight(),
        };

        const { showScrollUpArrow, showScrollDownArrow, isOpen } = this.state;
        return (
            <StyledContainer
                id={id}
                role="presentation"
                className={className}
                style={style}
                onKeyDown={this.handleKeyPressed}
                ref={this.containerRef}
                readOnly={readOnly}
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

                <StyledInnerContainer
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                    role="combobox"
                >
                    <RenderIf isTrue={!!icon}>
                        <StyledIcon error={error}>{icon}</StyledIcon>
                    </RenderIf>
                    <RenderIf isTrue={!readOnly}>
                        <StyledIndicator error={error} disabled={disabled} />
                    </RenderIf>
                    <StyledInput
                        aria-controls={this.listboxId}
                        id={this.inputId}
                        type="text"
                        name={name}
                        value={value}
                        error={error}
                        onClick={this.handleInputClick}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        placeholder={placeholder}
                        tabIndex={tabIndex}
                        readOnly
                        isReadOnly={readOnly}
                        disabled={disabled}
                        required={required}
                        aria-describedby={errorMessageId}
                        autoComplete="off"
                        ref={this.triggerRef}
                        aria-activedescendant={this.getAriaActivedescendant()}
                        icon={icon}
                        iconPosition="left"
                        variant={variant}
                    />
                    <StyledDropdown
                        id={this.listboxId}
                        role="listbox"
                        isVisible={isOpen && !readOnly}
                        isLoading={isLoading}
                    >
                        <RenderIf isTrue={showScrollUpArrow}>
                            <MenuArrowButton
                                arrow="up"
                                onMouseEnter={this.handleScrollUpArrowHover}
                                onMouseLeave={this.stopArrowScoll}
                            />
                        </RenderIf>
                        <StyledUl
                            role="presentation"
                            onScroll={this.updateScrollingArrows}
                            ref={this.menuRef}
                            style={menuContainerStyles}
                        >
                            <MenuContent isLoading={isLoading}>
                                <Provider value={this.getContext()}>{children}</Provider>
                            </MenuContent>
                        </StyledUl>
                        <RenderIf isTrue={showScrollDownArrow}>
                            <MenuArrowButton
                                arrow="down"
                                onMouseEnter={this.handleScrollDownArrowHover}
                                onMouseLeave={this.stopArrowScoll}
                            />
                        </RenderIf>
                    </StyledDropdown>
                </StyledInnerContainer>
                <RenderIf isTrue={!!error}>
                    <StyledError id={errorMessageId}>{error}</StyledError>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Picklist.propTypes = {
    /** Text label for the PickList. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the PickList label. */
    hideLabel: PropTypes.bool,
    /** The content of the Picklist. Used to render the options
     * when the Picklist is open. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Specifies the selected value of the Picklist. */
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            icon: PropTypes.node,
            value: PropTypes.any,
        }),
        PropTypes.string,
    ]),
    /**  The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    /** The variant changes the appearance of the Picklist. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
};

Picklist.defaultProps = {
    label: undefined,
    children: null,
    isLoading: false,
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
    variant: 'default',
};

export default withReduxForm(Picklist);
export { Picklist as Component };
