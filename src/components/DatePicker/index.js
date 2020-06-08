import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { useLocale } from '../../libs/hooks';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import CalendarIcon from './calendarIcon';
import { useFormatDate, useDisclosure } from './hooks';
import DatePickerModal from '../DatePickerModal';
import { StyledContainer, StyledInput } from './styled';

const DatePicker = React.forwardRef((props, ref) => {
    const {
        value,
        minDate,
        maxDate,
        placeholder,
        onClick,
        onChange,
        onFocus,
        onBlur,
        label,
        required,
        style,
        className,
        formatStyle,
        hideLabel,
        name,
        bottomHelpText,
        isCentered,
        error,
        readOnly,
        disabled,
        tabIndex,
        id,
        locale,
        variant,
        selectionType,
    } = props;

    const currentLocale = useLocale(locale);
    const inputRef = useRef();
    const formattedDate = useFormatDate(value, formatStyle, currentLocale, selectionType);
    const { isOpen, open: openModal, close: closeModal } = useDisclosure(false);
    const modalId = id && `${id}_modal`;

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

    const handleFocus = () => {
        onFocus(value);
    };

    const handleBlur = () => {
        onBlur(value);
    };

    const handleChange = useCallback(
        newValue => {
            if (selectionType === 'single' || newValue.length > 1) {
                closeModal();
            }
            onChange(newValue);
        },
        [closeModal, onChange, selectionType],
    );

    const handleClick = useCallback(
        event => {
            if (!readOnly) {
                openModal();
                onClick(event);
            }
        },
        [onClick, openModal, readOnly],
    );

    const handleKeyDown = useCallback(
        ({ keyCode }) => {
            const shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
            if (shouldOpenModal) openModal();
        },
        [openModal, readOnly],
    );

    return (
        <StyledContainer id={id} className={className} style={style}>
            <StyledInput
                ref={inputRef}
                label={label}
                placeholder={placeholder}
                icon={<CalendarIcon />}
                iconPosition="right"
                required={required}
                value={formattedDate}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
                hideLabel={hideLabel}
                name={name}
                bottomHelpText={bottomHelpText}
                isCentered={isCentered}
                error={error}
                readOnly={readOnly}
                disabled={disabled}
                tabIndex={tabIndex}
            />
            <DatePickerModal
                id={modalId}
                isOpen={isOpen}
                title={formattedDate || placeholder}
                variant={variant}
                locale={currentLocale}
                selectionType={selectionType}
                minDate={minDate}
                maxDate={maxDate}
                value={value}
                onChange={handleChange}
                onRequestClose={closeModal}
            />
        </StyledContainer>
    );
});

DatePicker.propTypes = {
    /** Sets the date for the DatePicker programmatically. */
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /**  The date format style to display in the input field.
     * Valid values are small, medium, and large. */
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the DatePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the DatePicker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the DatePicker label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the DatePicker field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the DatePicker. */
    name: PropTypes.string,
    /** Shows the help message below the DatePicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the DatePicker text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that the DatePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the DatePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that the DatePicker element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The DatePicker locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** The type of the selection. It can be a single date or a range. The default value is 'single'. */
    selectionType: PropTypes.oneOf(['single', 'range']),
    /** The calendar variant. Defaults to 'single' */
    variant: PropTypes.oneOf(['single', 'double']),
};

DatePicker.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    formatStyle: 'medium',
    onChange: () => {},
    placeholder: undefined,
    label: undefined,
    hideLabel: false,
    required: false,
    name: undefined,
    bottomHelpText: null,
    isCentered: false,
    error: null,
    readOnly: false,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    locale: undefined,
    selectionType: 'single',
    variant: 'single',
};

export default withReduxForm(DatePicker);
