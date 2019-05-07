import getInitialFocusedIndex from '../getInitialFocusedIndex';

describe('getInitialFocusedIndex', () => {
    it('should return 0', () => {
        const options = [
            { label: 'Paris' },
            { label: 'New York' },
            { label: 'San Fransisco' },
        ];
        const values = [undefined, [], options];
        values.forEach((value) => {
            expect(getInitialFocusedIndex(value)).toBe(0);
        });
    });
    it('should return 1 when first option is type "header"', () => {
        const options = [
            { label: 'Paris', type: 'header' },
            { label: 'New York' },
            { label: 'San Fransisco' },
        ];
        expect(getInitialFocusedIndex(options)).toBe(1);
    });
});
