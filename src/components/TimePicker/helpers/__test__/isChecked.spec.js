import isChecked from '../isChecked';

describe('isChecked', () => {
    it('should return true when value is equal to inputValue and value is truthy', () => {
        const values = [
            {
                value: 'AM',
                inputValue: 'AM',
                defaultValue: 'PM',
            },
            {
                value: true,
                inputValue: true,
                defaultValue: 'PM',
            },
            {
                value: 3,
                inputValue: 3,
                defaultValue: 'PM',
            },
        ];
        values.forEach(value => expect(isChecked(value)).toBe(true));
    });
    it('should return true when defaultValue is equal to inputValue and value is falsy', () => {
        const values = [
            {
                value: null,
                inputValue: 'PM',
                defaultValue: 'PM',
            },
            {
                value: undefined,
                inputValue: 'AM',
                defaultValue: 'AM',
            },
            {
                value: false,
                inputValue: 3,
                defaultValue: 3,
            },
        ];
        values.forEach(value => expect(isChecked(value)).toBe(true));
    });
    it('should return true when inputValue is equal to "AM" and defaultValue and value are falsy', () => {
        const values = [
            {
                value: null,
                inputValue: 'AM',
                defaultValue: null,
            },
            {
                value: false,
                inputValue: 'AM',
                defaultValue: false,
            },
            {
                value: NaN,
                inputValue: 'AM',
                defaultValue: NaN,
            },
            {
                value: 0,
                inputValue: 'AM',
                defaultValue: 0,
            },
            {
                value: undefined,
                inputValue: 'AM',
                defaultValue: undefined,
            },
        ];
        values.forEach(value => expect(isChecked(value)).toBe(true));
    });
});
