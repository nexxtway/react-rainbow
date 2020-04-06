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
        const days = [];

        for (let i = 0; i < 7; i += 1) {
            days.push(
                <StyledDay isToday={isSameDay(today, day)} key={i}>
                    <div>
                        <h4>
                            {new Intl.DateTimeFormat(locale, {
                                weekday: 'short',
                            }).format(day)}
                        </h4>
                        <h1>
                            {new Intl.DateTimeFormat(locale, {
                                day: 'numeric',
                            }).format(day)}
                        </h1>
                    </div>
                </StyledDay>,
            );
            day = addDays(day, 1);
        }
        return days;
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
