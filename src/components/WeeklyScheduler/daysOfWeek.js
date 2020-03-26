import React from 'react';
import { PropTypes } from 'prop-types';
import { addDays } from './helpers';
import StyledHeader from './styled/header';
import StyledHeaderDay from './styled/headerDay';
import StyledHearderDays from './styled/headerDays';
import StyledHeaderHours from './styled/headerHours';

export default function DaysOfWeek({ locale, currentWeek }) {
    function Days() {
        let date = new Date(currentWeek);
        const days = [];

        for (let i = 0; i < 7; i += 1) {
            days.push(
                <StyledHeaderDay>
                    <div />
                    <h2>
                        {new Intl.DateTimeFormat(locale, {
                            weekday: 'short',
                            day: 'numeric',
                        }).format(date)}
                    </h2>
                </StyledHeaderDay>,
            );
            date = addDays(date, 1);
        }
        return days;
    }
    return (
        <StyledHeader role="presentation">
            <StyledHeaderHours>Hr</StyledHeaderHours>
            <StyledHearderDays>
                <div />
                <Days />
                <div />
            </StyledHearderDays>
        </StyledHeader>
    );
}

DaysOfWeek.propTypes = {
    locale: PropTypes.string,
    currentWeek: PropTypes.instanceOf(Date),
};

DaysOfWeek.defaultProps = {
    locale: undefined,
    currentWeek: undefined,
};
