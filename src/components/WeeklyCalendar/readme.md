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
        title: 'Tahimi',
        startDate: new Date(daysOfWeek[1].setHours(8, 0, 0, 0)),
        endDate: new Date(daysOfWeek[1].setHours(8, 20, 0, 0)),
    },
    {
        id: 6,
        title: 'Tahimi L',
        startDate: new Date(daysOfWeek[2].setHours(8, 0, 0, 0)),
        endDate: new Date(daysOfWeek[2].setHours(9, 30, 0, 0)),
    },
    {
        id: 7,
        title: 'Sara',
        startDate: new Date(daysOfWeek[3].setHours(6, 0, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(6, 30, 0, 0)),
    },
    {
        id: 8,
        title: 'Leandro Torres',
        startDate: new Date(daysOfWeek[3].setHours(6, 30, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(7, 0, 0, 0)),
    },
    {
        id: 9,
        title: 'Tahimi',
        startDate: new Date(daysOfWeek[3].setHours(7, 30, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(8, 0, 0, 0)),
    },
    {
        id: 10,
        title: 'Sara P',
        startDate: new Date(daysOfWeek[4].setHours(6, 30, 0, 0)),
        endDate: new Date(daysOfWeek[4].setHours(8, 0, 0, 0)),
    },
    {
        id: 11,
        title: 'Leo Torres',
        startDate: new Date(daysOfWeek[5].setHours(6, 0, 0, 0)),
        endDate: new Date(daysOfWeek[5].setHours(7, 0, 0, 0)),
    },
    {
        id: 12,
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
            onEventClick={event => alert(event.title)}
            locale="en"
        />
    </StyledCard>
</Container>
```

##### Weekly Calendar opens a Drawer when clicking on the event

```js
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { WeeklyCalendar, Card, Drawer } from 'react-rainbow-components';

const today = new Date();
const events = [
    {
        id: 1,
        title: 'Leandro Torres',
        startDate: new Date(today.setHours(5, 0, 0, 0)),
        endDate: new Date(today.setHours(5,30, 0, 0)),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 2,
        title: 'JL Torres',
        startDate: new Date(today.setHours(5, 30, 0, 0)),
        endDate: new Date(today.setHours(6, 30, 0, 0)),
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 3,
        title: 'Reinier',
        startDate: new Date(today.setHours(7, 0, 0, 0)),
        endDate: new Date(today.setHours(7, 30, 0, 0)),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 4,
        title: 'Yuri V. Munayev',
        startDate: new Date(today.setHours(7, 30, 0, 0)),
        endDate: new Date(today.setHours(8, 30, 0, 0)),
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

const Container = styled.div`
    padding: 10px;
`;
const StyledCard = styled(Card)`
    height: 600px;
    padding: 1rem;
`;

const StyleTitle = styled.h1`
    font-size: 1.5rem;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const StyleTimeRange = styled.p`
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const StyleDescription = styled.p`
    color: ${props => props.theme.rainbow.palette.text.main};
`;

const formatter = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
});

const getFormattedTimeRange = (startDate, endDate) =>
    `${formatter.format(startDate)} - ${formatter.format(endDate)}`;

const WeeklyCalendarExample = () => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState({
        title: '',
        startDate: null,
        endDate: null,
        description: ''
    })
    const formattedTimeRange = useMemo(() => getFormattedTimeRange(event.startDate, event.endDate), [
        event.startDate, event.endDate,
    ]);

    const handleEventClick = currentEvent => {
        setEvent(currentEvent);
        setIsOpen(true)
    };

    return (<StyledCard>
        <WeeklyCalendar
            events={events}
            currentWeek={currentWeek}
            onWeekChange={({ week }) => setCurrentWeek(week )}
            onEventClick={handleEventClick}
            locale="en"
        />
        <Drawer
            header="Event"
            slideFrom="right"
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
        >
            <StyleTitle>{event.title}</StyleTitle>
            <StyleTimeRange>{formattedTimeRange}</StyleTimeRange>
            <StyleDescription>{event.description}</StyleDescription>
        </Drawer>
    </StyledCard>);
}

<Container>
    <WeeklyCalendarExample />
</Container>
```

