import React from 'react';
import PropTypes from 'prop-types';
import { addDays, isSameDay } from '../../Calendar/helpers';
import StyledHeader from './styled/header';
import StyledDay from './styled/day';
import StyledDays from './styled/days';
import StyledHours from './styled/hours';
import StyledContentDay from './styled/contentDay';
import StyledWeekDay from './styled/weekDay';
import StyledNumberDay from './styled/numberDay';
import { useFormatedWeekDay, useFormattedNumberDay } from './hooks';

const timeZone = new Date().toTimeString().substring(9, 15);

const Header = React.forwardRef((props, ref) => {
    const { week, today, locale } = props;
    const formattedWeekDay = useFormatedWeekDay(locale);
    const formattedNumberDay = useFormattedNumberDay(locale);

    function Days() {
        return Array.from(Array(7), (_value, index) => {
            const day = addDays(week, index);
            return (
                <StyledDay key={index}>
                    <StyledContentDay isToday={isSameDay(today, day)}>
                        <StyledWeekDay>{formattedWeekDay(day)}</StyledWeekDay>
                        <StyledNumberDay>{formattedNumberDay(day)}</StyledNumberDay>
                    </StyledContentDay>
                </StyledDay>
            );
        });
    }
    return (
        <StyledHeader role="presentation">
            <StyledHours>{timeZone}</StyledHours>
            <StyledDays ref={ref}>
                <div />
                <Days />
            </StyledDays>
            <div />
        </StyledHeader>
    );
});

Header.propTypes = {
    week: PropTypes.instanceOf(Date),
    today: PropTypes.instanceOf(Date),
    locale: PropTypes.string,
};

Header.defaultProps = {
    week: undefined,
    today: undefined,
    locale: undefined,
};

export default Header;
