import React from 'react';
import { useTimer } from '../hooks';
import { getHeightOfDate } from '../helpers';
import StyledClockLine from './styled/clockLine';
import StyledCircle from './styled/circle';
import StyledLine from './styled/line';

export default function ClockLine() {
    const clock = useTimer();
    const style = { top: `${getHeightOfDate(clock)}px` };
    return (
        <StyledClockLine style={style}>
            <StyledCircle />
            <StyledLine />
        </StyledClockLine>
    );
}
