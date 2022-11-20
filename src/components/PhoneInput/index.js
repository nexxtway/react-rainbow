/* eslint-disable react/no-unused-prop-types */
import React, { useRef, useImperativeHandle, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useOutsideClick, useScrollingIntent } from '@rainbow-modules/hooks';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import StyledContainer from '../Input/styled/container';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import AssistiveText from '../AssistiveText';
import InternalOverlay from '../InternalOverlay';
import {
    StyledInputContainer,
    StyledInput,
    StyledIndicator,
    StyledTrigger,
    StyledFlagContainer,
    StyledCountryCode,
    StyledIconContainer,
    StyledFlagIcon,
} from './styled';
import {
    useUniqueIdentifier,
    useReduxForm,
    useErrorMessageId,
    useLabelId,
    useWindowResize,
} from '../../libs/hooks';
import { useCountry, useCountries } from './hooks';
import CountriesDropdown from './countriesDropdown';
import positionResolver from './helpers/positionResolver';

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
        bottomHelpText,
        required,
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
        labelAlignment,
        hideLabel,
        countries: countriesProps,
        size,
        borderRadius,
    } = useReduxForm(props);

    const containerRef = useRef();
    const triggerRef = useRef();
    const searchRef = useRef();
    const inputRef = useRef();
    const pickerRef = useRef();
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
    const [isOpen, setIsOpen] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);

    useOutsideClick(
        pickerRef,
        event => {
            if (
                event.target !== triggerRef.current &&
                !triggerRef.current.contains(event.target) &&
                !pickerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        },
        isOpen,
    );
    useScrollingIntent({
        callback: () => setIsOpen(false),
        isListening: isOpen,
        triggerElementRef: () => triggerRef,
        threshold: 10,
    });
    useWindowResize(() => setIsOpen(false), isOpen);

    useEffect(() => {
        if (isOpen) searchRef.current.focus();
    }, [isOpen]);

    const handleFocus = () => {
        if (!hasFocus) {
            setHasFocus(true);
            onFocus(value);
        }
    };
    const handleBlur = event => {
        const { relatedTarget } = event;
        if (
            relatedTarget !== null &&
            !containerRef.current.contains(relatedTarget) &&
            (!pickerRef.current || !pickerRef.current.contains(relatedTarget))
        ) {
            setHasFocus(false);
            onBlur(value);
        }
    };

    const onCountryChange = newCountry => {
        setIsOpen(false);
        inputRef.current.focus();
        onChange({
            ...value,
            isoCode: newCountry.isoCode,
            countryCode: newCountry.countryCode,
        });
    };

    const handlePhoneChange = event => {
        const rawPhone = event.target.value;
        const newPhone = rawPhone.replace(/\D/g, '');
        onChange({
            countryCode,
            isoCode,
            phone: newPhone,
        });
    };

    const handleClick = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

    const handleKeyDown = event => {
        if (event.key === 'Tab' || event.key === 'Escape') {
            event.preventDefault();
            setIsOpen(false);
            inputRef.current.focus();
        }
    };

    const formattedCountryCode = `(${countryCode})`;

    const isReadOnly = readOnly && !disabled;
    const hasTrigger = !isReadOnly && countries.length > 1;
    const isOnlyCountry = !isReadOnly && countries.length === 1;

    return (
        <StyledContainer
            id={id}
            ref={containerRef}
            className={className}
            style={style}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <Label
                label={label}
                labelAlignment={labelAlignment}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={readOnly}
                id={labelId}
                size={size}
            />
            <StyledInputContainer
                disabled={disabled}
                readOnly={readOnly}
                iconPosition="right"
                icon={icon}
                error={error}
                isFocus={hasFocus}
                size={size}
                borderRadius={borderRadius}
            >
                <RenderIf isTrue={isReadOnly}>
                    <StyledFlagContainer readOnly>
                        <StyledFlagIcon as={flagIcon} size={size} />
                    </StyledFlagContainer>
                </RenderIf>
                <RenderIf isTrue={hasTrigger}>
                    <StyledTrigger
                        ref={triggerRef}
                        onClick={handleClick}
                        tabIndex={tabIndex}
                        disabled={disabled}
                        type="button"
                        size={size}
                    >
                        <StyledFlagContainer disabled={disabled}>
                            <StyledFlagIcon as={flagIcon} size={size} />
                            <StyledIndicator error={error} disabled={disabled} />
                        </StyledFlagContainer>
                        <AssistiveText text="select country" />
                    </StyledTrigger>
                </RenderIf>
                <RenderIf isTrue={isOnlyCountry}>
                    <StyledTrigger ref={triggerRef} tabIndex={tabIndex} disabled={disabled}>
                        <StyledFlagContainer disabled={disabled}>
                            <StyledFlagIcon as={flagIcon} size={size} />
                        </StyledFlagContainer>
                    </StyledTrigger>
                </RenderIf>
                <StyledCountryCode size={size}>{formattedCountryCode}</StyledCountryCode>
                <StyledInput
                    id={inputId}
                    ref={inputRef}
                    name={name}
                    value={phone}
                    type="tel"
                    placeholder={placeholder}
                    tabIndex={tabIndex}
                    onClick={onClick}
                    onChange={handlePhoneChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    aria-labelledby={labelId}
                    aria-describedby={errorMessageId}
                    iconPosition="right"
                    icon={icon}
                    error={error}
                    size={size}
                />
                <RenderIf isTrue={icon}>
                    <StyledIconContainer error={error}>{icon}</StyledIconContainer>
                </RenderIf>
            </StyledInputContainer>
            <RenderIf isTrue={bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={error}>
                <ErrorText alignSelf="center" id={errorMessageId}>
                    {error}
                </ErrorText>
            </RenderIf>
            <InternalOverlay
                isVisible={isOpen}
                positionResolver={positionResolver}
                triggerElementRef={() => containerRef}
                keepScrollEnabled
            >
                <CountriesDropdown
                    country={country}
                    countries={countries}
                    isOpen={isOpen}
                    searchRef={searchRef}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onCountryChange={onCountryChange}
                    ref={pickerRef}
                />
            </InternalOverlay>
        </StyledContainer>
    );
});

PhoneInput.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            countryCode: PropTypes.string,
            isoCode: PropTypes.string,
            phone: PropTypes.string,
        }),
    ]),
    /** The name of the input. */
    name: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the PhoneInput label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the PhoneInput label. */
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
    /** Specifies the available countries for selection. */
    countries: PropTypes.array,
    /** The size of the input. Valid values are small, medium, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The border radius of the input. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

PhoneInput.defaultProps = {
    id: undefined,
    name: undefined,
    placeholder: null,
    icon: undefined,
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    bottomHelpText: null,
    required: false,
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
    size: 'medium',
    borderRadius: 'rounded',
    value: {
        countryCode: '+1',
        isoCode: 'us',
        phone: '',
    },
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
