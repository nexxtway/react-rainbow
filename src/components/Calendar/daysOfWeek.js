import React from 'react';
import StyledHeaderDays from './styled/headerDays';

export default function DayOfWeek() {
    return (
        <thead>
            <tr>
                <StyledHeaderDays scope="col">
                    <abbr title="Sunday">Sun</abbr>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <abbr title="Monday">Mon</abbr>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <abbr title="Tuesday">Tue</abbr>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <abbr title="Wednesday">Wed</abbr>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <abbr title="Thursday">Thu</abbr>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <abbr title="Friday">Fri</abbr>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <abbr title="Saturday">Sat</abbr>
                </StyledHeaderDays>
            </tr>
        </thead>
    );
}
