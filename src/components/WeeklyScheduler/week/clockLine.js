import React from 'react';
import { useInterval } from '../hooks';
import { getHeightOfDate } from '../helpers';
import StyledClockLine from './styled/clockLine';
import StyledCircle from './styled/circle';
import StyledLine from './styled/line';

export default function ClockLine() {
    const clock = useInterval({ interval: 1, unit: 'minutes' });

    return (
        <StyledClockLine clockHeight={() => getHeightOfDate(clock)}>
            <StyledCircle />
            <StyledLine />
        </StyledClockLine>
    );
}
