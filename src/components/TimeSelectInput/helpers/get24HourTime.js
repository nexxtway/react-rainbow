import get24Hour from './get24Hour';

const get24HourTime = ({ hour, minutes, ampm }) => {
    if (!hour && !minutes) return '';
    const hour24 = get24Hour(hour, ampm);
    return typeof minutes === 'string' ? `${hour24}:${minutes}` : `${hour24}:`;
};

export default get24HourTime;
