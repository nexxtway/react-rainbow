# The basic ActivityTimeline
##### This example shows a simple activity timeline that vertically displays a list of events in chronological order.

```js
import React from 'react';
import { Card, ActivityTimeline, TimelineMarker } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };
const container = { width: 500, margin: 'auto', marginTop: 36, };

    <div style={container}>
        <ActivityTimeline>
            <TimelineMarker
                label="User Sign Up."
                icon={<UserSignUpIcon style={iconStyles} />}
                datetime="Yesterday"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore etdolore magna aliqua."
            />
            <TimelineMarker
                label="User phone verified."
                icon={<UserVerifiedIcon style={iconStyles} />}
                datetime="Today"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <TimelineMarker
                label="User first post."
                icon={<UserFirstPostIcon style={iconStyles} />}
                datetime="3 hours ago"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore etdolore magna aliqua."
            >
                <Card title="Landscape">
                    <img
                        src="images/illustrations/Illustration-landscape.svg"
                        alt="landscape with mountain"
                    />
                </Card>
            </TimelineMarker>
        </ActivityTimeline>
    </div>
```

# ActivityTimeline as accordion
##### ActivityTimeline can be used as an accordion. You can do so by implementing the `variant` prop.

```js
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ActivityTimeline, TimelineMarker } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: 36px 4rem 0;
`;

const StyledContentContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    border-radius: 1rem;
    padding: 1rem 2rem;
    background: ${props => props.background.highlight};
    color: ${props => props.text.main};
`;

const StyledContentHeader = styled.h3`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const StyledItemsContainer = styled.h3`
    display: flex;
    align-items: center;
`;

const StyledLabel = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
    width: 100%;
    max-width: 140px;
    padding: 0.5rem 0;
`;

const StyledValue = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    font-weight: bold;
    color: ${props => props.text.main};
`;

const EventDetails = ({ uid, birthdate }) => {
    return (
        <StyledContentContainer>
            <StyledContentHeader>Details</StyledContentHeader>
            <StyledItemsContainer>
                <StyledLabel>UID</StyledLabel>
                <StyledValue>{uid}</StyledValue>
            </StyledItemsContainer>
            <StyledItemsContainer>
                <StyledLabel>Date of Birthday</StyledLabel>
                <StyledValue>{birthdate}</StyledValue>
            </StyledItemsContainer>
        </StyledContentContainer>
    );
};

const AccordionActivityTimeline =  ({ eventsList }) => {
    const [activeEvents, setActiveEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const markers = useMemo(() => eventsList.map(event => {
        const { name, user, datetime, description, details } = event;
        const iconStyles = { width: 32, height: 32 };
        return (
            <TimelineMarker
                key={name}
                name={name}
                label={user}
                isLoading={loading}
                icon={<UserSignUpIcon style={iconStyles} />}
                datetime={datetime}
                description={description}
            >
                <EventDetails uid={details.uid} birthdate={details.birthdate} />
            </TimelineMarker>
        );
    }), [eventsList, loading]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    const handleToggleEvent = useCallback(({ activeSectionNames }) => {
        setActiveEvents(activeSectionNames);
    }, []);

    return (
        <StyledContainer>
            <ActivityTimeline
                variant="accordion"
                multiple
                activeSectionNames={activeEvents}
                onToggleSection={handleToggleEvent}
            >
                {markers}
            </ActivityTimeline>
        </StyledContainer>
    );
};

const events = [
    {
        name: 'event1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        user: 'Tahimi Leon',
        datetime: '11:00 AM, Today',
        details: {
            uid: '1610482374420',
            birthdate: 'January 12, 2021',
        },
    },
    {
        name: 'event2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        user: 'Tahimi Leon',
        datetime: '11:00 AM, Today',
        details: {
            uid: '1610482374420',
            birthdate: 'January 12, 2021',
        },
    }
];
    <AccordionActivityTimeline eventsList={events} />
```
