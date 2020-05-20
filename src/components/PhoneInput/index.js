import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import StyledContainer from '../Input/styled/container';
import StyledIconContainer from '../Input/styled/iconContainer';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import {
    StyledInput,
    StyledIndicator,
    StyledTrigger,
    StyledFlagContainer,
    StyledCountryCode,
} from './styled';
import { useUniqueIdentifier, useReduxForm, useErrorMessageId, useLabelId } from '../../libs/hooks';
import {
    useCountry,
    useCountries,
    useFocusIndex,
    useHandleFocus,
    useHandleBlur,
    useHandleCountryChange,
} from './hooks';
import CountriesDropdown from './countriesDropdown';

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
        error,
        disabled,
        readOnly,
        tabIndex,
        onChange,
        onClick,
        onFocus,
        onBlur,
        className,
        style,
        id,
        label,
        hideLabel,
        countries: countriesProps,
    } = useReduxForm(props);

    const containerRef = useRef();
    const triggerRef = useRef();
    const searchRef = useRef();
    const inputRef = useRef();
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

    const inputId = useUniqueIdentifier('phone-input');
    const errorMessageId = useErrorMessageId(error);
    const labelId = useLabelId(label);

    const phone = (value && value.phone) || '';
    const countries = useCountries(countriesProps);
    const country = useCountry(value, countries);
    const { countryCode, isoCode, flagIcon } = country;
    const [focusIndex, setFocusIndex] = useFocusIndex(
        containerRef,
        triggerRef,
        searchRef,
        inputRef,
    );
    const isOpen = focusIndex === 1;
    const handleFocus = useHandleFocus(focusIndex, onFocus, setFocusIndex);
    const handleBlur = useHandleBlur(focusIndex, onBlur);
    const handleCountryChange = useHandleCountryChange(phone, onChange, setFocusIndex, isOpen);

    function handlePhoneChange(event) {
        const newPhone = event.target.value;
        if (!isNaN(newPhone) || newPhone === '') {
            onChange({
                countryCode,
                isoCode,
                phone: newPhone,
            });
        }
    }

    function handleClick() {
        if (focusIndex === 1) {
            setFocusIndex(0);
        } else {
            setFocusIndex(1);
        }
    }

    const isFocus = focusIndex > -1;
    const formattedCountryCode = `(${countryCode})`;

    return (
        <StyledContainer id={id} ref={containerRef} className={className} style={style}>
            <Label
                label={label}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={readOnly}
                id={labelId}
            />
            <RelativeElement>
                <RenderIf isTrue={!!icon}>
                    <StyledIconContainer iconPosition="right" readOnly={readOnly} error={error}>
                        {icon}
                    </StyledIconContainer>
                </RenderIf>

                <StyledTrigger
                    ref={triggerRef}
                    onClick={handleClick}
                    onFocus={event => handleFocus(event, 0)}
                    onBlur={handleBlur}
                    tabIndex={tabIndex}
                >
                    <StyledFlagContainer>
                        {flagIcon}
                        <StyledIndicator error={error} disabled={disabled} />
                    </StyledFlagContainer>
                    <StyledCountryCode>{formattedCountryCode}</StyledCountryCode>
                </StyledTrigger>
                <StyledInput
                    id={inputId}
                    ref={inputRef}
                    name={name}
                    value={phone}
                    type="tel"
                    placeholder={placeholder}
                    tabIndex={tabIndex}
                    onFocus={event => handleFocus(event, 2)}
                    onBlur={handleBlur}
                    onClick={onClick}
                    onChange={handlePhoneChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    pattern={pattern}
                    aria-labelledby={labelId}
                    aria-describedby={errorMessageId}
                    iconPosition="right"
                    icon={icon}
                    error={error}
                    isFocus={isFocus}
                />

                <CountriesDropdown
                    country={country}
                    countries={countries}
                    isOpen={isOpen}
                    searchRef={searchRef}
                    setFocusIndex={setFocusIndex}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    onCountryChange={handleCountryChange}
                />
            </RelativeElement>

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

PhoneInput.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    countries: PropTypes.array,
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
    error: null,
    disabled: false,
    readOnly: false,
    tabIndex: undefined,
    className: undefined,
    style: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    value: undefined,
    countries: [
        'af',
        'ax',
        'al',
        'dz',
        'as',
        'ad',
        'ao',
        'ai',
        'ag',
        'ar',
        'am',
        'aw',
        'ac',
        'au',
        'at',
        'az',
        'bs',
        'bh',
        'bd',
        'bb',
        'by',
        'be',
        'bz',
        'bj',
        'bm',
        'bt',
        'bo',
        'bq',
        'ba',
        'bw',
        'br',
        'vg',
        'bn',
        'bg',
        'bf',
        'bi',
        'kh',
        'cm',
        'ca',
        'cv',
        'ky',
        'cf',
        'td',
        'cl',
        'cn',
        'cx',
        'cc',
        'co',
        'km',
        'cg',
        'cd',
        'ck',
        'cr',
        'ci',
        'hr',
        'cu',
        'cw',
        'cy',
        'cz',
        'dk',
        'dj',
        'dm',
        'do',
        'ec',
        'eg',
        'sv',
        'gq',
        'er',
        'ee',
        'et',
        'fk',
        'fo',
        'fj',
        'fi',
        'fr',
        'gf',
        'pf',
        'ga',
        'gm',
        'ge',
        'de',
        'gh',
        'gi',
        'gr',
        'gl',
        'gd',
        'gp',
        'gu',
        'gt',
        'gg',
        'gn',
        'gw',
        'gy',
        'ht',
        'hn',
        'hk',
        'hu',
        'is',
        'in',
        'id',
        'ir',
        'iq',
        'ie',
        'im',
        'il',
        'it',
        'jm',
        'jp',
        'je',
        'jo',
        'kz',
        'ke',
        'ki',
        'kv',
        'kw',
        'kg',
        'la',
        'lv',
        'lb',
        'ls',
        'lr',
        'ly',
        'li',
        'lt',
        'lu',
        'mo',
        'mk',
        'mg',
        'mw',
        'my',
        'mv',
        'ml',
        'mt',
        'mh',
        'mq',
        'mr',
        'mu',
        'yt',
        'mx',
        'fm',
        'md',
        'mc',
        'mn',
        'me',
        'ms',
        'ma',
        'mz',
        'mm',
        'na',
        'nr',
        'np',
        'nl',
        'nc',
        'nz',
        'ni',
        'ne',
        'ng',
        'nu',
        'nf',
        'kp',
        'mp',
        'no',
        'om',
        'pk',
        'pw',
        'ps',
        'pa',
        'pg',
        'py',
        'pe',
        'ph',
        'pl',
        'pt',
        'pr',
        'qa',
        're',
        'ro',
        'ru',
        'rw',
        'bl',
        'sh',
        'kn',
        'lc',
        'mf',
        'pm',
        'vc',
        'ws',
        'sm',
        'st',
        'sa',
        'sn',
        'rs',
        'sc',
        'sl',
        'sg',
        'sx',
        'sk',
        'si',
        'sb',
        'so',
        'za',
        'kr',
        'ss',
        'es',
        'lk',
        'sd',
        'sr',
        'sj',
        'sz',
        'se',
        'ch',
        'sy',
        'tw',
        'tj',
        'tz',
        'th',
        'tl',
        'tg',
        'tk',
        'to',
        'tt',
        'tn',
        'tr',
        'tm',
        'tc',
        'tv',
        'vi',
        'ug',
        'ua',
        'ae',
        'gb',
        'us',
        'uy',
        'uz',
        'vu',
        'va',
        've',
        'vn',
        'wf',
        'ye',
        'zm',
        'zw',
    ],
};

export default PhoneInput;
