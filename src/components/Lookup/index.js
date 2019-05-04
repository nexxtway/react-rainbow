/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import Chip from '../Chip';
import Spinner from '../Spinner';
import Label from './label';
import RightElement from './rightElement';
import Options from './options';
import ChipContent from './chipContent';
import isNavigationKey from './isNavigationKey';
import { uniqueId } from '../../libs/utils';
import { UP_KEY, DOWN_KEY, ENTER_KEY } from '../../libs/constants';
import withReduxForm from '../../libs/hocs/withReduxForm';
import './styles.css';

/**
 * A Lookup is an autocomplete text input that will search against a database object,
 * it is enhanced by a panel of suggested options.
 * @category Form
 */
class Lookup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            isFocused: false,
            focusedItemIndex: 0,
        };
        this.inputId = uniqueId('lookup-input');
        this.errorMessageId = uniqueId('error-message');
        this.containerRef = React.createRef();
        this.inputRef = React.createRef();
        this.handlesSearch = this.handlesSearch.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleRemoveValue = this.handleRemoveValue.bind(this);

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
    }

    getContainerClassNames() {
        const {
            className,
            error,
        } = this.props;
        return classnames('rainbow-lookup_container', {
            'rainbow-lookup_container--error': error,
        }, className);
    }

    getInputContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-lookup_input-container', {
            'rainbow-lookup_input-container--menu-opened': this.isMenuOpen(),
        }, className);
    }

    getInputClassNames() {
        const { isLoading } = this.props;
        const isOpen = this.isMenuOpen();
        return classnames({
            'rainbow-lookup_input': !isOpen,
            'rainbow-lookup_input--menu-opened': isOpen,
            'rainbow-lookup_input--loading': isLoading,
        });
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    handleClick(event) {
        const ref = this.containerRef.current;
        const isClickInsideLookup = ref && ref.contains(event.target);
        if (isClickInsideLookup) {
            return null;
        }
        return this.closeMenu();
    }

    handleChange(value) {
        const { onChange } = this.props;
        this.setState({
            searchValue: '',
            focusedItemIndex: 0,
        });
        onChange(value);
    }

    handlesSearch(event) {
        const { value } = event.target;
        this.setState({
            searchValue: value,
        });
        this.fireSearch(value);
    }

    handleFocus(event) {
        const { onFocus } = this.props;
        this.openMenu();
        onFocus(event);
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
        window.addEventListener('click', this.handleClick);
        window.addEventListener('touchstart', this.handleClick);
        return this.setState({
            isFocused: true,
        });
    }

    closeMenu() {
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('touchstart', this.handleClick);
        return this.setState({
            isFocused: false,
        });
    }

    isMenuOpen() {
        const { searchValue, isFocused } = this.state;
        const { options } = this.props;
        const isMenuEmpty = isFocused && !!searchValue
            && Array.isArray(options) && options.length === 0;
        const isOpen = isFocused && Array.isArray(options) && !!options.length;
        return isOpen || isMenuEmpty;
    }

    handleHover(index) {
        this.setState({
            focusedItemIndex: index,
        });
    }

    handleKeyDown(event) {
        const { keyCode } = event;
        if (isNavigationKey(keyCode)) {
            event.preventDefault();
            if (this.keyHandlerMap[keyCode]) {
                this.keyHandlerMap[keyCode]();
            }
        }
    }

    handleKeyUpPressed() {
        const { focusedItemIndex } = this.state;
        if (focusedItemIndex > 0) {
            this.setState({
                focusedItemIndex: focusedItemIndex - 1,
            });
        }
    }

    handleKeyDownPressed() {
        const { focusedItemIndex } = this.state;
        const { options } = this.props;
        if (focusedItemIndex < options.length - 1) {
            this.setState({
                focusedItemIndex: focusedItemIndex + 1,
            });
        }
    }

    handleKeyEnterPressed() {
        const { onChange, options } = this.props;
        const { focusedItemIndex } = this.state;
        const value = options.find((option, index) => index === focusedItemIndex);
        this.setState({
            searchValue: '',
            focusedItemIndex: 0,
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
            value,
            label,
            error,
            placeholder,
            disabled,
            readOnly,
            tabIndex,
            onBlur,
            onClick,
            required,
            id,
            name,
            hideLabel,
            options,
            isLoading,
        } = this.props;
        const { searchValue, focusedItemIndex } = this.state;
        const styles = {
            marginBottom: value ? 0 : 40,
        };
        const containerStyles = Object.assign({}, styles, style);
        const chipOnDelete = (disabled || readOnly) ? undefined : this.handleRemoveValue;

        return (
            <div
                id={id}
                className={this.getContainerClassNames()}
                style={containerStyles}
                role="presentation"
                onKeyDown={this.handleKeyDown}>

                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={readOnly} />

                <RenderIf isTrue={!!value}>
                    <div className="rainbow-lookup_chip-content_container">
                        <Chip
                            className="rainbow-lookup_chip"
                            label={<ChipContent {...value} />}
                            variant="neutral"
                            onDelete={chipOnDelete} />
                    </div>
                </RenderIf>

                <RenderIf isTrue={!value}>
                    <div className={this.getInputContainerClassNames()} ref={this.containerRef}>
                        <RightElement
                            showCloseButton={!!searchValue}
                            onClear={this.clearInput} />

                        <Spinner
                            isVisible={isLoading}
                            className="rainbow-lookup_spinner"
                            size="x-small"
                            assistiveText="searching" />

                        <input
                            id={this.inputId}
                            name={name}
                            type="search"
                            className={this.getInputClassNames()}
                            value={searchValue}
                            placeholder={placeholder}
                            onChange={this.handlesSearch}
                            tabIndex={tabIndex}
                            onFocus={this.handleFocus}
                            onBlur={onBlur}
                            onClick={onClick}
                            disabled={disabled}
                            readOnly={readOnly}
                            required={required}
                            autoComplete="off"
                            aria-describedby={this.getErrorMessageId()}
                            ref={this.inputRef} />

                        <RenderIf isTrue={this.isMenuOpen()}>
                            <div className="rainbow-lookup_options-divider" />
                            <Options
                                items={options}
                                value={searchValue}
                                onSelectOption={this.handleChange}
                                focusedItemIndex={focusedItemIndex}
                                onHoverOption={this.handleHover} />

                        </RenderIf>
                    </div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-lookup_input-error">
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

Lookup.propTypes = {
    value: PropTypes.shape({
        label: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.node,
    }),
    name: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
    isLoading: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.node,
        }),
    ),
    onSearch: PropTypes.func,
    debounce: PropTypes.bool,
};

Lookup.defaultProps = {
    value: undefined,
    name: undefined,
    placeholder: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
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
