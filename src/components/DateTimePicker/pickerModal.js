import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import extractDate from './helpers/extractDate';
import extractTime from './helpers/extractTime';
import formatDateTime from './helpers/formatDateTime';
import StyledModal from './styled/modal';
import StyledHeader from './styled/header';
import StyledH2 from './styled/h2';
import StyledResponsiveContainer from './styled/responsiveContainer';
import StyledCalendar from './styled/calendar';
import StyledDivider from './styled/divider';
import StyledTimeSelect from './styled/timeSelect';

function DateTimePickerModal(props) {
    const {
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
    } = props;

    const [date, setDate] = useState(value);
    const [time, setTime] = useState(extractTime(value));
    const [modalTitle, setModalTitle] = useState(title);

    useEffect(() => {
        setDate(value);
        setTime(!value ? '' : extractTime(value));
    }, [value]);

    useEffect(() => {
        const currentDateTime = new Date(`${extractDate(date)} ${time}`);
        setModalTitle(formatDateTime(currentDateTime, formatStyle));
    }, [date, time, formatStyle]);

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
        <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
            <StyledHeader>
                <StyledH2>{modalTitle}</StyledH2>
            </StyledHeader>
            <StyledResponsiveContainer>
                <StyledCalendar
                    value={date}
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
                />
            </StyledResponsiveContainer>
        </StyledModal>
    );
}

DateTimePickerModal.propTypes = {
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
};

DateTimePickerModal.defaultProps = {
    title: undefined,
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    okLabel: 'Ok',
    cancelLabel: 'Cancel',
    onChange: () => {},
};

export default DateTimePickerModal;
