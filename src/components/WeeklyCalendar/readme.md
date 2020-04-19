##### Weekly Calendar basic

```js
import React from 'react';
import styled from 'styled-components';
import { WeeklyCalendar, Card } from 'react-rainbow-components';

const firstDay = new Date();
firstDay.setDate(firstDay.getDate() - firstDay.getDay());
const daysOfWeek = Array.from(Array(7), (_value, index) => {
    const day = new Date(firstDay);
    day.setDate(day.getDate() + index);
    return day;
});

const events = [
    {
        id: 1,
        title: 'Leandro Torres',
        startDate: new Date(daysOfWeek[0].setHours(6, 0, 0, 0)),
        endDate: new Date(daysOfWeek[0].setHours(6,30, 0, 0)),
    },
    {
        id: 2,
        title: 'JL Torres',
        startDate: new Date(daysOfWeek[0].setHours(7, 30, 0, 0)),
        endDate: new Date(daysOfWeek[0].setHours(8, 0, 0, 0)),
    },
    {
        id: 3,
        title: 'Reinier',
        startDate: new Date(daysOfWeek[0].setHours(10, 0, 0, 0)),
        endDate: new Date(daysOfWeek[0].setHours(11, 15, 0, 0)),
    },
    {
        id: 4,
        title: 'Yuri V. Munayev',
        startDate: new Date(daysOfWeek[1].setHours(6, 30, 0, 0)),
        endDate: new Date(daysOfWeek[1].setHours(7, 30, 0, 0)),
    },
    {
        id: 5,
        title: 'Tahimi L',
        startDate: new Date(daysOfWeek[2].setHours(8, 0, 0, 0)),
        endDate: new Date(daysOfWeek[2].setHours(9, 30, 0, 0)),
    },
    {
        id: 6,
        title: 'Sara',
        startDate: new Date(daysOfWeek[3].setHours(6, 0, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(6, 30, 0, 0)),
    },
    {
        id: 7,
        title: 'Leandro Torres',
        startDate: new Date(daysOfWeek[3].setHours(6, 30, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(7, 0, 0, 0)),
    },
    {
        id: 8,
        title: 'Tahimi',
        startDate: new Date(daysOfWeek[3].setHours(7, 30, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(8, 0, 0, 0)),
    },
    {
        id: 9,
        title: 'Sara P',
        startDate: new Date(daysOfWeek[4].setHours(6, 30, 0, 0)),
        endDate: new Date(daysOfWeek[4].setHours(8, 0, 0, 0)),
    },
    {
        id: 10,
        title: 'Leo Torres',
        startDate: new Date(daysOfWeek[5].setHours(6, 0, 0, 0)),
        endDate: new Date(daysOfWeek[5].setHours(7, 0, 0, 0)),
    },
    {
        id: 11,
        title: 'Tahimi',
        startDate: new Date(daysOfWeek[6].setHours(8, 0, 0, 0)),
        endDate: new Date(daysOfWeek[6].setHours(9, 30, 0, 0)),
    },
];

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
            locale="en"
        />
    </StyledCard>
</Container>
```
