##### MonthlyCalendar

```js
import React from 'react';
import { Card, MonthlyCalendar } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div
`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: start;
    justify-content: flex-end;
    padding: 4px;
`;

const StyledAssignedLabel = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    padding-left: 2px;
    color: ${props => props.text.header};
`;

const StyledAvailableLabel = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    border-radius: 1rem;
    margin: 4px 0 2px;
    padding: 2px 10px 3px 9px;
    color: ${props => props.getContrastText(props.text.main)};
    ${props => props.count <= 1 &&
        `
            background: ${props.error.main};
        `}
    ${props => props.count > 1 && props.count <= 3 &&
        `
            background: ${props.warning.main};
        `}
    ${props => props.count > 3 &&
        `
            background: ${props.brand.main};
        `}
`;

function DailyTasks(props) {
    const {
        availableTasksCount, assignedTasksCount
    } = props;

    if (!availableTasksCount && !assignedTasksCount) return null;

    return (
        <StyledContainer>
            {assignedTasksCount > 0 &&
                <StyledAssignedLabel>
                    {`${assignedTasksCount} Assigned`}
                </StyledAssignedLabel>
            }
            {availableTasksCount > 0 &&
                <StyledAvailableLabel count={availableTasksCount}>
                    {`${availableTasksCount} Availables`}
                </StyledAvailableLabel>
            }
        </StyledContainer>
    );
}

function areDatesEqual(date1, date2) {
    const first = new Date(date1);
    const second = new Date(date2);

    return first.getYear() === second.getYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
}

function getAvailableTasksCountForDate(date, tasks) {
    return tasks.filter(task => areDatesEqual(date, task.date) && !task.isAssigned).length;
}

function getAssignedTasksCountForDate(date, tasks) {
    return tasks.filter(task => areDatesEqual(date, task.date) && task.isAssigned).length;
}

function onSelectDate(date, tasksList) {
    alert(`Availables: ${getAvailableTasksCountForDate(date, tasksList)}
    \n Assigned: ${getAssignedTasksCountForDate(date, tasksList)}`);
}

const tasksList = [
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-04', isAssigned: true },
    { date: '2019-12-05', isAssigned: true },
    { date: '2019-12-05', isAssigned: false },
    { date: '2019-12-05', isAssigned: false },
    { date: '2019-12-07', isAssigned: false },
    { date: '2019-12-07', isAssigned: false },
    { date: '2019-12-07', isAssigned: false },
    { date: '2019-12-07', isAssigned: false },
    { date: '2019-12-07', isAssigned: false },
    { date: '2019-12-07', isAssigned: true },
    { date: '2019-12-07', isAssigned: true },
    { date: '2019-12-07', isAssigned: true },
    { date: '2019-12-10', isAssigned: true },
    { date: '2019-12-10', isAssigned: true },
    { date: '2019-12-10', isAssigned: true },
    { date: '2019-12-10', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: false },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-13', isAssigned: true },
    { date: '2019-12-17', isAssigned: false },
    { date: '2019-12-17', isAssigned: false },
    { date: '2019-12-17', isAssigned: false },
    { date: '2019-12-17', isAssigned: false },
    { date: '2019-12-17', isAssigned: false },
    { date: '2019-12-19', isAssigned: false },
    { date: '2019-12-19', isAssigned: true },
    { date: '2019-12-19', isAssigned: true },
    { date: '2019-12-25', isAssigned: false },
    { date: '2019-12-25', isAssigned: true },
    { date: '2019-12-25', isAssigned: true },
    { date: '2019-12-21', isAssigned: true },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-21', isAssigned: false },
    { date: '2019-12-27', isAssigned: true },
    { date: '2019-12-27', isAssigned: true },
    { date: '2019-12-27', isAssigned: true },
    { date: '2019-12-27', isAssigned: true },
    { date: '2019-12-27', isAssigned: true },
    { date: '2019-12-27', isAssigned: false },
    { date: '2019-12-27', isAssigned: false },
    { date: '2019-12-27', isAssigned: false },
    { date: '2019-12-28', isAssigned: true },
    { date: '2019-12-28', isAssigned: true },
    { date: '2019-12-28', isAssigned: false },
    { date: '2019-12-28', isAssigned: false },
    { date: '2019-12-28', isAssigned: false },
];

const initialState = {
    currentMonth: new Date('2019-12-06 00:00:00'),
    selectedDate: undefined,
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
>
    <Card className="rainbow-p-horizontal_medium rainbow-p-vertical_large">
        <MonthlyCalendar
            id="monthly-calendar-1"
            currentMonth={state.currentMonth}
            selectedDate={state.selectedDate}
            onSelectDate={({ date }) => (setState({ selectedDate: date }), onSelectDate(date, tasksList))}
            onMonthChange={({ month }) => setState({ currentMonth: month })}
            minDate={new Date('01/04/2018')}
            maxDate={new Date('01/04/2020')}
            dateComponent={date => (
                <DailyTasks
                    availableTasksCount={getAvailableTasksCountForDate(date, tasksList)}
                    assignedTasksCount={getAssignedTasksCountForDate(date, tasksList)}
                />
            )}
        />
    </Card>
</div>
```

##### MonthlyCalendar interacting with events

```js
import React from 'react';
import { Card, MonthlyCalendar, Drawer, Avatar, Button, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div
`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: start;
    justify-content: flex-end;
    padding: 4px;
`;

const StyledAssignedLabel = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    padding-left: 2px;
    color: ${props => props.text.header};
`;

const StyledAvailableLabel = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    text-transform: uppercase;
    cursor: pointer;
    font-size: 12px;
    border-radius: 1rem;
    margin: 4px 0 2px;
    padding: 2px 10px 3px 9px;
    color: ${props => props.getContrastText(props.text.main)};
    ${props => props.count <= 1 &&
        `
            background: ${props.error.main};
        `}
    ${props => props.count > 1 && props.count <= 3 &&
        `
            background: ${props.warning.main};
        `}
    ${props => props.count > 3 &&
        `
            background: ${props.brand.main};
        `}
`;

const StyledTitle = styled.h1.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.label};
    margin: 0 1.25rem;
    padding: 1.375rem 0 1.325rem;
    display: block;
    box-sizing: border-box;
    font-family: 'Lato Light';
    font-size: 24px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
`;

const StyledStatisticsContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    display: flex;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
`;

const StyledInformationContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header};
    margin-Bottom: 8px;
    border-radius: 12px;
    border: solid 1px #f0f0f7;
    padding-bottom: 12px;
`;

const StyledHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: 8px 0 0 9px;
`;

const StyledHourContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    font-size: 14px;
    margin-left: 11px;
`;

const StyledContentContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 62px;
`;

const StyledIconContainer = styled.div`
    margin-right: 10px;
`;

const StyledStatusText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    font-size: 14px;
    color: ${props => props.text.header};
`;

function DailyTasks(props) {
    const {
        availableTasksCount, assignedTasksCount
    } = props;

    if (!availableTasksCount && !assignedTasksCount) return null;

    return (
        <StyledContainer>
            {assignedTasksCount > 0 &&
                <StyledAssignedLabel>
                    {`${assignedTasksCount} Assigned`}
                </StyledAssignedLabel>
            }
            {availableTasksCount > 0 &&
                <StyledAvailableLabel count={availableTasksCount}>
                    {`${availableTasksCount} Availables`}
                </StyledAvailableLabel>
            }
        </StyledContainer>
    );
}

function areDatesEqual(date1, date2) {
    const first = new Date(date1);
    const second = new Date(date2);

    return first.getYear() === second.getYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
}

function getAvailableTasksCountForDate(date, tasks) {
    return tasks.filter(task => areDatesEqual(date, task.date) && !task.isAssigned).length;
}

function getAssignedTasksCountForDate(date, tasks) {
    return tasks.filter(task => areDatesEqual(date, task.date) && task.isAssigned).length;
}

function getFormattedDate(selectedDate) {
    const option = { month: 'long', day: 'numeric' }
    return selectedDate ? new Intl.DateTimeFormat( 'en-US', option).format(selectedDate) : null
}

const TasksBasicInformation = ({ count, name, title }) => count ? (
    <StyledStatisticsContainer> 
        {name}
        <Badge className="rainbow-m-around_medium" label={count} title={title} />
    </StyledStatisticsContainer> ) : null;

const TaskInformation = ({hour, description, isConfirmed}) => (
    <StyledInformationContainer>
        <StyledHeaderContainer>
            <Avatar icon={<CalendarIcon />} size="medium" backgroundColor="#f4f6f9" />
            <StyledHourContainer>{hour}</StyledHourContainer>
        </StyledHeaderContainer>
        <StyledContentContainer>
            {description}
        </StyledContentContainer>
        {isConfirmed ?
            <StyledContentContainer>
                <StyledIconContainer>
                    <Avatar icon={<CheckmarkIcon />} size="x-small" backgroundColor="#1de9b6" />
                </StyledIconContainer>
                <StyledStatusText>Confirmed</StyledStatusText>
            </StyledContentContainer> :
            <StyledContentContainer>
                <StyledStatusText> Not confirmed</StyledStatusText>
            </StyledContentContainer> }
    </StyledInformationContainer> );

const DrawerTasks = props => {
    const { date, tasks } = props;
    const assignedTasks = tasks.filter(task => areDatesEqual(date, task.date) && task.isAssigned);
    const availableTasks = tasks.filter(task => areDatesEqual(date, task.date) && !task.isAssigned);

    return (
        <div>
            <TasksBasicInformation
                count={assignedTasks.length}
                name="ASSIGNED"
                title="AssignedTasks"
            />
            {assignedTasks.map(task => (
                <TaskInformation {...task} />
            ))}
            <TasksBasicInformation
                count={availableTasks.length}
                name="AVAILABLE"
                title="AvailableTasks"
            />
            {availableTasks.map(task => (
                <TaskInformation {...task} />
            ))}
        </div>
    );
}

const tasksList = [
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-04', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-04', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-05', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-05', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-05', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-07', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-07', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-07', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-07', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-07', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-07', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-07', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-07', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-10', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-10', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-10', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-10', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-13', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-13', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-13', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-13', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-13', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-13', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-13', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-13', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-13', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-13', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-17', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-17', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-17', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-17', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-17', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-19', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-19', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-19', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-25', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-25', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-25', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-21', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-21', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-21', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-21', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-21', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-21', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-21', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-21', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: false },
    { date: '2019-12-21', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-27', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-27', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-27', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-27', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-27', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-27', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-27', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-27', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-28', hour: '7:20 PM', isAssigned: true, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-28', hour: '12:35 PM', isAssigned: true, description: 'Meeting with Jose Doe', isConfirmed: true },
    { date: '2019-12-28', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
    { date: '2019-12-28', hour: '12:35 PM', isAssigned: false, description: 'Meeting with Jose Doe', isConfirmed: false },
    { date: '2019-12-28', hour: '7:20 PM', isAssigned: false, description: 'Meeting with Ana Smith', isConfirmed: true },
];

const initialState = {
    currentMonth: new Date('2019-12-06 00:00:00'),
    selectedDate: undefined,
    isOpen: false,
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
>
    <Card className="rainbow-p-horizontal_medium rainbow-p-vertical_large">
        <MonthlyCalendar
            id="monthly-calendar-3"
            currentMonth={state.currentMonth}
            selectedDate={state.selectedDate}
            onSelectDate={({ date }) => setState({ selectedDate: date, isOpen: true})}
            onMonthChange={({ month }) => setState({ currentMonth: month })}
            minDate={new Date('01/04/2018')}
            maxDate={new Date('01/04/2020')}
            dateComponent={date => (
                <DailyTasks
                    availableTasksCount={getAvailableTasksCountForDate(date, tasksList)}
                    assignedTasksCount={getAssignedTasksCountForDate(date, tasksList)}
                />
            )}
        />
    </Card>
    <div>
        <Drawer
            slideFrom="right"
            header={<StyledTitle>{getFormattedDate(state.selectedDate)}</StyledTitle>}
            isOpen={state.isOpen}
            onRequestClose={() => setState({ isOpen : false })}
        >
            <DrawerTasks
                date={state.selectedDate}
                tasks={tasksList}
            />
        </Drawer>
    </div>
</div>
```
