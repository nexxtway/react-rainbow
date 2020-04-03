##### Weekly Scheduler basic

```js
import React from 'react';
import styled from 'styled-components';
import { WeeklyScheduler } from 'react-rainbow-components';

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
    const start = randomDate();
    start.setMinutes(randomMinutes(0, 12));
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + randomMinutes(3, 12));
    return {title, start, end };
});
const start = new Date();
start.setMinutes(0);
const end = new Date(start);
end.setMinutes(30);
events.push({title: 'Yuri V. Munayev', start, end });

const Container = styled.div`
    padding: 10px;
    height: 600px;;
`;

<Container>
    <WeeklyScheduler events={events} locale="en"/>
</Container>
```
