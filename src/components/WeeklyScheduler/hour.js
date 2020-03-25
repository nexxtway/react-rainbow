import React from 'react';
import PropTypes from 'prop-types';
import { addDays, getHours } from './helpers';
import Day from './day';
import StyledDay from './styled/day';

export default function Hour(props) {
    const { currentWeek, hour, onChange } = props;
    const locale = 'en';
    function Days() {
        const date = new Date(currentWeek);
        const hourCell = (
            <StyledDay role="gridcell">
                {new Intl.DateTimeFormat(locale, {
                    hour: 'numeric',
                    minute: 'numeric',
                }).format(date.setHours(hour))}
            </StyledDay>
        );
        const hours = [hourCell];

        for (let i = 0; i < 7; i += 1) {
            date.setHours(hour);
            hours.push(<Day date={date} key={date.getTime()} onChange={onChange} />);
            addDays(date, 1);
        }
        return hours;
    }

    return (
        <tr>
            <Days />
        </tr>
    );
}

Hour.propTypes = {
    currentWeek: PropTypes.instanceOf(Date),
    hour: PropTypes.oneOf(getHours()),
    onChange: PropTypes.func,
};

Hour.defaultProps = {
    currentWeek: undefined,
    hour: undefined,
    onChange: () => {},
};
