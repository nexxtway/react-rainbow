/* eslint-disable react/no-did-update-set-state, react/no-did-mount-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import Spinner from '../Spinner';
import Label from './label';
import RightElement from './rightElement';
import Options from './options';
import {
    isNavigationKey,
    getNormalizedOptions,
    getInitialFocusedIndex,
    isOptionVisible,
} from './helpers';
import { uniqueId } from '../../libs/utils';
import { UP_KEY, DOWN_KEY, ENTER_KEY, ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import withReduxForm from '../../libs/hocs/withReduxForm';
import SearchIcon from './icons/searchIcon';
import './styles.css';
import LeftElement from './leftElement';

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
            isFocused: false,
            options: normalizedOptions,
            focusedItemIndex: getInitialFocusedIndex(normalizedOptions),
        };
        this.inputId = uniqueId('lookup-input');
        this.errorMessageId = uniqueId('error-message');
        this.containerRef = React.createRef();
        this.innerContainerRef = React.createRef();
        this.inputRef = React.createRef();
        this.menuRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleRemoveValue = this.handleRemoveValue.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUpPressed = this.handleKeyUpPressed.bind(this);
        this.handleKeyDownPressed = this.handleKeyDownPressed.bind(this);
        this.handleKeyEnterPressed = this.handleKeyEnterPressed.bind(this);
        this.handleKeyTabPressed = this.handleKeyTabPressed.bind(this);

        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed,
            [DOWN_KEY]: this.handleKeyDownPressed,
            [ENTER_KEY]: this.handleKeyEnterPressed,
            [TAB_KEY]: this.handleKeyTabPressed,
        };
    }

    componentDidUpdate(prevProps) {
        const { options: prevOptions } = prevProps;
        const { options } = this.props;
        if (prevOptions !== options) {
            const normalizedOptions = getNormalizedOptions(options);
            this.setState({
                options: normalizedOptions,
                focusedItemIndex: getInitialFocusedIndex(normalizedOptions),
            });
        }
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames(
            'rainbow-lookup_container',
            {
                'rainbow-lookup_container--error': error,
            },
            className,
        );
    }

    getInputClassNames() {
        const { value } = this.props;
        const { isLoading } = this.props;
        return classnames('rainbow-lookup_input', {
            'rainbow-lookup_input--loading': isLoading,
            'rainbow-lookup_input--value': !!value,
            'rainbow-lookup_input--value-w-icon': !!value && !!value.icon,
        });
    }

    getValue() {
        const { value } = this.props;
        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            return typeof value === 'string'
                ? { valueIcon: null, inputValue: value }
                : { valueIcon: value.icon, inputValue: value.label };
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

    clearInput() {
        const searchValue = '';
        this.setState({
            searchValue,
        });
        this.fireSearch(searchValue);
        setTimeout(() => this.focus(), 0);
    }

    handleChange(value) {
        const { onChange } = this.props;
        this.setState({
            searchValue: '',
        });
        onChange(value);
        this.focus();
    }

    handleClick(event) {
        const ref = this.innerContainerRef.current;
        const isClickInsideLookup = ref && ref.contains(event.target);
        if (isClickInsideLookup) {
            return null;
        }
        return this.closeMenu();
    }

    handleBlur() {
        const { onBlur, value } = this.props;
        const eventValue = value || null;
        onBlur(eventValue);
    }

    handleFocus() {
        const { onFocus, value } = this.props;
        this.openMenu();
        const eventValue = value || null;
        onFocus(eventValue);
        setTimeout(() => {
            const textSize = this.inputRef.current.value.length;
            this.inputRef.current.setSelectionRange(textSize, textSize);
        }, 0);
    }

    handleHover(index) {
        this.setState({
            focusedItemIndex: index,
        });
    }

    handleRemoveValue() {
        const { onChange, onSearch } = this.props;
        onChange(null);
        onSearch('');
        setTimeout(() => this.focus(), 0);
    }

    handleSearch(event) {
        const { value } = event.target;
        this.setState({
            searchValue: value,
        });
        this.fireSearch(value);
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

    resetTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    openMenu() {
        window.addEventListener('click', this.handleClick);
        window.addEventListener('touchstart', this.handleClick);
        return this.setState({
            isFocused: true,
        });
    }

    closeMenu() {
        const { options } = this.state;
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('touchstart', this.handleClick);
        return this.setState({
            isFocused: false,
            focusedItemIndex: getInitialFocusedIndex(options),
        });
    }

    isMenuOpen() {
        const { searchValue, isFocused } = this.state;
        const { value, options } = this.props;
        const isValueEmpty = !value;
        const isMenuEmpty =
            isFocused && !!searchValue && Array.isArray(options) && options.length === 0;
        const isOpen = isFocused && Array.isArray(options) && !!options.length && isValueEmpty;
        return isOpen || isMenuEmpty;
    }

    handleKeyDown(event) {
        const { searchValue } = this.state;
        const { keyCode } = event;
        if (keyCode === ESCAPE_KEY && !!searchValue) {
            event.stopPropagation();
        }
        if (isNavigationKey(keyCode) && this.isMenuOpen()) {
            event.preventDefault();
            event.stopPropagation();
            if (this.keyHandlerMap[keyCode]) {
                this.keyHandlerMap[keyCode]();
            }
        }

        if (keyCode === TAB_KEY && this.isMenuOpen()) {
            if (this.keyHandlerMap[keyCode]) {
                this.keyHandlerMap[keyCode]();
            }
        }
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
        this.setState({
            searchValue: '',
        });
        onChange(value);
        setTimeout(() => this.containerRef.current.focus(), 0);
    }

    handleKeyTabPressed() {
        const { onChange } = this.props;
        const { focusedItemIndex } = this.state;
        const { options } = this.state;
        const value = options[focusedItemIndex];
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
        const isOpenMenu = this.isMenuOpen();
        const errorMessageId = this.getErrorMessageId();
        const currentValue = this.getValue();
        const { valueIcon, inputValue } =
            currentValue !== undefined ? currentValue : { inputValue: searchValue };

        return (
            <div
                id={id}
                className={this.getContainerClassNames()}
                style={style}
                role="presentation"
                onKeyDown={this.handleKeyDown}
                ref={this.containerRef}
                tabIndex={-1}
            >
                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={readOnly}
                />
                <div className="rainbow-lookup_input-container" ref={this.innerContainerRef}>
                    <RenderIf isTrue={!!currentValue}>
                        <RenderIf isTrue={!!valueIcon}>
                            <LeftElement icon={valueIcon} />
                        </RenderIf>
                        <RightElement showCloseButton onClear={onDeleteValue} />
                    </RenderIf>
                    <RenderIf isTrue={!currentValue}>
                        <RightElement
                            showCloseButton={!!searchValue}
                            onClear={this.clearInput}
                            icon={icon}
                        />
                        <Spinner
                            isVisible={isLoading}
                            className="rainbow-lookup_spinner"
                            size="x-small"
                            assistiveText="searching"
                        />
                    </RenderIf>
                    <input
                        id={this.inputId}
                        name={name}
                        type="search"
                        className={this.getInputClassNames()}
                        value={inputValue}
                        placeholder={placeholder}
                        tabIndex={tabIndex}
                        onChange={this.handleSearch}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onClick={onClick}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        autoComplete="off"
                        aria-describedby={errorMessageId}
                        ref={this.inputRef}
                    />
                    <RenderIf isTrue={isOpenMenu}>
                        <div className="rainbow-lookup_options-menu">
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
                        </div>
                    </RenderIf>
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={errorMessageId} className="rainbow-lookup_input-error">
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

Lookup.propTypes = {
    /** Text label for the Lookup. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the Lookup label. */
    hideLabel: PropTypes.bool,
    /** Specifies the selected value of the Lookup. */
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            icon: PropTypes.node,
        }),
        PropTypes.string,
    ]),
    /** An array of matched options to show in a menu. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
};

Lookup.defaultProps = {
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
};

export default withReduxForm(Lookup);
// export const LookupNew = withReduxForm(Lookup);
// export { default as Lookup } from './lookup';
