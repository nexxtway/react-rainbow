import formatValue from '../formatValue';

describe('formatValue', () => {
    it('should return empty object', () => {
        const values = [undefined, null, [], {}, 12];
        values.forEach(value => {
            expect(formatValue(value)).toEqual({});
        });
    });
    it('should return fomatted values', () => {
        const unformattedValues = [{ label: 'Paris' }, { label: 'New York', icon: 'theIcon' }];

        const formattedValues = [
            { label: 'Paris', icon: undefined },
            { label: 'New York', icon: 'theIcon' },
        ];

        unformattedValues.forEach((value, index) => {
            expect(formatValue(value)).toEqual(formattedValues[index]);
        });
    });
});
