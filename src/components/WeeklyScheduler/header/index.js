import React from 'react';
import PropTypes from 'prop-types';
import { addDays } from '../../Calendar/helpers';
import { isToday } from '../helpers';
import StyledHeader from './styled/header';
import StyledDay from './styled/day';
import StyledDays from './styled/days';
import StyledHours from './styled/hours';

const Header = React.forwardRef((props, ref) => {
    const { currentWeek, locale } = props;

    function Days() {
        let date = new Date(currentWeek);
        const days = [];

        for (let i = 0; i < 7; i += 1) {
            const today = isToday(date);
            days.push(
                <StyledDay isToday={today} key={date.getDate()}>
                    <div>
                        <h4>
                            {new Intl.DateTimeFormat(locale, {
                                weekday: 'short',
                            }).format(date)}
                        </h4>
                        <h1>
                            {new Intl.DateTimeFormat(locale, {
                                day: 'numeric',
                            }).format(date)}
                        </h1>
                    </div>
                </StyledDay>,
            );
            date = addDays(date, 1);
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
    locale: PropTypes.string,
    currentWeek: PropTypes.instanceOf(Date),
};

Header.defaultProps = {
    currentWeek: undefined,
    locale: undefined,
};

export default Header;
