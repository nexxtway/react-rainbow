/* eslint-disable react/no-did-update-set-state, react/no-did-mount-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import RightElement from './rightElement';
import SelectedValue from './selectedValue';
import Options from './options';
import {
    isNavigationKey,
    getNormalizedOptions,
    getInitialFocusedIndex,
    isOptionVisible,
    isMenuOpen,
} from './helpers';
import { uniqueId } from '../../libs/utils';
import { UP_KEY, DOWN_KEY, ENTER_KEY, ESCAPE_KEY } from '../../libs/constants';
import withReduxForm from '../../libs/hocs/withReduxForm';
import SearchIcon from './icons/searchIcon';
import Label from '../Input/label';
import StyledInput from './styled/input';
import StyledContainer from './styled/container';
import StyledInputContainer from './styled/inputContainer';
import StyledSpinner from './styled/spinner';
import StyledOptionsMenu from './styled/optionsMenu';
import StyledTextError from '../Input/styled/errorText';
import isScrollPositionAtMenuBottom from './helpers/isScrollPositionAtMenuBottom';
import MenuArrowButton from './menuArrowButton';

const OPTION_HEIGHT = 48;
const visibleOptionsMap = {
    small: 3,
    medium: 5,
    large: 8,
};

/**
 * A Lookup is an autocomplete text input that will search against a database object,
 * it is enhanced by a panel of suggested options.
 * @category Form
 */
class Lookup extends Component {
    constructor(props) {
        super(props);
        const normalizedOptions = getNormalizedOptions(props.options || []);
        this.state = {
            searchValue: '',
            isOpen: false,
            isFocused: false,
            options: normalizedOptions,
            focusedItemIndex: getInitialFocusedIndex(
                normalizedOptions,
                props.preferredSelectedOption,
            ),
            showScrollUpArrow: undefined,
            showScrollDownArrow: undefined,
        };
        this.inputId = uniqueId('lookup-input');
        this.listboxId = uniqueId('lookup-listbox');
        this.errorMessageId = uniqueId('error-message');
        this.containerRef = React.createRef();
        this.inputRef = React.createRef();
        this.menuRef = React.createRef();
        this.handleSearch = this.handleSearch.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleRemoveValue = this.handleRemoveValue.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUpPressed = this.handleKeyUpPressed.bind(this);
        this.handleKeyDownPressed = this.handleKeyDownPressed.bind(this);
        this.handleKeyEnterPressed = this.handleKeyEnterPressed.bind(this);
        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed,
            [DOWN_KEY]: this.handleKeyDownPressed,
            [ENTER_KEY]: this.handleKeyEnterPressed,
        };
        this.handleScrollDownArrowHover = this.handleScrollDownArrowHover.bind(this);
        this.handleScrollUpArrowHover = this.handleScrollUpArrowHover.bind(this);
        this.stopArrowScoll = this.stopArrowScoll.bind(this);
        this.updateScrollingArrows = this.updateScrollingArrows.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            options: prevOptions,
            preferredSelectedOption: prevPreferredSelectedOption,
        } = prevProps;
        const { options, preferredSelectedOption } = this.props;
        if (prevOptions !== options) {
            const normalizedOptions = getNormalizedOptions(options);
            this.setState({
                options: normalizedOptions,
                focusedItemIndex: getInitialFocusedIndex(
                    normalizedOptions,
                    preferredSelectedOption,
                ),
                isOpen: this.isLookupOpen(),
            });
        }

        if (prevPreferredSelectedOption !== preferredSelectedOption) {
            const { options: currentOptions } = this.state;
            this.setState({
                focusedItemIndex: getInitialFocusedIndex(currentOptions, preferredSelectedOption),
                isOpen: this.isLookupOpen(),
            });
        }
        const { isOpen: wasOpen } = prevState;
        const { isOpen } = this.state;
        if (!wasOpen && isOpen && this.menuRef.current !== null) {
            this.updateScrollingArrows();
        }
    }

    getValue() {
        const { value } = this.props;
        if (typeof value === 'object' && !Array.isArray(value)) {
            return value;
        }
        return undefined;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    getAriaActivedescendant() {
        const { isFocused, focusedItemIndex } = this.state;
        const { options } = this.props;
        const isOpen = isMenuOpen(options, isFocused);
        if (isOpen) {
            return `lookup-item-${focusedItemIndex}`;
        }
        return undefined;
    }

    handleChange(value) {
        const { onChange } = this.props;
        setTimeout(() => this.containerRef.current.focus(), 0);
        this.setState({
            searchValue: '',
        });
        onChange(value);
    }

    handleSearch(event) {
        const { value } = event.target;
        this.setState({
            searchValue: value,
        });
        this.fireSearch(value);
    }

    handleFocus() {
        const { onFocus, value } = this.props;
        this.openMenu();
        const eventValue = value || null;
        onFocus(eventValue);
    }

    handleBlur() {
        const { onBlur, value } = this.props;
        this.closeMenu();
        const eventValue = value || null;
        onBlur(eventValue);
    }

    handleRemoveValue() {
        const { onChange, onSearch } = this.props;
        onChange(null);
        onSearch('');
        setTimeout(() => this.focus(), 0);
    }

    fireSearch(value) {
        const { onSearch, debounce } = this.props;
        if (debounce && value) {
            this.resetTimeout();
            this.timeout = setTimeout(() => {
                onSearch(value);
            }, 500);
        } else {
            this.resetTimeout();
            onSearch(value);
        }
    }

    clearInput() {
        const searchValue = '';
        this.setState({
            searchValue,
        });
        this.fireSearch(searchValue);
        setTimeout(() => this.focus(), 0);
    }

    resetTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    openMenu() {
        return this.setState({
            isFocused: true,
        });
    }

    closeMenu() {
        const { options } = this.state;
        const { preferredSelectedOption } = this.props;
        return this.setState({
            isFocused: false,
            isOpen: false,
            focusedItemIndex: getInitialFocusedIndex(options, preferredSelectedOption),
        });
    }

    isLookupOpen() {
        const { searchValue, isFocused } = this.state;
        const { options } = this.props;
        const isMenuEmpty =
            isFocused && !!searchValue && Array.isArray(options) && options.length === 0;
        const isOpen = isMenuOpen(options, isFocused);
        return isOpen || isMenuEmpty;
    }

    handleHover(index) {
        this.setState({
            focusedItemIndex: index,
        });
    }

    handleKeyDown(event) {
        const { searchValue } = this.state;
        const { keyCode } = event;
        if (keyCode === ESCAPE_KEY && !!searchValue) {
            event.stopPropagation();
        }
        if (isNavigationKey(keyCode) && this.isLookupOpen()) {
            event.preventDefault();
            event.stopPropagation();
            if (this.keyHandlerMap[keyCode]) {
                this.keyHandlerMap[keyCode]();
            }
        }
    }

    stopArrowScoll() {
        if (this.scrollingTimer) {
            clearTimeout(this.scrollingTimer);
        }
    }

    scrollTo(offset) {
        const menu = this.menuRef.current.getRef();
        menu.scrollTo(0, offset);
    }

    scrollBy(offset) {
        const menu = this.menuRef.current.getRef();
        menu.scrollBy(0, offset);
    }

    handleScrollUpArrowHover() {
        this.stopArrowScoll();

        const menu = this.menuRef.current.getRef();
        this.scrollingTimer = setTimeout(() => {
            if (menu.scrollTop > 0) {
                menu.scrollBy(0, -1);
                setTimeout(this.handleScrollUpArrowHover(), 5);
            } else {
                this.stopArrowScoll();
            }
        }, 5);
        this.updateScrollingArrows();
    }

    handleScrollDownArrowHover() {
        this.stopArrowScoll();

        const menu = this.menuRef.current.getRef();
        this.scrollingTimer = setTimeout(() => {
            if (!isScrollPositionAtMenuBottom(menu)) {
                menu.scrollBy(0, 1);
                setTimeout(this.handleScrollDownArrowHover(), 5);
            } else {
                this.stopArrowScoll();
            }
        }, 5);
        this.updateScrollingArrows();
    }

    updateScrollingArrows() {
        const menu = this.menuRef.current.getRef();
        const showScrollUpArrow = menu.scrollTop > 0;
        const showScrollDownArrow = !isScrollPositionAtMenuBottom(menu);
        this.setState({
            showScrollUpArrow,
            showScrollDownArrow,
        });
    }

    handleKeyUpPressed() {
        const { focusedItemIndex, options } = this.state;
        if (focusedItemIndex > 0) {
            const prevIndex = focusedItemIndex - 1;
            const prevFocusedIndex =
                options[prevIndex].type === 'header' ? focusedItemIndex - 2 : prevIndex;
            if (prevFocusedIndex >= 0) {
                this.setState({
                    focusedItemIndex: prevFocusedIndex,
                });
            }
            this.scrollUp(prevFocusedIndex);
        }
    }

    scrollUp(prevFocusedIndex) {
        const { options } = this.state;
        const { size } = this.props;
        const menu = this.menuRef.current.getRef();
        const prevIndex = prevFocusedIndex >= 0 ? prevFocusedIndex : 0;
        const prevFocusedOption = menu.childNodes[prevIndex];
        const visibleOptionsAmount = visibleOptionsMap[size] || visibleOptionsMap.medium;

        if (options.length > visibleOptionsAmount && !isOptionVisible(prevFocusedOption, menu)) {
            this.menuRef.current.scrollTo(OPTION_HEIGHT * prevIndex);
        }
    }

    handleKeyDownPressed() {
        const { focusedItemIndex, options } = this.state;
        const lastIndex = options.length - 1;
        if (focusedItemIndex < lastIndex) {
            const nextIndex = focusedItemIndex + 1;
            const nextFocusedIndex =
                options[nextIndex].type === 'header' ? focusedItemIndex + 2 : nextIndex;
            if (nextFocusedIndex <= lastIndex) {
                this.setState({
                    focusedItemIndex: nextFocusedIndex,
                });
                this.scrollDown(nextFocusedIndex);
            }
        }
    }

    scrollDown(nextFocusedIndex) {
        const { options } = this.state;
        const { size } = this.props;
        const menu = this.menuRef.current.getRef();
        const nextFocusedOption = menu.childNodes[nextFocusedIndex];
        const visibleOptionsAmount = visibleOptionsMap[size] || visibleOptionsMap.medium;

        if (options.length > visibleOptionsAmount && !isOptionVisible(nextFocusedOption, menu)) {
            this.menuRef.current.scrollTo(
                OPTION_HEIGHT * (nextFocusedIndex - (visibleOptionsAmount - 1)),
            );
        }
    }

    handleKeyEnterPressed() {
        const { onChange } = this.props;
        const { focusedItemIndex } = this.state;
        const { options } = this.state;
        const value = options[focusedItemIndex];
        this.containerRef.current.focus();
        this.setState({
            searchValue: '',
        });
        onChange(value);
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    render() {
        const {
            style,
            className,
            label,
            error,
            size,
            placeholder,
            disabled,
            readOnly,
            tabIndex,
            onClick,
            required,
            id,
            name,
            hideLabel,
            isLoading,
            icon,
        } = this.props;
        const { searchValue, focusedItemIndex, options } = this.state;
        const onDeleteValue = disabled || readOnly ? undefined : this.handleRemoveValue;
        const isLookupOpen = this.isLookupOpen();
        const errorMessageId = this.getErrorMessageId();
        const currentValue = this.getValue();
        const { showScrollUpArrow, showScrollDownArrow } = this.state;

        return (
            <StyledContainer
                id={id}
                className={className}
                style={style}
                role="presentation"
                onKeyDown={this.handleKeyDown}
                ref={this.containerRef}
                tabIndex={-1}
                onScroll={this.updateScrollingArrows}
            >
                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={readOnly}
                />

                <RenderIf isTrue={!!currentValue}>
                    <SelectedValue
                        id={this.inputId}
                        name={name}
                        value={currentValue}
                        tabIndex={tabIndex}
                        onClick={onClick}
                        disabled={disabled}
                        error={error}
                        required={required}
                        readOnly={readOnly}
                        errorMessageId={errorMessageId}
                        ref={this.inputRef}
                        onClearValue={onDeleteValue}
                    />
                </RenderIf>

                <RenderIf isTrue={!currentValue}>
                    <StyledInputContainer
                        aria-expanded={isLookupOpen}
                        aria-haspopup="listbox"
                        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                        role="combobox"
                    >
                        <StyledSpinner
                            isVisible={isLoading}
                            size="x-small"
                            assistiveText="searching"
                        />
                        <RightElement
                            showCloseButton={!!searchValue}
                            onClear={this.clearInput}
                            icon={icon}
                            error={error}
                        />
                        <StyledInput
                            id={this.inputId}
                            name={name}
                            type="search"
                            value={searchValue}
                            placeholder={placeholder}
                            onChange={this.handleSearch}
                            tabIndex={tabIndex}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onClick={onClick}
                            disabled={disabled}
                            readOnly={readOnly}
                            required={required}
                            autoComplete="off"
                            aria-describedby={errorMessageId}
                            aria-autocomplete="list"
                            aria-controls={this.listboxId}
                            aria-activedescendant={this.getAriaActivedescendant()}
                            ref={this.inputRef}
                            iconPosition="right"
                            icon={icon}
                            error={error}
                            isLoading={isLoading}
                        />
                        <RenderIf isTrue={isLookupOpen}>
                            <StyledOptionsMenu id={this.listboxId} role="listbox">
                                <RenderIf isTrue={showScrollUpArrow}>
                                    <MenuArrowButton
                                        arrow="up"
                                        onMouseEnter={this.handleScrollUpArrowHover}
                                        onMouseLeave={this.stopArrowScoll}
                                    />
                                </RenderIf>
                                <Options
                                    items={options}
                                    value={searchValue}
                                    onSelectOption={this.handleChange}
                                    focusedItemIndex={focusedItemIndex}
                                    onHoverOption={this.handleHover}
                                    itemHeight={OPTION_HEIGHT}
                                    ref={this.menuRef}
                                    size={size}
                                />
                                <RenderIf isTrue={showScrollDownArrow}>
                                    <MenuArrowButton
                                        arrow="down"
                                        onMouseEnter={this.handleScrollDownArrowHover}
                                        onMouseLeave={this.stopArrowScoll}
                                    />
                                </RenderIf>
                            </StyledOptionsMenu>
                        </RenderIf>
                    </StyledInputContainer>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <StyledTextError id={errorMessageId}>{error}</StyledTextError>
                </RenderIf>
            </StyledContainer>
        );
    }
}

Lookup.propTypes = {
    /** Text label for the Lookup. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the Lookup label. */
    hideLabel: PropTypes.bool,
    /** Specifies the selected value of the Lookup. */
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            icon: PropTypes.node,
        }),
        PropTypes.string,
    ]),
    /** An array of matched options to show in a menu. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            icon: PropTypes.node,
        }),
    ),
    /** The name of the Lookup. */
    name: PropTypes.string,
    /** If set to true the onSearch event is sent when the customer finish typing. */
    debounce: PropTypes.bool,
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that the Lookup must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the Lookup must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the Lookup element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that the Lookup is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The icon that appears in the Lookup when the input search is empty.
     * If not passed by default a search icon will be showed. */
    icon: PropTypes.node,
    /** The size of the Lookup menu. Options include small, medium, or large.
     * This value defaults to medium. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered for every key stroke when the customer is typing in the input.
     * It sent the value/query of the input. This value is normally used for filter/search
     * for more options. */
    onSearch: PropTypes.func,
    /**  The action triggered when click/select an option. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The index of the option that is visual-focus initially */
    preferredSelectedOption: PropTypes.number,
};

Lookup.defaultProps = {
    label: undefined,
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    icon: <SearchIcon />,
    size: 'medium',
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
    isLoading: false,
    options: undefined,
    onSearch: () => {},
    debounce: false,
    preferredSelectedOption: 0,
};

export default withReduxForm(Lookup);
