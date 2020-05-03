##### MonthlyCalendar

```js
import React from 'react';
import { Card, MonthlyCalendar, RenderIf } from 'react-rainbow-components';
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
            onSelectDate={({ date }) => setState({ selectedDate: date })}
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
import { Card, MonthlyCalendar, RenderIf, Drawer, Avatar, Button, Badge } from 'react-rainbow-components';
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

function getDrawerTitle(selectedDate, currentMonth) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    return selectedDate ? `${monthNames[currentMonth.getMonth()]} ${selectedDate.getDate()}` : null
}

const StyledCardContainer = styled.div`
    margin-top: 8px;
    margin-Bottom: 8px;
`;

const StyledStatisticsContainer = styled.div`
    display: flex;
    align-items: center;    
    font-size: 16px;
    justify-content: space-between;
    padding: 0 0 8px 0;
`;

const StyledHeaderContainer = styled.div`
    display: flex;
    align-items: center;    
    font-size: 16px;
    margin: 8px 4px 0 16px;
`;

const StyledHourContainer = styled.div`   
    font-size: 14px;
    margin-left: 8px;
`;

const StyledContentContainer = styled.div`
    display: flex;
    align-items: center;    
    font-size: 13px;
    margin: 0 4px 4px 65px;
`;

const StyledIconContainer = styled.div`
    margin-right: 5px;
`;

const StyledStatusText = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    font-size: 13px;
    color: ${props => props.text.header};
`;

function AssignedTasksBasicInformation(props) {
    const {assignedTasksCount} = props;

    if (!assignedTasksCount) return null;
    return (
        <StyledStatisticsContainer>
            ASSIGNED
            <Badge
                className="rainbow-m-around_medium"
                label={assignedTasksCount}
                title="AssignedTasks" />
        </StyledStatisticsContainer>
    );
}

function AvailableTasksBasicInformation(props) {
    const {availableTasksCount} = props;

    if (!availableTasksCount) return null;
    return (
        <StyledStatisticsContainer>
            AVAILABLE
            <Badge 
                className="rainbow-m-around_medium"
                label={availableTasksCount}
                title="availableTasks" />
        </StyledStatisticsContainer>
    );
}

function TaskStatus({task}) {
    if (task.isConfirmed) {
        return (
            <StyledContentContainer>
                <StyledIconContainer>
                    <Avatar icon={<CheckmarkIcon />} size="x-small" backgroundColor="#1de9b6" />
                </StyledIconContainer>
                <StyledStatusText>Confirmed</StyledStatusText>
            </StyledContentContainer>
        );
    }
    return (
        <StyledContentContainer>
            <StyledStatusText>Not confirmed</StyledStatusText>
        </StyledContentContainer>
    );
}

function AvailableTaskInformation({task}) {
    return (
            <StyledCardContainer>
                <Card>
                    <StyledHeaderContainer>
                        <Avatar icon={<CalendarIcon />} size="medium" backgroundColor="#f4f6f9" />
                        <StyledHourContainer>{task.hour}</StyledHourContainer>
                    </StyledHeaderContainer>
                    <StyledContentContainer>
                        {task.description}
                    </StyledContentContainer>
                    <TaskStatus task={task}/>
                </Card>
            </StyledCardContainer>
    );
}

function AssignedTaskInformation({task}) {
    return (
            <StyledCardContainer>
                <Card>
                    <StyledHeaderContainer>
                        <Avatar icon={<CalendarIcon />} size="medium" backgroundColor="#f4f6f9" />
                        <StyledHourContainer>{task.hour}</StyledHourContainer>
                    </StyledHeaderContainer>
                    <StyledContentContainer>
                        {task.description}
                    </StyledContentContainer>
                    <TaskStatus task={task}/>
                </Card>
            </StyledCardContainer>
    );
}

function GetDrawerTasks({date, tasks}) {
    const assignedTasks=[<AssignedTasksBasicInformation
    assignedTasksCount={getAssignedTasksCountForDate(date, tasksList)}/>];

    const availableTasks=[< AvailableTasksBasicInformation
    availableTasksCount={getAvailableTasksCountForDate(date, tasksList)}/>];

    if (tasks) {
        tasks.forEach((task, index) => {
            if (areDatesEqual(date, task.date) && !task.isAssigned){
                availableTasks.push(
                    <AvailableTaskInformation task={task}/>
                );
            }
            if (areDatesEqual(date, task.date) && task.isAssigned){
                assignedTasks.push(
                    <AssignedTaskInformation task={task}/>
                );
            }
        });
        const allTasks = assignedTasks.concat(availableTasks);
        return allTasks;
    }
    return null;
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
            header={getDrawerTitle(state.selectedDate, state.currentMonth)}
            isOpen={state.isOpen}
            onRequestClose={() => setState({ isOpen : false })}
        >
            <GetDrawerTasks 
                date={state.selectedDate}
                tasks={tasksList}
            />
        </Drawer>
    </div>
</div>
```
