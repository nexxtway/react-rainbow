##### Weekly Calendar basic

```js
import React from 'react';
import styled from 'styled-components';
import { WeeklyCalendar, Card } from 'react-rainbow-components';

const titles = [
    'Leandro Torres',
    'JL Torres',
    'Reinier',
    'Sara',
    'Tahimi L',
    'Sara',
    'Leandro Torres',
    'Tahimi',
    'Sara P',
    'Leo Torres',
    'Tahimi',
    'Jose Torres',
    'Reinier',
    'Tahimi',
    'Tahimi Leon',
    'Leandro Torres',
    'Sara Pacheco',
    'Jose Torres',
    'Reinier',
    'Tahimi',
    'Leandro Torres',
    'Sara',
    'Saray',
    'Leandro Torres',
    'Reinier G',
    'Tahy',
    'Leandro Torres',
    'Rey',
    'Jose Torres',
    'S Pacheco',
    'T Leon',
    'Jose Torres',
    'Yuri V. Munayev',
];
const randomDate = (minDate, maxDate) => {
    return new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()));
}
const randomMinutes = (min, max) => (Math.floor(Math.random() * (max - min + 1) ) + min) * 30;
const randomEvents = (minDate, maxDate) => {
    let events = [];
    const firstDay = new Date(minDate);
    const lastDay = new Date(minDate);
    lastDay.setDate(lastDay.getDate() + 7);
    while (lastDay <= maxDate) {
        events = events.concat(titles.map( title => {
            const startDate = randomDate(firstDay, lastDay);
            startDate.setMinutes(randomMinutes(0, 1));
            const endDate = new Date(startDate);
            endDate.setMinutes(endDate.getMinutes() + 30);
            return {title, startDate, endDate };
        }));
        firstDay.setDate(firstDay.getDate() + 7);
        lastDay.setDate(lastDay.getDate() + 7);
    }
    return events;
};

const minDate = new Date();
minDate.setHours(0, 0, 0, 0);
minDate.setDate(minDate.getDate() - minDate.getDay() - 7);
const maxDate = new Date(minDate);
maxDate.setDate(maxDate.getDate() + 21);

const events = randomEvents(minDate, maxDate);

const Container = styled.div`
    padding: 10px;
`;
const StyledCard = styled(Card)`
    height: 600px;
    padding: 1rem;
`;
const initialState = {
    currentWeek: new Date(),
};

<Container>
    <StyledCard>
        <WeeklyCalendar
            events={events}
            currentWeek={state.currentWeek}
            onWeekChange={({ week }) => setState({ currentWeek: week })}
            minDate={minDate}
            maxDate={maxDate}
            locale="en"
        />
    </StyledCard>
</Container>
```
