import React from 'react';

export default function DayOfWeek() {
    return (
        <thead>
            <tr>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Sunday">Sun</abbr>
                </th>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Monday">Mon</abbr>
                </th>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Tuesday">Tue</abbr>
                </th>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Wednesday">Wed</abbr>
                </th>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Thursday">Thu</abbr>
                </th>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Friday">Fri</abbr>
                </th>
                <th scope="col" className="rainbow-calendar_header-days">
                    <abbr title="Saturday">Sat</abbr>
                </th>
            </tr>
        </thead>
    );
}
