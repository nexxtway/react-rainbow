##### Weekly Scheduler basic

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
];
const minDate = new Date();
minDate.setDate(minDate.getDate() - minDate.getDay() - 7);
const maxDate = new Date(minDate);
maxDate.setDate(maxDate.getDate() + 21);

const randomDate = () => {
    return new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()));
}
const randomMinutes = (min, max) => (Math.floor(Math.random() * (max - min + 1) ) + min) * 5;

const events = titles.map( title => {
    const startDate = randomDate();
    startDate.setMinutes(randomMinutes(0, 12));
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + randomMinutes(3, 12));
    return {title, startDate, endDate };
});
const startDate = new Date();
startDate.setMinutes(0);
const endDate = new Date(startDate);
endDate.setMinutes(30);
events.push({title: 'Yuri V. Munayev', startDate, endDate });

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
