import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTimer } from './hooks';
import { isSameDay } from '../Calendar/helpers';
import { getHeightOfDate, getFormattedClock, getFormattedHour } from './helpers';
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
        return Array.from(Array(24), (_value, index) => {
            hour.setHours(index);
            return (
                <StyledHour key={index} visible={before < hour || after > hour}>
                    <span>{getFormattedHour(hour, locale)}</span>
                </StyledHour>
            );
        });
    }

    return (
        <StyledHours ref={ref}>
            <ListHours />
            <StyledClock clockHeight={() => getHeightOfDate(clock) - 8}>
                {getFormattedClock(clock, locale)}
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
