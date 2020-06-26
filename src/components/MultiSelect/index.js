import React, { useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import {
    useUniqueIdentifier,
    useOutsideClick,
    useErrorMessageId,
    useReduxForm,
    useLabelId,
    useWindowResize,
} from '../../libs/hooks';
import {
    StyledInput,
    StyledContainer,
    StyledChipContainer,
    StyledButtonIcon,
    StyledPlaceholder,
    StyledCombobox,
    StyledText,
    StyledCountText,
} from './styled';
import InternalDropdown from '../InternalDropdown';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import PlusIcon from './icons/plus';
import { ENTER_KEY, SPACE_KEY, ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import { hasChips, positionResolver } from './helpers';
import Chips from './chips';
import normalizeValue from './helpers/normalizeValue';
import getContent from './helpers/getContent';

const MultiSelect = React.forwardRef((props, ref) => {
    const {
        id,
        className,
        style,
        label,
        hideLabel,
        placeholder,
        error,
        bottomHelpText,
        required,
        disabled,
        readOnly,
        tabIndex: tabIndexInProps,
        variant,
        chipVariant,
        isBare,
        value,
        onChange,
        onFocus,
        onBlur,
        children,
    } = useReduxForm(props);

    const triggerRef = useRef();
    const dropdownRef = useRef();
    const comboboxRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            triggerRef.current.focus();
        },
        click: () => {
            triggerRef.current.click();
        },
        blur: () => {
            triggerRef.current.blur();
        },
    }));

    const [isOpen, setIsOpen] = useState(false);

    const labelId = useLabelId('label');
    const comboboxId = useUniqueIdentifier('combobox');
    const dropdownId = useUniqueIdentifier('dropdown');
    const inputId = useUniqueIdentifier('input');
    const errorMessageId = useErrorMessageId();

    const closeAndFocusInput = () => {
        setIsOpen(false);
        // eslint-disable-next-line no-use-before-define
        stopListeningOutsideClick();
        setTimeout(() => triggerRef.current.focus(), 0);
    };

    const handleChange = val => {
        closeAndFocusInput();
        return onChange(normalizeValue(val));
    };

    const handleDelete = option => {
        if (Array.isArray(value)) {
            return handleChange(value.filter(val => val !== option));
        }
        return handleChange([]);
    };

    const toggleDropdown = () => {
        if (disabled || readOnly) return;
        setIsOpen(!isOpen);
        if (!isOpen) {
            // eslint-disable-next-line no-use-before-define
            startListeningOutsideClick();
        }
    };

    const handleKeyDown = event => {
        if ((event.keyCode === ESCAPE_KEY || event.keyCode === TAB_KEY) && isOpen) {
            event.preventDefault();
            closeAndFocusInput();
        }
        if (event.target !== comboboxRef.current) return;
        if (event.keyCode === ENTER_KEY || event.keyCode === SPACE_KEY) {
            event.preventDefault();
            toggleDropdown();
        }
    };

    const handleTriggerClick = event => {
        event.preventDefault();
        event.stopPropagation();
        toggleDropdown();
    };

    const handleFocus = () => {
        comboboxRef.current.focus();
    };

    const handleBlur = () => {
        comboboxRef.current.blur();
    };

    const handleOutsideClick = event => {
        if (
            event.target !== triggerRef.current.buttonRef.current &&
            !triggerRef.current.buttonRef.current.contains(event.target)
        ) {
            // eslint-disable-next-line no-use-before-define
            stopListeningOutsideClick();
            setIsOpen(false);
        }
    };
    const [startListeningOutsideClick, stopListeningOutsideClick] = useOutsideClick(
        dropdownRef,
        handleOutsideClick,
    );
    useWindowResize(() => setIsOpen(false), isOpen);

    const shouldRenderChips = hasChips(value);
    const tabIndex = disabled || readOnly ? '-1' : tabIndexInProps;
    const content =
        variant === 'chip' ? (
            <Chips
                value={value}
                variant={chipVariant}
                readOnly={readOnly}
                disabled={disabled}
                onDelete={handleDelete}
            />
        ) : (
            <StyledText>{getContent(value)}</StyledText>
        );
    const selectedCount = Array.isArray(value) ? value.length : 1;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                id={labelId}
                label={label}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
            />
            <StyledCombobox
                id={comboboxId}
                isBare={isBare}
                error={error}
                disabled={disabled}
                role="combobox"
                aria-controls={dropdownId}
                aria-expanded={isOpen}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
                tabIndex="-1"
                ref={comboboxRef}
                aria-labelledby={labelId}
            >
                <StyledInput
                    id={inputId}
                    role="textbox"
                    aria-autocomplete="none"
                    tabIndex="-1"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    readOnly
                />
                <StyledChipContainer>
                    <RenderIf isTrue={!shouldRenderChips}>
                        <StyledPlaceholder>{placeholder}</StyledPlaceholder>
                    </RenderIf>
                    <RenderIf isTrue={shouldRenderChips}>{content}</RenderIf>
                </StyledChipContainer>
                <RenderIf isTrue={!!value && selectedCount > 0}>
                    <StyledCountText>({selectedCount})</StyledCountText>
                </RenderIf>
                <RenderIf isTrue={!readOnly && !disabled}>
                    <StyledButtonIcon
                        title="Add"
                        variant="neutral"
                        size="small"
                        icon={<PlusIcon />}
                        onClick={handleTriggerClick}
                        disabled={disabled}
                        ref={triggerRef}
                        tabIndex={tabIndex}
                    />
                </RenderIf>
                <InternalOverlay
                    isVisible={isOpen}
                    positionResolver={positionResolver}
                    onOpened={() => dropdownRef.current.focus()}
                    render={() => (
                        <InternalDropdown
                            id={dropdownId}
                            value={value}
                            onChange={handleChange}
                            ref={dropdownRef}
                            multiple
                        >
                            {children}
                        </InternalDropdown>
                    )}
                    triggerElementRef={() => triggerRef.current.buttonRef}
                />
            </StyledCombobox>
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText alignSelf="center" id={errorMessageId}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

MultiSelect.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Text label for the input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Specifies the variant for the input. */
    variant: PropTypes.oneOf(['default', 'chip']),
    /** Specifies the variant for the chips. */
    chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    /** Specifies that an input will not have border. This value defaults to false. */
    isBare: PropTypes.bool,
    /** Specifies the value of an input element. */
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
            value: PropTypes.any,
        }),
    ),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

MultiSelect.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    hideLabel: false,
    placeholder: null,
    error: null,
    bottomHelpText: null,
    required: false,
    disabled: false,
    readOnly: false,
    tabIndex: 0,
    variant: 'default',
    chipVariant: 'base',
    isBare: false,
    value: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    children: null,
};

export default MultiSelect;
