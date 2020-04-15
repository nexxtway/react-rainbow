import React from 'react';
import PropTypes from 'prop-types';
import { addDays, isSameDay } from '../../Calendar/helpers';
import StyledHeader from './styled/header';
import StyledDay from './styled/day';
import StyledDays from './styled/days';
import StyledHours from './styled/hours';

const Header = React.forwardRef((props, ref) => {
    const { week, today, locale } = props;

    function Days() {
        let day = new Date(week);
        return Array.from(Array(7), (_value, index) => {
            const formattedWeekDay = new Intl.DateTimeFormat(locale, {
                weekday: 'short',
            }).format(day);
            const formattedDay = new Intl.DateTimeFormat(locale, {
                day: 'numeric',
            }).format(day);
            const item = (
                <StyledDay isToday={isSameDay(today, day)} key={index}>
                    <div>
                        <p>{formattedWeekDay}</p>
                        <h1>{formattedDay}</h1>
                    </div>
                </StyledDay>
            );
            day = addDays(day, 1);
            return item;
        });
    }
    return (
        <StyledHeader role="presentation">
            <StyledHours>
                <h2>Hr</h2>
            </StyledHours>
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
