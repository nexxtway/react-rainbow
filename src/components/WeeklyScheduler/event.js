import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledEvent from './styled/event';
import { getDiffDate, getHeightOfMinutes, getHeightOfDate } from './helpers';
import { useUniqueIdentifier } from '../../libs/hooks';

export default function Event(props) {
    const { title, start, end, locale } = props;
    const eventId = useUniqueIdentifier('scheduler-event');
    const duration = useMemo(() => getDiffDate(start, end, 'minutes'), [end, start]);
    const height = useMemo(() => getHeightOfMinutes(duration), [duration]);

    return (
        <StyledEvent id={eventId} height={height} hourHeight={() => getHeightOfDate(start)}>
            <RenderIf isTrue={duration >= 30}>
                <p className="scheduler-event-dates">
                    {`${new Intl.DateTimeFormat(locale, {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    }).format(start)} - ${new Intl.DateTimeFormat(locale, {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    }).format(end)}`}
                </p>
            </RenderIf>
            <p className="scheduler-event-title">{title}</p>
        </StyledEvent>
    );
}

Event.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    locale: PropTypes.string,
};

Event.defaultProps = {
    title: undefined,
    start: undefined,
    end: undefined,
    locale: undefined,
};
