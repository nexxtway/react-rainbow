import getOptionsLength from '../getOptionsLength';

describe('getOptionsLength', () => {
    it('should return 0', () => {
        expect(getOptionsLength()).toBe(0);
        expect(getOptionsLength([])).toBe(0);
    });
    it('should return the right length when there is not type "header"', () => {
        const options = [{ label: 'Paris' }, { label: 'New York' }, { label: 'San Fransisco' }];
        expect(getOptionsLength(options)).toBe(3);
    });
    it('should return the right length when there is type "header"', () => {
        const options = [
            { label: 'European Cities', type: 'header' },
            { label: 'Paris', description: 'An awesome city' },
            { label: 'Madrid' },
            { label: 'American Cities', type: 'header' },
            { label: 'New York' },
            { label: 'San Fransisco' },
            { label: 'Miami' },
        ];
        expect(getOptionsLength(options)).toBe(5);
    });
});
