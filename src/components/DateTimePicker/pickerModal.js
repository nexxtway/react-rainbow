import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Calendar from '../Calendar';
import TimeSelect from '../TimePicker/timeSelect';
import extractDate from './helpers/extractDate';
import extractTime from './helpers/extractTime';
import StyledModal from './styled/modal';
import StyledHeader from './styled/header';
import StyledH2 from './styled/h2';
import StyledResponsiveContainer from './styled/responsiveContainer';
import StyledDivider from './styled/divider';

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

    useEffect(() => {
        if (isOpen) {
            setDate(value);
            setTime(!value ? '' : extractTime(value));
        }
    }, [isOpen, value]);

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
                <StyledH2>{title}</StyledH2>
            </StyledHeader>
            <StyledResponsiveContainer>
                <Calendar
                    value={date}
                    minDate={minDate}
                    maxDate={maxDate}
                    formatStyle={formatStyle}
                    onChange={handleDateChange}
                />
                <StyledDivider />
                <TimeSelect
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
    value: PropTypes.instanceOf(Date),
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
