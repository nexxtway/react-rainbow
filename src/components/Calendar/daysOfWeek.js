import React from 'react';

export default function DayOfWeek() {
    return (
        <thead>
            <tr>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Sunday">Sun</abbr>
                </th>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Monday">Mon</abbr>
                </th>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Tuesday">Tue</abbr>
                </th>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Wednesday">Wed</abbr>
                </th>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Thursday">Thu</abbr>
                </th>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Friday">Fri</abbr>
                </th>
                <th className="rainbow-calendar_header-days">
                    <abbr title="Saturday">Sat</abbr>
                </th>
            </tr>
        </thead>
    );
}
