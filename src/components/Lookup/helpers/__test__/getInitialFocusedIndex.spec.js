import getInitialFocusedIndex from '../getInitialFocusedIndex';

describe('getInitialFocusedIndex', () => {
    it('should return 0', () => {
        const options = [{ label: 'Paris' }, { label: 'New York' }, { label: 'San Fransisco' }];
        const values = [undefined, [], options];
        values.forEach(value => {
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
    it('should return 0 when preferredSelectedOption is an invalid index', () => {
        const options = [{ label: 'New York' }, { label: 'San Fransisco' }];
        expect(getInitialFocusedIndex(options, -1)).toBe(0);
    });
    it('should return 0 when preferredSelectedOption is greater than non-header options', () => {
        const options = [
            { label: 'Paris', type: 'header' },
            { label: 'New York' },
            { label: 'San Fransisco' },
        ];
        expect(getInitialFocusedIndex(options, 3)).toBe(1);
    });
    it('should return 3', () => {
        const options = [
            { label: 'Paris' },
            { label: 'New York' },
            { label: 'Los Angeles' },
            { label: 'Brussels' },
            { label: 'San Fransisco' },
        ];
        expect(getInitialFocusedIndex(options, 3)).toBe(3);
    });
    it('should return 4', () => {
        const options = [
            { label: 'New York' },
            { label: 'San Fransisco' },
            { label: 'Los Angeles' },
            { label: 'Paris', type: 'header' },
            { label: 'Brussels' },
        ];
        expect(getInitialFocusedIndex(options, 3)).toBe(4);
    });
});
