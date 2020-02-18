import formatDateTime from '../formatDateTime';

describe('formatDateTime', () => {
    it('should return an empty string when pass falsy values', () => {
        const values = [undefined, null, '', 0];
        values.forEach(value => {
            expect(formatDateTime(value)).toBe('');
        });
    });
    it('should return an empty string when pass an invalid date', () => {
        expect(formatDateTime('29-08-2003')).toBe('');
        expect(formatDateTime('wrong date')).toBe('');
    });
    it('should return the right formatted date', () => {
        expect(formatDateTime(new Date(2019, 3, 24, 11, 34, 43))).toBe('04/24/2019, 11:34 AM');
        expect(formatDateTime(new Date('04/24/2019 13:23'))).toBe('04/24/2019, 1:23 PM');
        expect(formatDateTime('04/24/2019 20:48')).toBe('04/24/2019, 8:48 PM');
    });
    it('should return the right formatted date when formatStyle large', () => {
        expect(formatDateTime(new Date(2019, 3, 24, 11, 34, 43), 'large')).toBe(
            'Wednesday, 04/24/2019, 11:34 AM',
        );
        expect(formatDateTime(new Date('04/24/2019 13:23'), 'large')).toBe(
            'Wednesday, 04/24/2019, 1:23 PM',
        );
        expect(formatDateTime('04/24/2019 20:48', 'large')).toBe('Wednesday, 04/24/2019, 8:48 PM');
    });
    it('should return the right formatted date when formatStyle small', () => {
        expect(formatDateTime(new Date(2019, 3, 24, 11, 34, 43), 'small')).toBe(
            '4/24/19, 11:34 AM',
        );
        expect(formatDateTime(new Date('04/24/2019 13:23'), 'small')).toBe('4/24/19, 1:23 PM');
        expect(formatDateTime('04/24/2019 20:48', 'small')).toBe('4/24/19, 8:48 PM');
    });
    it('should return the right formatted date when formatStyle is wrong', () => {
        expect(formatDateTime(new Date(2019, 3, 24, 11, 34, 43), 'normal')).toBe(
            '04/24/2019, 11:34 AM',
        );
        expect(formatDateTime(new Date('04/24/2019 13:23'), 'big')).toBe('04/24/2019, 1:23 PM');
        expect(formatDateTime('04/24/2019 20:48', 'short')).toBe('04/24/2019, 8:48 PM');
    });
    it('should return the right formatted time when in 24h format', () => {
        expect(formatDateTime(new Date(2019, 3, 24, 18, 34, 43), 'normal', 'en-US', true)).toBe(
            '04/24/2019, 18:34',
        );
        expect(formatDateTime(new Date('04/24/2019 13:23'), 'big', 'en-US', true)).toBe(
            '04/24/2019, 13:23',
        );
        expect(formatDateTime('04/24/2019 20:48', 'short', 'en-US', true)).toBe(
            '04/24/2019, 20:48',
        );
    });
});
