import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import { ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import { uniqueId } from '../../libs/utils';
import OutsideClick from '../../libs/outsideClick';
import Label from '../Input/label';
import getNormalizeValue from './helpers/getNormalizeValue';
import shouldOpenMenu from './helpers/shouldOpenMenu';
import StyledInput from './styled/input';
import StyledContainer from './styled/container';
import StyledInnerContainer from './styled/innerContainer';
import StyledIcon from './styled/icon';
import StyledError from '../Input/styled/errorText';
import StyledIndicator from './styled/indicator';
import InternalDropdown from '../InternalDropdown';
import InternalOverlay from '../InternalOverlay';

function positionResolver(opts) {
    const { trigger, viewport, content } = opts;
    const newOpts = {
        trigger,
        viewport,
        content: {
            ...content,
            width: trigger.width,
        },
    };
    return {
        ...InternalOverlay.defaultPositionResolver(newOpts),
        width: trigger.width,
    };
}

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
        this.dropdownRef = React.createRef();
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.closeAndFocusInput = this.closeAndFocusInput.bind(this);
        this.outsideClick = new OutsideClick();
        this.activeChildren = [];
        this.state = {
            isOpen: false,
        };
        this.keyHandlerMap = {
            [ESCAPE_KEY]: this.closeAndFocusInput,
            [TAB_KEY]: this.closeAndFocusInput,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { isOpen: wasOpen } = prevState;
        const { isOpen } = this.state;
        if (!wasOpen && isOpen) {
            this.outsideClick.startListening(this.containerRef.current, () => this.closeMenu());
        }
    }

    componentWillUnmount() {
        this.outsideClick.stopListening();
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    handleKeyPressed(event) {
        const { isOpen } = this.state;
        const { readOnly } = this.props;
        if (isOpen) {
            if (this.keyHandlerMap[event.keyCode]) {
                return this.keyHandlerMap[event.keyCode]();
            }
        } else if (shouldOpenMenu(event.keyCode) && !readOnly) {
            event.preventDefault();
            this.openMenu();
        }
        return null;
    }

    closeAndFocusInput() {
        this.closeMenu();
        this.focus();
    }

    openMenu() {
        this.setState({
            isOpen: true,
        });
    }

    closeMenu() {
        this.outsideClick.stopListening();
        this.setState({
            isOpen: false,
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
        const eventValue = value || null;
        onBlur(eventValue);
    }

    handleChange(option) {
        const { onChange } = this.props;
        const { label, name, icon, value } = option;
        this.closeMenu();
        setTimeout(() => {
            this.focus();
            return onChange({ label, name, icon, value });
        }, 0);
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
            enableSearch,
        } = this.props;
        const { label: valueLabel, icon } = getNormalizeValue(valueInProps);
        const value = valueLabel || '';
        const errorMessageId = this.getErrorMessageId();
        const { isOpen } = this.state;
        const isReadOnly = !!(!disabled && readOnly);

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
                <RenderIf isTrue={pickListLabel}>
                    <Label
                        label={pickListLabel}
                        hideLabel={hideLabel}
                        required={required}
                        inputId={this.inputId}
                        readOnly={isReadOnly}
                    />
                </RenderIf>

                <StyledInnerContainer
                    disabled={disabled}
                    readOnly={readOnly}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                    role="combobox"
                >
                    <RenderIf isTrue={icon}>
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
                        icon={icon}
                        iconPosition="left"
                        variant={variant}
                    />
                    <InternalOverlay
                        isVisible={isOpen}
                        positionResolver={positionResolver}
                        onOpened={() => this.dropdownRef.current.focus()}
                        render={() => (
                            <InternalDropdown
                                id={this.listboxId}
                                isLoading={isLoading}
                                value={valueInProps}
                                onChange={this.handleChange}
                                enableSearch={enableSearch}
                                ref={this.dropdownRef}
                            >
                                {children}
                            </InternalDropdown>
                        )}
                        triggerElementRef={() => this.triggerRef}
                    />
                </StyledInnerContainer>
                <RenderIf isTrue={error}>
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
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    /** If is set to true, then a search input to filter is showed. */
    enableSearch: PropTypes.bool,
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
    enableSearch: false,
};

export default withReduxForm(Picklist);
export { Picklist as Component };
