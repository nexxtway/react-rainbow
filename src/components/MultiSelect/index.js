/* eslint-disable react/no-unused-prop-types */
import React, { useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick } from '@rainbow-modules/hooks';
import Label from '../Input/label';
import {
    useUniqueIdentifier,
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
    StyledCountText,
    StyledDropdown,
} from './styled';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import PlusIcon from './icons/plus';
import { ENTER_KEY, SPACE_KEY, ESCAPE_KEY, TAB_KEY } from '../../libs/constants';
import { hasContent, positionResolver } from './helpers';
import normalizeValue from './helpers/normalizeValue';
import Content from './content';

const MultiSelect = React.forwardRef((props, ref) => {
    const {
        id,
        className,
        style,
        label,
        labelAlignment,
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
        isBare,
        isLoading,
        value,
        onChange,
        onFocus,
        onBlur,
        children,
        showCheckbox,
        enableSearch,
        borderRadius,
    } = useReduxForm(props);

    const triggerRef = useRef();
    const dropdownContainerRef = useRef();
    const dropdownRef = useRef();
    const comboboxRef = useRef();
    const inputRef = useRef();
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
        setTimeout(() => triggerRef.current.focus(), 0);
    };

    const handleChange = val => {
        if (!showCheckbox) {
            closeAndFocusInput();
        }
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
    };

    const handleKeyDown = event => {
        if (isOpen) {
            if (
                event.keyCode === ESCAPE_KEY ||
                (event.keyCode === TAB_KEY && !(showCheckbox && event.target.tagName !== 'BUTTON'))
            ) {
                event.preventDefault();
                closeAndFocusInput();
            }
        }
        if (event.target !== comboboxRef.current) return;
        if (event.keyCode === ENTER_KEY || event.keyCode === SPACE_KEY) {
            event.preventDefault();
            toggleDropdown();
        }
    };

    const handleClick = () => {
        if (disabled) {
            return;
        }

        if (isOpen) {
            dropdownRef.current.focus();
            return;
        }

        if (readOnly) {
            inputRef.current.focus();
            return;
        }
        triggerRef.current.focus();
    };

    const handleTriggerClick = event => {
        event.preventDefault();
        toggleDropdown();
    };

    const handleFocus = () => {
        if (!readOnly) {
            triggerRef.current.focus();
        }
    };

    const handleBlur = () => {
        if (!readOnly) {
            triggerRef.current.blur();
        }
    };

    useOutsideClick(
        dropdownContainerRef,
        event => {
            if (
                event.target !== triggerRef.current.buttonRef.current &&
                !triggerRef.current.buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        },
        isOpen,
    );

    useWindowResize(() => setIsOpen(false), isOpen);

    const [chipsBoundingRect, setChipsBoundingRect] = useState();
    const refCallback = element => {
        if (element) {
            const elementRect = JSON.stringify(element.getBoundingClientRect());
            if (!chipsBoundingRect || chipsBoundingRect !== elementRect) {
                setChipsBoundingRect(elementRect);
            }
        }
    };

    const selectedCount = Array.isArray(value) ? value.length : 1;
    const shouldRenderContent = hasContent(value);
    const shouldRenderCount = !!value && selectedCount > 0 && variant === 'default';
    const shouldRenderButton = !readOnly && !disabled;
    const inputTabIndex = readOnly ? tabIndex : '-1';

    const dropdownWidth = comboboxRef.current ? comboboxRef.current.offsetWidth : 0;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                id={labelId}
                label={label}
                labelAlignment={labelAlignment}
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
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                ref={comboboxRef}
                aria-labelledby={labelId}
                variant={variant}
                borderRadius={borderRadius}
            >
                <StyledInput
                    id={inputId}
                    role="textbox"
                    aria-autocomplete="none"
                    tabIndex={inputTabIndex}
                    disabled={disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={inputRef}
                    readOnly
                />
                <StyledChipContainer ref={refCallback}>
                    <RenderIf isTrue={!shouldRenderContent}>
                        <StyledPlaceholder>{placeholder}</StyledPlaceholder>
                    </RenderIf>
                    <RenderIf isTrue={shouldRenderContent}>
                        <Content
                            variant={variant}
                            chipVariant={chipVariant}
                            readOnly={readOnly}
                            disabled={disabled}
                            value={value}
                            onDelete={handleDelete}
                            borderRadius={borderRadius}
                        />
                    </RenderIf>
                </StyledChipContainer>
                <RenderIf isTrue={shouldRenderCount}>
                    <StyledCountText readOnly={readOnly}>({selectedCount})</StyledCountText>
                </RenderIf>
                <RenderIf isTrue={shouldRenderButton}>
                    <StyledButtonIcon
                        title="Add"
                        variant="neutral"
                        size="small"
                        icon={<PlusIcon />}
                        onClick={handleTriggerClick}
                        disabled={disabled}
                        ref={triggerRef}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        borderRadius={borderRadius}
                    />
                </RenderIf>
                <InternalOverlay
                    isVisible={isOpen}
                    positionResolver={positionResolver}
                    onOpened={() => dropdownRef.current.focus()}
                    triggerElementRef={() => comboboxRef}
                >
                    <div ref={dropdownContainerRef}>
                        <StyledDropdown
                            id={dropdownId}
                            value={value}
                            isLoading={isLoading}
                            onChange={handleChange}
                            ref={dropdownRef}
                            width={dropdownWidth}
                            placeholder={placeholder}
                            showCheckbox={showCheckbox}
                            enableSearch={enableSearch}
                            multiple
                        >
                            {children}
                        </StyledDropdown>
                    </div>
                </InternalOverlay>
            </StyledCombobox>
            <RenderIf isTrue={bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={error}>
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
    /** Describes the position of the MultiSelect label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the MultiSelect label. */
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
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Specifies the variant for the input. */
    variant: PropTypes.oneOf(['default', 'chip', 'bare']),
    /** If is set to true, then a search input to filter is showed. */
    enableSearch: PropTypes.bool,
    /** Specifies the variant for the chips. */
    chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    /** Specifies the value of an input element. */
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    /** The border radius of the input. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

MultiSelect.defaultProps = {
    className: undefined,
    style: undefined,
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    placeholder: null,
    error: null,
    bottomHelpText: null,
    required: false,
    disabled: false,
    readOnly: false,
    isLoading: false,
    tabIndex: 0,
    variant: 'default',
    enableSearch: false,
    chipVariant: 'base',
    value: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    children: null,
    borderRadius: 'rounded',
};

export default MultiSelect;
