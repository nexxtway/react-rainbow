import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTimer } from './hooks';
import { isSameDay } from '../Calendar/helpers';
import { getHeightOfDate } from './helpers';
import StyledHours from './styled/hours';
import StyledHour from './styled/hour';
import StyledClock from './styled/clock';

const Hours = React.forwardRef((props, ref) => {
    const { today, setToday, locale } = props;
    const clock = useTimer();
    useEffect(() => {
        if (!isSameDay(today, clock)) {
            setToday(clock);
        }
    }, [clock, setToday, today]);

    const before = new Date(clock);
    before.setMinutes(before.getMinutes() + 15);
    const after = new Date(clock);
    after.setMinutes(after.getMinutes() - 15);

    function ListHours() {
        const hour = new Date();
        hour.setMinutes(0);
        hour.setSeconds(0);
        const hours = [];

        for (let i = 0; i < 24; i += 1) {
            hour.setHours(i);
            hours.push(
                <StyledHour key={i} visible={before < hour || after > hour}>
                    <span>
                        {new Intl.DateTimeFormat(locale, {
                            hour: 'numeric',
                            hour12: true,
                        }).format(hour)}
                    </span>
                </StyledHour>,
            );
        }
        return hours;
    }

    return (
        <StyledHours ref={ref}>
            <ListHours />
            <StyledClock clockHeight={() => getHeightOfDate(clock) - 8}>
                {new Intl.DateTimeFormat(locale, {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                }).format(clock)}
            </StyledClock>
        </StyledHours>
    );
});

Hours.propTypes = {
    locale: PropTypes.string,
    today: PropTypes.instanceOf(Date),
    setToday: PropTypes.func,
};

Hours.defaultProps = {
    locale: undefined,
    today: undefined,
    setToday: () => {},
};

export default Hours;
