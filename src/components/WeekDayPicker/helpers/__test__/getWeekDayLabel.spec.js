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
    /*
    it('should return day label in spanish when locale is es-MX', () => {
        const locale = 'es-MX';
        const label = getWeekDayLabel('sunday', locale);
        expect(label).toBe('D');
    });
    */
});
