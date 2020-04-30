import { getFormattedEventTimeRange } from '..';

describe('getFormattedEventTimeRange', () => {
    it('should return 4 - 5:30 AM when call with 4:00 AM and 5:30 AM', () => {
        const date1 = new Date();
        date1.setHours(4, 0, 0, 0);
        const date2 = new Date();
        date2.setHours(5, 30, 0, 0);
        expect(getFormattedEventTimeRange(date1, date2)).toBe('4 - 5:30 AM');
    });
    it('should return 11:30 AM - 1:30 PM when call with 11:30 AM and 1:30 PM', () => {
        const date1 = new Date();
        date1.setHours(11, 30, 0, 0);
        const date2 = new Date();
        date2.setHours(13, 30, 0, 0);
        expect(getFormattedEventTimeRange(date1, date2)).toBe('11:30 AM - 1:30 PM');
    });
});
