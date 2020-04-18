import getInputValue from '../getInputValue';

describe('getInputValue', () => {
    it('should return an empty string when value is not passed and placeholder is passed', () => {
        const placholder = 'Enter your local time';
        expect(getInputValue(undefined, placholder)).toBe('');
    });
    it('should return the value passed', () => {
        const value = '18:35';
        expect(getInputValue(value)).toBe('18:35');
    });
    it('should return "--:-- --" when value and placeholder are not passed', () => {
        expect(getInputValue()).toBe('--:-- --');
    });
    it('should return "--:--" when hour24 is true and value and placeholder are falsey', () => {
        expect(getInputValue(undefined, undefined, true)).toBe('--:--');
        expect(getInputValue(null, null, true)).toBe('--:--');
        expect(getInputValue(false, false, true)).toBe('--:--');
    });
});
