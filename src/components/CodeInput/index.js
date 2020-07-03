import React, { useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import InputItems from './inputItems';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { useReduxForm } from '../../libs/hooks';
import { useFocusedIndexState, usePreviousIndex, useValueState } from './hooks';
import { getNormalizedValue, getNumbersFromClipboard, setFocus } from './helpers';
import { StyledErrorMessage, StyledFieldset, StyledHelpText, StyledLabel } from './styled';

/**
 * The CodeInput is an element that allows to fill a list of numbers, suitable for code validations.
 * @category Form
 */
const CodeInput = React.forwardRef((props, ref) => {
    const {
        id,
        value: valueProp,
        label,
        bottomHelpText,
        length,
        disabled,
        required,
        readOnly,
        error,
        tabIndex,
        onClick,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
        className,
        style,
    } = useReduxForm(props);

    const inputRef = useRef();
    const value = useValueState(valueProp, length);
    const focusedIndex = useFocusedIndexState(value, length, disabled, readOnly);
    const previousFocusedIndex = usePreviousIndex(focusedIndex);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            inputRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    useEffect(() => {
        if (previousFocusedIndex !== undefined) {
            setFocus(inputRef);
        }
    }, [inputRef, focusedIndex, previousFocusedIndex]);

    const handleOnChange = (inputValue, index) => {
        const newValue = getNormalizedValue(inputValue, index, value);
        const hasValueChanged = newValue !== valueProp;
        if (hasValueChanged) {
            onChange(newValue);
        }
    };

    const handleOnFocus = (e, index) => {
        if (focusedIndex !== index) {
            setFocus(inputRef);
        }
        onFocus(e);
    };

    const handleOnPaste = e => {
        onChange(getNumbersFromClipboard(e.clipboardData.getData('Text')));
    };

    return (
        <StyledFieldset className={className} style={style} id={id}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
            </RenderIf>

            <InputItems
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                error={error}
                tabIndex={tabIndex}
                onClick={onClick}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                onPaste={handleOnPaste}
                focusedIndex={focusedIndex}
                ref={inputRef}
            />
            <RenderIf isTrue={!!bottomHelpText}>
                <StyledHelpText>{bottomHelpText}</StyledHelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <StyledErrorMessage>{error}</StyledErrorMessage>
            </RenderIf>
        </StyledFieldset>
    );
});

CodeInput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the value of CodeInput. */
    value: PropTypes.string,
    /** Specifies the label CodeInput. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Shows the help message below the CodeInput */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies the numeric length to be filled. */
    length: PropTypes.number,
    /** Specifies that the CodeInput element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that the CodeInput field must be filled before submitting the form. */
    required: PropTypes.bool,
    /** Specifies that the CodeInput is read-only. */
    readOnly: PropTypes.bool,
    /** Specifies that the CodeInput must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element receives the focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a key is pressed on the element. */
    onKeyDown: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

CodeInput.defaultProps = {
    id: undefined,
    value: '',
    label: undefined,
    bottomHelpText: undefined,
    length: 4,
    disabled: false,
    required: false,
    readOnly: false,
    error: null,
    tabIndex: undefined,
    onClick: () => {},
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    className: undefined,
    style: undefined,
};

export default CodeInput;
