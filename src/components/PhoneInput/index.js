import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from './../../libs/hocs/withReduxForm';
import StyledContainer from '../Input/styled/container';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import StyledIconContainer from '../Input/styled/iconContainer';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StyledInput from './styled/input';
import StyledIndicator from '../Picklist/styled/indicator';
import { useUniqueIdentifier, useLocale } from '../../libs/hooks';
import COUNTRIES from './countries';
import getCountry from './helpers/getCountry';
import CountryPickerDropdown from './countryPickerDropdown';
import StyledTrigger from './styled/trigger';

/**
 * phone input are used for freeform data entry.
 * @category Form
 */
const PhoneInput = React.forwardRef((props, ref) => {
    const {
        value,
        name,
        placeholder,
        icon,
        maxLength,
        minLength,
        bottomHelpText,
        required,
        pattern,
        isCentered,
        isBare,
        error,
        disabled,
        readOnly,
        onChange,
        tabIndex,
        onClick,
        onFocus,
        onBlur,
        onKeyDown,
        className,
        style,
        id,
        autoComplete,
        label,
        hideLabel,
        locale: localLocale,
    } = props;
    const iconPosition = icon ? 'left' : undefined;
    const locale = useLocale(localLocale);
    const inputId = useUniqueIdentifier('phone-input');
    const messageId = useUniqueIdentifier('phone-input');
    const inlineTextLabelId = useUniqueIdentifier('phone-input');
    const [selectedCountry, setCountry] = useState(getCountry(COUNTRIES[25]));
    const [isOpen, setIsOpen] = useState(false);

    const { phone } = value || { phone: '' };

    function handleChange(phoneNumberValue) {
        onChange({
            countryCode: selectedCountry.countryCode,
            isoCode: selectedCountry.isoCode,
            phone: phoneNumberValue,
        });
    }

    function handleSelect(country) {
        setCountry(country);
        setIsOpen(false);
        handleChange(phone);
    }

    function toggleDropdown() {
        if (isOpen) {
            return setIsOpen(false);
        }
        return setIsOpen(true);
    }

    return (
        <StyledContainer id={id} className={className} style={style} ref={ref}>
            <Label
                label={label}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={readOnly}
                id={inlineTextLabelId}
            />

            <RelativeElement>
                <RenderIf isTrue={!!icon}>
                    <StyledIconContainer
                        iconPosition={iconPosition}
                        readOnly={readOnly}
                        error={error}
                    >
                        {icon}
                    </StyledIconContainer>
                </RenderIf>

                <StyledTrigger
                    label={
                        <span>
                            {selectedCountry.flagIcon} <StyledIndicator disabled={disabled} />
                        </span>
                    }
                    onClick={toggleDropdown}
                />

                <StyledInput
                    id={inputId}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    pattern={pattern}
                    autoComplete={autoComplete}
                    aria-labelledby={inlineTextLabelId}
                    aria-describedby={messageId}
                    // ref={this.inputRef}
                    isBare={isBare}
                    isCentered={isCentered}
                    iconPosition={iconPosition}
                    icon={icon}
                    error={error}
                />
                <CountryPickerDropdown isOpen={isOpen} onSelect={handleSelect} locale={locale} />
            </RelativeElement>
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText alignSelf="center" id={messageId}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

PhoneInput.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** The name of the input. */
    name: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies the regular expression that the input's value is checked against.
     * This attribute is supported for text, search, url, tel, email, and password types. */
    pattern: PropTypes.string,
    /** Specifies that an input text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that an input will not have border. This value defaults to false. */
    isBare: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a key is pressed on the element. */
    onKeyDown: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A string indicating the type of autocomplete functionality.
     * If any, to allow on the input. */
    autoComplete: PropTypes.string,
    /** The component locale. If the locale is not passed, it defaults to the context language, and if the context language is not passed, it will default to the browser's language. */
    locale: PropTypes.string,
};

PhoneInput.defaultProps = {
    id: undefined,
    name: undefined,
    placeholder: null,
    icon: undefined,
    label: undefined,
    hideLabel: false,
    maxLength: undefined,
    minLength: undefined,
    bottomHelpText: null,
    required: false,
    pattern: undefined,
    isCentered: false,
    isBare: false,
    error: null,
    disabled: false,
    readOnly: false,
    tabIndex: undefined,
    autoComplete: 'on',
    className: undefined,
    style: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    onChange: () => {},
    value: undefined,
    locale: undefined,
};

export default withReduxForm(PhoneInput);
