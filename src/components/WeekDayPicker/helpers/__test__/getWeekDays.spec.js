import getWeekDays from '../getWeekDays';

describe('getWeekDays', () => {
    it('should return the weekDays values available for selection', () => {
        expect(getWeekDays()).toEqual([
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ]);
    });
});
