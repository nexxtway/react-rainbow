import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTimer, useClockStyle } from './hooks';
import { isSameDay } from '../Calendar/helpers';
import StyledHours from './styled/hours';
import StyledHour from './styled/hour';
import StyledClock from './styled/clock';
import StyledTitleHour from './styled/titleHour';

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
            const formattedHours = new Intl.DateTimeFormat(locale, {
                hour: 'numeric',
                hour12: true,
            }).format(hour);
            return (
                <StyledHour key={index}>
                    <StyledTitleHour visible={before < hour || after > hour}>
                        {formattedHours}
                    </StyledTitleHour>
                </StyledHour>
            );
        });
    }
    const formattedClock = new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }).format(clock);

    const style = useClockStyle(clock);

    return (
        <StyledHours ref={ref} data-id="25">
            <ListHours />
            <StyledClock style={style}>{formattedClock}</StyledClock>
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
