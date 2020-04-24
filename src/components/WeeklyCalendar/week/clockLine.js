import React from 'react';
import { useTimer } from '../hooks';
import { useClockLineStyle } from './hooks';
import StyledClockLine from './styled/clockLine';
import StyledCircle from './styled/circle';
import StyledLine from './styled/line';

export default function ClockLine() {
    const clock = useTimer();
    const style = useClockLineStyle(clock);
    return (
        <StyledClockLine style={style}>
            <StyledCircle />
            <StyledLine />
        </StyledClockLine>
    );
}
