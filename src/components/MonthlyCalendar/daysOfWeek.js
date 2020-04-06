import React from 'react';
import { PropTypes } from 'prop-types';
import StyledHeaderDays from './styled/headerDays';
import { getFormattedDayName } from '../Calendar/helpers';
import StyledAbbrHeader from './styled/abbrHeader';

export default function DayOfWeek({ locale }) {
    return (
        <thead>
            <tr>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 9, 27), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 9, 27), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 9, 28), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 9, 28), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 9, 29), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 9, 29), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 9, 30), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 9, 30), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 9, 31), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 9, 31), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 10, 1), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 10, 1), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
                <StyledHeaderDays scope="col">
                    <StyledAbbrHeader
                        title={getFormattedDayName(new Date(2019, 10, 2), 'long', locale)}
                    >
                        {getFormattedDayName(new Date(2019, 10, 2), 'short', locale)}
                    </StyledAbbrHeader>
                </StyledHeaderDays>
            </tr>
        </thead>
    );
}

DayOfWeek.propTypes = {
    locale: PropTypes.string,
};

DayOfWeek.defaultProps = {
    locale: undefined,
};
