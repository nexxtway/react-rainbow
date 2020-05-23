import getNormalizedValue from '../getNormalizedValue';

describe('getNormalizedValue', () => {
    it('should return empty if inputValue is not number', () => {
        const inputValue = '';
        const inputIndex = 0;
        const value = [];
        expect(getNormalizedValue(inputValue, inputIndex, value)).toBe('');
    });
    it('should return the right normalized value by joining current array value with new value', () => {
        const inputValue = '2';
        const inputIndex = 1;
        const value = ['2', ''];
        expect(getNormalizedValue(inputValue, inputIndex, value)).toBe('22');
    });
    it('should return the right normalized value when removing value from index 1', () => {
        const inputValue = '';
        const inputIndex = 1;
        const value = ['2', '2'];
        expect(getNormalizedValue(inputValue, inputIndex, value)).toBe('2');
    });
});
