import isChildRegistered from '../isChildRegistered';

describe('isChildRegistered', () => {
    it('should return true if children is already registered', () => {
        const children = [
            { name: 'name-1' },
            { name: 'name-2' },
            { name: 'name-3' },
            { name: 'name-4' },
        ];
        const child = 'name-3';
        expect(isChildRegistered(child, children)).toBe(true);
    });
    it('should return false if children is not registered', () => {
        const children = [
            { name: 'name-1' },
            { name: 'name-2' },
            { name: 'name-3' },
            { name: 'name-4' },
        ];
        const child = 'name-6';
        expect(isChildRegistered(child, children)).toBe(false);
    });
});
