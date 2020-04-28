import getWeekDayLabel from '../getWeekDayLabel';

describe('getWeekDayLabel', () => {
    it('should return day label in english when locale is not manually set', () => {
        const label = getWeekDayLabel('sunday');
        expect(label).toBe('S');
    });
    it('should return empty string when no day is sent', () => {
        const label = getWeekDayLabel();
        expect(label).toBe('');
    });
    it('should return empty string when day is not valid', () => {
        const label = getWeekDayLabel('wrong-day-value');
        expect(label).toBe('');
    });
    it('should return localized string', () => {
        const label = getWeekDayLabel('monday', 'es-MX');
        expect(label).toBe('L');
    });
});
