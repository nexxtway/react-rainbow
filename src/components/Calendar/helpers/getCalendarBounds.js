export default function getCalendarBounds(minDate, maxDate) {
    const today = new Date();
    const minCalendarDate = minDate || new Date(today.getFullYear() - 100, 0, 1);
    const maxCalendarDate = maxDate || new Date(today.getFullYear() + 100, 11, 31);

    return { minCalendarDate, maxCalendarDate };
}
