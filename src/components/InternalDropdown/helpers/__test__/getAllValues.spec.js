import getAllValues from '../getAllValues';

describe('getAllValues', () => {
    it('should return the right value', () => {
        const values = [
            {
                icon: 'Icon 1',
                label: 'Label 1',
                name: 'Name 1',
                value: 'Value 1',
                variant: 'default',
            },
            {
                icon: 'Icon 2',
                label: 'Label 2',
                name: 'Name 2',
                value: 'Value 2',
                variant: 'default',
                extra: 'extra',
            },
            {
                icon: 'Icon 3',
                label: 'Label 3',
                name: 'Name 3',
                value: 'Value 3',
                variant: 'other',
            },
        ];
        const expected = [
            {
                icon: 'Icon 1',
                label: 'Label 1',
                name: 'Name 1',
                value: 'Value 1',
            },
            {
                icon: 'Icon 2',
                label: 'Label 2',
                name: 'Name 2',
                value: 'Value 2',
            },
        ];
        expect(getAllValues(values)).toEqual(expected);
    });
});
