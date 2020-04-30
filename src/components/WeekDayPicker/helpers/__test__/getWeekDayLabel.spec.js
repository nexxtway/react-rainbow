import getWeekDayLabel from '../getWeekDayLabel';

global.Intl = {
    DateTimeFormat: jest.fn(locale => ({
        format: jest.fn(() => {
            if (locale === 'es-MX') {
                return 'L';
            }
            return 'M';
        }),
    })),
};

describe('getWeekDayLabel', () => {
    it('should return day label in english when locale is not manually set', () => {
        const label = getWeekDayLabel('monday');
        expect(label).toBe('M');
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
