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
import { uniqueId } from '../../libs/utils';
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
            isMenuOpen: false,
            isLoading: props.isLoading,
        };
        this.inputId = uniqueId('lookup-input');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.containerRef = React.createRef();
        this.inputRef = React.createRef();
        this.handlesSearch = this.handlesSearch.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.focus = this.focus.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { value: prevValue, isLoading: prevIsLoading } = prevProps;
        const { value, isLoading } = this.props;
        if (prevValue && !value) {
            this.focus();
        }
        if (prevIsLoading !== isLoading) {
            this.setState({
                isLoading,
            });
        }
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
        const { searchValue } = this.state;
        const {
            className,
        } = this.props;
        return classnames('rainbow-lookup_input-container', {
            'rainbow-lookup_input-container--menu-opened': !!searchValue,
        }, className);
    }

    getInputClassNames() {
        const {
            isBare,
            isCentered,
            isLoading,
        } = this.props;
        const { searchValue } = this.state;
        return classnames({
            'rainbow-lookup_input': !searchValue,
            'rainbow-lookup_input--menu-opened': !!searchValue,
            'rainbow-lookup_input--loading': isLoading,
            'rainbow-lookup_input rainbow-lookup_input-bare': isBare,
            'rainbow-lookup_input rainbow-lookup_input-counter': isCentered,
        });
    }

    getInlineTextLabelId() {
        const { bottomHelpText } = this.props;
        if (bottomHelpText) {
            return this.inlineTextLabelId;
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

    handleClick(event) {
        const isClickInsideLookup = this.containerRef.current.contains(event.target);
        if (isClickInsideLookup) {
            return null;
        }
        return this.closeMenu();
    }

    handleChange(value) {
        const { onChange } = this.props;
        this.setState({
            searchValue: '',
        });
        onChange(value);
    }

    handlesSearch(event) {
        const { value } = event.target;
        this.setState({
            searchValue: value,
            isLoading: true,
        });
        if (value) {
            this.openMenu();
        } else {
            this.closeMenu();
        }
        this.fireSearch(value);
    }

    handleFocus(event) {
        const { onFocus, options } = this.props;
        const { searchValue } = this.state;
        if (options.length && searchValue) {
            this.openMenu();
        }
        onFocus(event);
    }

    fireSearch(value) {
        const { onSearch, debounce } = this.props;
        const { timeout } = this.state;
        if (debounce) {
            clearTimeout(timeout);
            this.setState({
                timeout: setTimeout(() => {
                    this.setState({
                        isLoading: false,
                    });
                    onSearch(value);
                }, 1000),
            });
        } else {
            onSearch(value);
        }
    }

    clearInput() {
        const { onSearch, debounce } = this.props;
        const { timeout } = this.state;
        const searchValue = '';
        this.closeMenu();
        if (debounce) {
            clearTimeout(timeout);
        }
        this.setState({
            searchValue,
        });
        onSearch(searchValue);
    }

    openMenu() {
        window.addEventListener('click', this.handleClick);
        window.addEventListener('touchstart', this.handleClick);
        return this.setState({
            isMenuOpen: true,
        });
    }

    closeMenu() {
        window.removeEventListener('click', this.handleClick);
        window.removeEventListener('touchstart', this.handleClick);
        return this.setState({
            isMenuOpen: false,
            isLoading: false,
        });
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
            onChange,
            bottomHelpText,
            required,
            id,
            name,
            hideLabel,
            options,
        } = this.props;
        const { searchValue, isMenuOpen, isLoading } = this.state;
        const showMenu = isMenuOpen && !isLoading;

        return (
            <div
                id={id}
                className={this.getContainerClassNames()}
                style={style}
                ref={this.containerRef}>

                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={readOnly}
                    id={this.getInlineTextLabelId()} />

                <RenderIf isTrue={!!value}>
                    <div className="rainbow-lookup_chip-content_container">
                        <Chip
                            className="rainbow-lookup_chip"
                            label={<ChipContent {...value} />}
                            variant="neutral"
                            onDelete={() => onChange(null)} />
                    </div>
                </RenderIf>

                <RenderIf isTrue={!value}>
                    <div className={this.getInputContainerClassNames()}>
                        <RightElement
                            showCloseButton={!!searchValue}
                            onClear={this.clearInput}
                            onFocus={this.focus} />

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
                            aria-labelledby={this.getInlineTextLabelId()}
                            aria-describedby={this.getErrorMessageId()}
                            ref={this.inputRef} />

                        <RenderIf isTrue={showMenu}>
                            <div className="rainbow-lookup_options-divider" />
                            <Options
                                items={options}
                                value={searchValue}
                                onSelectOption={this.handleChange} />
                        </RenderIf>
                    </div>
                </RenderIf>
                <RenderIf isTrue={!!bottomHelpText}>
                    <div className="rainbow-lookup_input-help">
                        {bottomHelpText}
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
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    required: PropTypes.bool,
    isCentered: PropTypes.bool,
    isBare: PropTypes.bool,
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
    bottomHelpText: null,
    required: false,
    isCentered: false,
    isBare: false,
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
    options: [],
    onSearch: () => {},
    debounce: false,
};

export default withReduxForm(Lookup);
