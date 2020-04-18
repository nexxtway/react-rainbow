import get12HourTime from './get12HourTime';

export default function extractTimeFromValue(timePosition, value, hour24, placeholder) {
    const hours12Placeholder = '--:-- --';
    const hours24Placeholder = '--:--';

    if (!value) return placeholder || (hour24 ? hours24Placeholder : hours12Placeholder);

    const idx = timePosition === 'from' ? 0 : 1;
    const splittedValue = value.split('-');
    const extractedValue = (splittedValue[idx] && splittedValue[idx].trim()) || '';
    const formattedValue = hour24 ? extractedValue : get12HourTime(extractedValue);
    return formattedValue || (hour24 ? hours24Placeholder : hours12Placeholder);
}
