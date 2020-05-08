import isWeekDayChecked from '../isWeekDayChecked';

describe('isWeekDayChecked', () => {
    it('should return true if multiple is false and previous value is the same as weekDay selected value', () => {
        const isMultiple = false;
        const weekDaySelection = 'sunday';
        const prevValue = 'sunday';
        expect(isWeekDayChecked(weekDaySelection, prevValue, isMultiple)).toBe(true);
    });
    it('should return false if multiple is false and previous value is NOT the same as weekDay selected value', () => {
        const isMultiple = false;
        const weekDaySelection = 'sunday';
        const prevValue = 'monday';
        expect(isWeekDayChecked(weekDaySelection, prevValue, isMultiple)).toBe(false);
    });
    it('should return false if multiple is true and previous value is not an array of elements', () => {
        const isMultiple = true;
        const weekDaySelection = 'sunday';
        const prevValue = 'monday';
        expect(isWeekDayChecked(weekDaySelection, prevValue, isMultiple)).toBe(false);
    });
    it('should return true if multiple is true and previous value contains the selected weekDay', () => {
        const isMultiple = true;
        const weekDaySelection = 'sunday';
        const prevValue = ['sunday', 'monday', 'friday'];
        expect(isWeekDayChecked(weekDaySelection, prevValue, isMultiple)).toBe(true);
    });
    it('should return false if multiple is true and previous value does NOT contains the selected weekDay', () => {
        const isMultiple = true;
        const weekDaySelection = 'sunday';
        const prevValue = ['monday', 'friday'];
        expect(isWeekDayChecked(weekDaySelection, prevValue, isMultiple)).toBe(false);
    });
});
