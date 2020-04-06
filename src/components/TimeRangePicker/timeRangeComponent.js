import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TimePicker from '../TimePicker';
import StyledTimeRangeContainer from './styled/timeRangeContainer';
import StyledLine from './styled/line';
import { uniqueId } from '../../libs/utils';

export default function TimeRangeComponent(props) {
    const { hour24, start, end } = props;
    const [startState, setStart] = useState(start);
    const [endState, setEnd] = useState(end);

    const handleStartChange = value => {
        setStart(value);
    };

    const handleEndChange = value => {
        setEnd(value);
    };

    return (
        <StyledTimeRangeContainer>
            <TimePicker
                id={uniqueId('time-picker-start')}
                value={startState}
                label="TimePicker Label 1"
                hideLabel
                hour24={hour24}
                onChange={handleStartChange}
            />
            <StyledLine />
            <TimePicker
                id={uniqueId('time-picker-end')}
                value={endState}
                label="TimePicker Label 2"
                hideLabel
                hour24={hour24}
                onChange={handleEndChange}
            />
        </StyledTimeRangeContainer>
    );
}

TimeRangeComponent.propTypes = {
    hour24: PropTypes.bool,
    start: PropTypes.string,
    end: PropTypes.string,
};

TimeRangeComponent.defaultProps = {
    hour24: false,
    start: undefined,
    end: undefined,
};
