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
        title: 'Reinier',
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
        title: 'Leandro Torres',
        startDate: new Date(daysOfWeek[0].setHours(11, 0, 0, 0)),
        endDate: new Date(daysOfWeek[0].setHours(12, 15, 0, 0)),
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
        endDate: new Date(daysOfWeek[1].setHours(8, 15, 0, 0)),
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
        title: 'Tahimi',
        startDate: new Date(daysOfWeek[3].setHours(6, 30, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(7, 0, 0, 0)),
    },
    {
        id: 9,
        title: 'Reinier',
        startDate: new Date(daysOfWeek[3].setHours(7, 30, 0, 0)),
        endDate: new Date(daysOfWeek[3].setHours(8, 15, 0, 0)),
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

const StyledCard = styled(Card)`
    height: 600px;
    padding: 1rem;
`;
const initialState = {
    currentWeek: new Date(),
};

<div className="rainbow-m-around_large">
    <StyledCard>
        <WeeklyCalendar
            events={events}
            currentWeek={state.currentWeek}
            onWeekChange={({ week }) => setState({ currentWeek: week })}
            onEventClick={event => alert(event.title)}
            locale="en"
        />
    </StyledCard>
</div>
```

##### Weekly Calendar opens a Drawer when clicking on the event

```js
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { WeeklyCalendar, Card, Drawer, ButtonIcon, Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const today = new Date();
const events = [
    {
        id: 1,
        title: 'JL Torres',
        startDate: new Date(today.setHours(5, 0, 0, 0)),
        endDate: new Date(today.setHours(5,30, 0, 0)),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        user: {
            hangouts: 'hangout.google.com/1234556-444',
            phone: '+1 111 111 1111 PIN: 1111 1111',
            location: 'US State: California (CA)',
        }
    },
    {
        id: 2,
        title: 'Leandro Torres',
        startDate: new Date(today.setHours(5, 30, 0, 0)),
        endDate: new Date(today.setHours(6, 30, 0, 0)),
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: {
            hangouts: 'hangout.google.com/1234556-444',
            phone: '+1 111 111 1111 PIN: 1111 1111',
            location: 'US State: California (CA)',
        }
    },
    {
        id: 3,
        title: 'Reinier',
        startDate: new Date(today.setHours(7, 0, 0, 0)),
        endDate: new Date(today.setHours(7, 30, 0, 0)),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        user: {
            hangouts: 'hangout.google.com/1234556-444',
            phone: '+1 111 111 1111 PIN: 1111 1111',
            location: 'US State: California (CA)',
        }
    },
    {
        id: 4,
        title: 'Yuri V. Munayev',
        startDate: new Date(today.setHours(7, 30, 0, 0)),
        endDate: new Date(today.setHours(8, 30, 0, 0)),
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user: {
            hangouts: 'hangout.google.com/1234556-444',
            phone: '+1 111 111 1111 PIN: 1111 1111',
            location: 'US State: California (CA)',
        }
    },
];

const Container = styled.div`
    padding: 10px;
`;
const StyledCard = styled(Card)`
    height: 600px;
    padding: 1rem;
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;
const StyledIcon = styled.span`
    width: 30px;
    min-width: 30px;
    height: 30px;
    margin-right: 15px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.rainbow.palette.background.secondary};
`;

const StyleEventTitle = styled.h1`
    font-size: 20px;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const StyleTitle = styled.h2`
    font-size: 16px;
    color: ${props => props.theme.rainbow.palette.brand.main};
`;

const StyleSubTitle = styled.p`
    font-size: 14px;
    color: ${props => props.theme.rainbow.palette.text.header};
`;

const fomatterTime = time => new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
}).format(time);

const fomatterDay = day => new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
}).format(day);

const formattedTimeRange = (startDate, endDate) => 
    `${fomatterDay(startDate)}, ${fomatterTime(startDate)} - ${fomatterTime(endDate)}`;

const EventHeader = ({ title, startDate, endDate }) => (
    <StyledHeader>
        <Avatar src="images/user/user1.jpg" className="rainbow-m-right_medium" />
        <div>
            <StyleEventTitle>{title}</StyleEventTitle>
            <StyleSubTitle>{formattedTimeRange(startDate, endDate)}</StyleSubTitle>
        </div>
    </StyledHeader>
);

const WeeklyCalendarExample = () => {
    const [currentWeek, setCurrentWeek] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [event, setEvent] = useState(events[0]);

    const handleEventClick = currentEvent => {
        setEvent(currentEvent);
        setIsOpen(true)
    };

    return (
        <StyledCard>
            <WeeklyCalendar
                events={events}
                currentWeek={currentWeek}
                onWeekChange={({ week }) => setCurrentWeek(week )}
                onEventClick={handleEventClick}
                locale="en"
            />
            <Drawer
                header={
                    <EventHeader
                        title={event.title}
                        startDate={event.startDate}
                        endDate={event.endDate}
                    />
                }
                slideFrom="right"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}>
                <div className="rainbow-flex rainbow-m-bottom_medium rainbow-align_center">
                    <HangoutsIcon className="rainbow-m-right_medium rainbow-m-left_xx-small" />
                    <div>
                        <StyleTitle>Join Hangouts Link</StyleTitle>
                        <StyleSubTitle>{event.user.hangouts}</StyleSubTitle>
                    </div>
                </div>
                <div className="rainbow-flex rainbow-m-bottom_medium">
                    <StyledIcon>
                        <PhoneSolidIcon />
                    </StyledIcon>
                    <div>
                        <StyleTitle>Join by phone</StyleTitle>
                        <StyleSubTitle>{event.user.phone}</StyleSubTitle>
                    </div>
                </div>
                <div className="rainbow-flex rainbow-m-bottom_medium">
                    <StyledIcon>
                        <MarkerIcon />
                    </StyledIcon>
                    <div>
                        <StyleTitle>Client Location</StyleTitle>
                        <StyleSubTitle>{event.user.location}</StyleSubTitle>
                    </div>
                </div>
                <div className="rainbow-flex rainbow-m-bottom_medium">
                    <StyledIcon>
                        <CommentsIcon />
                    </StyledIcon>
                    <div>
                        <StyleTitle>Comment</StyleTitle>
                        <StyleSubTitle>{event.description}</StyleSubTitle>
                    </div>
                </div>
            </Drawer>
        </StyledCard>
    );
}

<div className="rainbow-m-around_large">
    <WeeklyCalendarExample />
</div>
```
