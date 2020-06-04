import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import { useUniqueIdentifier, useOutsideClick, useErrorMessageId } from '../../libs/hooks';
import {
    StyledInput,
    StyledContainer,
    ChipContainer,
    StyledButtonIcon,
    StyledPlaceholder,
} from './styled';
import InternalDropdown from '../InternalDropdown';
import InternalOverlay from '../InternalOverlay';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import PlusIcon from './icons/plus';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import { getChips, positionResolver } from './helpers';

const MultiSelect = props => {
    const {
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
    } = props;
    const [isOpen, setIsOpen] = useState(false);

    const inputRef = useRef();
    const triggerRef = useRef();
    const dropdownRef = useRef();

    const inputId = useUniqueIdentifier('input');
    const errorMessageId = useErrorMessageId();

    useEffect(() => {
        if (isOpen) {
            dropdownRef.current.focus();
        }
    }, [isOpen]);

    const handleChange = val => {
        inputRef.current.focus();
        setIsOpen(false);
        return onChange(val);
    };

    const handleDelete = option => {
        if (Array.isArray(value)) {
            return onChange(value.filter(val => val !== option));
        }
        return onChange([]);
    };

    const handleTriggerClick = () => {
        if (disabled || readOnly) return;
        setIsOpen(!isOpen);
        if (!isOpen) {
            // eslint-disable-next-line no-use-before-define
            startListeningOutsideClick();
        }
    };

    const handleKeyDown = event => {
        if (event.target !== inputRef.current) return;
        if (event.keyCode === ENTER_KEY || event.keyCode === SPACE_KEY) {
            event.preventDefault();
            if (disabled || readOnly) return;
            setIsOpen(!isOpen);
            if (!isOpen) {
                // eslint-disable-next-line no-use-before-define
                startListeningOutsideClick();
            }
        }
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

    const chips = getChips(value, chipVariant, handleDelete);
    const haveChips = chips && chips.length > 0;

    return (
        <StyledContainer className={className} style={style}>
            <Label label={label} hideLabel={hideLabel} required={required} inputId={inputId} />
            <StyledInput
                variant={variant}
                error={error}
                disabled={disabled}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={handleKeyDown}
                tabIndex={tabIndex}
                ref={inputRef}
            >
                <ChipContainer>
                    <RenderIf isTrue={!haveChips}>
                        <StyledPlaceholder>{placeholder}</StyledPlaceholder>
                    </RenderIf>
                    <RenderIf isTrue={haveChips}>{chips}</RenderIf>
                </ChipContainer>
                <StyledButtonIcon
                    variant="neutral"
                    size="small"
                    icon={<PlusIcon />}
                    onClick={handleTriggerClick}
                    disabled={disabled}
                    ref={triggerRef}
                />
                <InternalOverlay
                    isVisible={isOpen}
                    positionResolver={positionResolver}
                    render={() => (
                        <InternalDropdown
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
            </StyledInput>
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
};

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
