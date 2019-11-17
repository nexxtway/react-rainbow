import getCalendarBounds from '../getCalendarBounds';

const minDate = new Date(2018, 0, 1);
const maxDate = new Date(2020, 7, 3);
const today = new Date();
const date1 = new Date(today.getFullYear() - 100, 0, 1);
const date2 = new Date(today.getFullYear() + 100, 11, 31);

describe('getCalendarBounds', () => {
    it('should return the right bounds when minDate and maxDate are not set', () => {
        const result = {
            minCalendarDate: date1,
            maxCalendarDate: date2,
        };
        expect(getCalendarBounds(undefined, undefined)).toEqual(result);
        expect(getCalendarBounds(null, null)).toEqual(result);
    });
    it('should return the right bounds when minDate is set', () => {
        const result = {
            minCalendarDate: minDate,
            maxCalendarDate: date2,
        };
        expect(getCalendarBounds(minDate, undefined)).toEqual(result);
    });
    it('should return the right bounds when maxDate is set', () => {
        const result = {
            minCalendarDate: date1,
            maxCalendarDate: maxDate,
        };
        expect(getCalendarBounds(undefined, maxDate)).toEqual(result);
    });
    it('should return the right bounds when minDate and maxDate are set', () => {
        const result = {
            minCalendarDate: minDate,
            maxCalendarDate: maxDate,
        };
        expect(getCalendarBounds(minDate, maxDate)).toEqual(result);
    });
});
