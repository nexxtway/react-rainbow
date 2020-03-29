##### MonthCalendar

```js
import React from 'react';
import { Card, MonthCalendar, RenderIf } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div
`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: start;
    justify-content: end;
    padding: 0 10px 11px;
`;

const StyledAssignedLabel = styled.div
`
    text-transform: uppercase;
    font-size: 12px;
    cursor: default;
    padding-left: 2px;
`;

const StyledAvailableLabel = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})
`
    text-transform: uppercase;
    cursor: default;
    font-size: 10px;
    border-radius: 1rem;
    margin: 8px 0 2px;
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
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-02', isAssigned: true },
    { date: '2019-03-05', isAssigned: true },
    { date: '2019-03-05', isAssigned: false },
    { date: '2019-03-05', isAssigned: false },
    { date: '2019-03-07', isAssigned: false },
    { date: '2019-03-07', isAssigned: false },
    { date: '2019-03-07', isAssigned: false },
    { date: '2019-03-07', isAssigned: false },
    { date: '2019-03-07', isAssigned: false },
    { date: '2019-03-07', isAssigned: true },
    { date: '2019-03-07', isAssigned: true },
    { date: '2019-03-07', isAssigned: true },
    { date: '2019-03-09', isAssigned: true },
    { date: '2019-03-09', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: false },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-13', isAssigned: true },
    { date: '2019-03-15', isAssigned: false },
    { date: '2019-03-15', isAssigned: false },
    { date: '2019-03-15', isAssigned: false },
    { date: '2019-03-15', isAssigned: false },
    { date: '2019-03-15', isAssigned: false },
    { date: '2019-03-19', isAssigned: false },
    { date: '2019-03-19', isAssigned: true },
    { date: '2019-03-19', isAssigned: true },
    { date: '2019-03-23', isAssigned: false },
    { date: '2019-03-23', isAssigned: true },
    { date: '2019-03-23', isAssigned: true },
    { date: '2019-03-21', isAssigned: true },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-21', isAssigned: false },
    { date: '2019-03-27', isAssigned: true },
    { date: '2019-03-27', isAssigned: true },
    { date: '2019-03-27', isAssigned: true },
    { date: '2019-03-27', isAssigned: true },
    { date: '2019-03-27', isAssigned: true },
    { date: '2019-03-27', isAssigned: false },
    { date: '2019-03-27', isAssigned: false },
    { date: '2019-03-27', isAssigned: false },
    { date: '2019-03-29', isAssigned: true },
    { date: '2019-03-29', isAssigned: true },
    { date: '2019-03-29', isAssigned: false },
    { date: '2019-03-29', isAssigned: false },
    { date: '2019-03-29', isAssigned: false },
];

const initialState = {
    date: new Date('2019-03-12 00:00:00'),
};

<div
    className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
>
    <Card className="rainbow-p-horizontal_medium rainbow-p-vertical_large">
        <MonthCalendar
            selectedDate={state.date}
            onSelectDate={date => setState({ date })}
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
