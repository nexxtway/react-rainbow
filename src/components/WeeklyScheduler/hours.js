import React from 'react';
import StyledContentHours from './styled/contentHours';
import StyledHour from './styled/hour';

export default function Hours() {
    const locale = 'en';
    function getHours() {
        const date = new Date();
        date.setMinutes(0);
        const hours = [];

        for (let i = 0; i < 24; i += 1) {
            date.setHours(i);
            hours.push(
                <StyledHour>
                    <span>
                        {new Intl.DateTimeFormat(locale, {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                        }).format(date)}
                    </span>
                </StyledHour>,
            );
        }
        return hours;
    }

    return <StyledContentHours>{getHours()}</StyledContentHours>;
}
