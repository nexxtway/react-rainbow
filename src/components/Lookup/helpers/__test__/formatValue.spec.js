import formatValue from '../formatValue';

describe('formatValue', () => {
    it('should return empty {label,icon}', () => {
        const values = [undefined, null, [], {}, 12, { data: '' }];
        values.forEach(value => {
            expect(formatValue(value)).toEqual({ label: undefined, value: undefined });
        });
    });
    it('should return fomatted values', () => {
        const unformattedValues = [
            'Paris',
            { label: 'Paris' },
            { label: 'New York', icon: 'theIcon' },
        ];

        const formattedValues = [
            { label: 'Paris', icon: undefined },
            { label: 'Paris', icon: undefined },
            { label: 'New York', icon: 'theIcon' },
        ];

        unformattedValues.forEach((value, index) => {
            expect(formatValue(value)).toEqual(formattedValues[index]);
        });
    });
});
