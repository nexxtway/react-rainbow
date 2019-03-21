import React from 'react';

export default function DayOfWeek() {
    return (
        <thead>
            <tr>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Sunday">Sun</abbr>
                </th>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Monday">Mon</abbr>
                </th>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Tuesday">Tue</abbr>
                </th>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Wednesday">Wed</abbr>
                </th>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Thursday">Thu</abbr>
                </th>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Friday">Fri</abbr>
                </th>
                <th className="rainbow-date-picker_calendar-header">
                    <abbr title="Saturday">Sat</abbr>
                </th>
            </tr>
        </thead>
    );
}
