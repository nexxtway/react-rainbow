import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import {
    useUniqueIdentifier,
    useOutsideClick,
    useErrorMessageId,
    useReduxForm,
    useLabelId,
} from '../../libs/hooks';
import {
    StyledInput,
    StyledContainer,
    StyledChipContainer,
    StyledButtonIcon,
    StyledPlaceholder,
    StyledCombobox,
} from './styled';
import InternalDropdown from '../InternalDropdown';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import PlusIcon from './icons/plus';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import { hasChips, positionResolver } from './helpers';
import Chips from './chips';

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
        tabIndex,
        variant,
        chipVariant,
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
            comboboxRef.current.focus();
        },
        click: () => {
            comboboxRef.current.click();
        },
        blur: () => {
            comboboxRef.current.blur();
        },
    }));

    const [isOpen, setIsOpen] = useState(false);

    const labelId = useLabelId('label');
    const comboboxId = useUniqueIdentifier('combobox');
    const dropdownId = useUniqueIdentifier('dropdown');
    const inputId = useUniqueIdentifier('input');
    const errorMessageId = useErrorMessageId();

    useEffect(() => {
        if (isOpen) {
            dropdownRef.current.focus();
        }
    }, [isOpen]);

    const handleChange = val => {
        return onChange(val);
    };

    const handleDelete = option => {
        comboboxRef.current.focus();
        if (Array.isArray(value)) {
            return onChange(value.filter(val => val !== option));
        }
        return onChange([]);
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

    const shouldRenderChips = hasChips(value);

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
                variant={variant}
                error={error}
                disabled={disabled}
                role="combobox"
                aria-controls={dropdownId}
                aria-expanded={isOpen}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
                tabIndex={tabIndex}
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
                    <RenderIf isTrue={shouldRenderChips}>
                        <Chips value={value} variant={chipVariant} onDelete={handleDelete} />
                    </RenderIf>
                </StyledChipContainer>
                <StyledButtonIcon
                    title="Add"
                    variant="neutral"
                    size="small"
                    icon={<PlusIcon />}
                    onClick={handleTriggerClick}
                    disabled={disabled}
                    ref={triggerRef}
                    tabIndex="-1"
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
            <InternalOverlay
                isVisible={isOpen}
                positionResolver={positionResolver}
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
    variant: PropTypes.oneOf(['default', 'bare']),
    /** Specifies the variant for the chips. */
    chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
        }),
        PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                label: PropTypes.string,
            }),
        ),
    ]),
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
    value: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    children: null,
};

export default MultiSelect;
