import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledEvent from './styled/event';
import { getDiffDate, getHourHeight } from './helpers';

export default function Event(props) {
    const { id, title, start, end, locale } = props;
    const duration = getDiffDate(start, end, 'minutes');
    const height = getHourHeight(new Date(getDiffDate(start, end)));

    return (
        <StyledEvent id={id} height={height}>
            <RenderIf isTrue={duration < 30}>
                <span>
                    {`${new Intl.DateTimeFormat(locale, {
                        hour: 'numeric',
                        minute: 'numeric',
                    }).format(start)} - ${new Intl.DateTimeFormat(locale, {
                        hour: 'numeric',
                        minute: 'numeric',
                    }).format(end)}`}
                </span>
            </RenderIf>
            <p>{title}</p>
        </StyledEvent>
    );
}

Event.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    locale: PropTypes.string,
};

Event.defaultProps = {
    id: undefined,
    title: undefined,
    start: undefined,
    end: undefined,
    locale: undefined,
};
