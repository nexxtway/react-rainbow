import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import extractDate from './helpers/extractDate';
import extractTime from './helpers/extractTime';
import formatDateTime from './helpers/formatDateTime';
import StyledModal from './styled/modal';
import StyledHeader from './styled/header';
import StyledTitle from './styled/title';
import StyledResponsiveContainer from './styled/responsiveContainer';
import StyledCalendar from './styled/calendar';
import StyledDivider from './styled/divider';
import StyledTimeSelect from './styled/timeSelect';

function DateTimePickerModal(props) {
    const {
        id,
        isOpen,
        title,
        value,
        minDate,
        maxDate,
        formatStyle,
        okLabel,
        cancelLabel,
        onRequestClose,
        onChange,
        locale,
        hour24,
    } = props;

    const [date, setDate] = useState(value);
    const [time, setTime] = useState(extractTime(value, hour24));
    const [modalTitle, setModalTitle] = useState(title);

    useEffect(() => {
        setDate(value);
        setTime(!value ? '' : extractTime(value, hour24));
    }, [isOpen, value, hour24]);

    useEffect(() => {
        const currentDateTime = new Date(`${extractDate(date)} ${time}`);
        setModalTitle(formatDateTime(currentDateTime, formatStyle, locale, hour24));
    }, [date, time, formatStyle, locale, hour24]);

    const handleChange = selectedTime => {
        const currentValue = new Date(`${extractDate(date)} ${selectedTime}`);
        onChange(currentValue);
    };

    const handleDateChange = selectedDate => {
        setDate(selectedDate);
        if (!value && !time) {
            setTime('12:00 AM');
        }
    };

    return (
        <StyledModal id={id} isOpen={isOpen} onRequestClose={onRequestClose}>
            <StyledHeader>
                <StyledTitle>{modalTitle}</StyledTitle>
            </StyledHeader>
            <StyledResponsiveContainer>
                <StyledCalendar
                    value={date}
                    locale={locale}
                    minDate={minDate}
                    maxDate={maxDate}
                    formatStyle={formatStyle}
                    onChange={handleDateChange}
                />
                <StyledDivider />
                <StyledTimeSelect
                    value={time}
                    okLabel={okLabel}
                    cancelLabel={cancelLabel}
                    onCloseModal={onRequestClose}
                    onChange={handleChange}
                    hour24={hour24}
                />
            </StyledResponsiveContainer>
        </StyledModal>
    );
}

DateTimePickerModal.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    onRequestClose: PropTypes.func.isRequired,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    onChange: PropTypes.func,
    locale: PropTypes.string,
    hour24: PropTypes.bool,
};

DateTimePickerModal.defaultProps = {
    id: undefined,
    title: undefined,
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    okLabel: 'Ok',
    cancelLabel: 'Cancel',
    onChange: () => {},
    locale: undefined,
    hour24: false,
};

export default DateTimePickerModal;
