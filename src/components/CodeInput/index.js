import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../libs/hooks';
import useReduxForm from './../../libs/hooks/useReduxForm';
import getNormalizedValue from './helpers/getNormalizedValue';
import HelpText from '../Input/styled/helpText';
import InputItems from './inputItems';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import StyledFieldset from './styled';
import StyledTextError from '../Input/styled/errorText';

/**
 * The CodeInput is an element that allows to fill a list of numbers, suitable for code validations.
 * @category Form
 */
const CodeInput = React.forwardRef((props, ref) => {
    const {
        id,
        name,
        value,
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

    const inputId = id || useUniqueIdentifier('code-input');
    const fieldsetName = name || useUniqueIdentifier('code-input-fieldset');

    const handleOnChange = (inputValue, index, onChangeCallback) => {
        onChange(getNormalizedValue(inputValue, index, value, length, onChangeCallback));
    };

    return (
        <StyledFieldset className={className} name={fieldsetName} style={style} id={inputId}>
            <Label
                label={label}
                hideLabel={!label}
                required={required}
                readOnly={readOnly}
                inputId={inputId}
            />

            <InputItems
                value={value}
                length={length}
                disabled={disabled}
                readOnly={readOnly}
                error={error}
                tabIndex={tabIndex}
                onClick={onClick}
                onChange={handleOnChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                ref={ref}
            />

            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText>{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <StyledTextError>{error}</StyledTextError>
            </RenderIf>
        </StyledFieldset>
    );
});

CodeInput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** An identifier for the CodeInput element. */
    name: PropTypes.string,
    /** Specifies the value of CodeInput. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    name: undefined,
    value: undefined,
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
