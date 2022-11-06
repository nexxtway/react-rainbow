import isChildRegistered from '../isChildRegistered';

const children = [{ name: 'name-1' }, { name: 'name-2' }, { name: 'name-3' }, { name: 'name-4' }];

describe('isChildRegistered', () => {
    it('should return true if children is already registered', () => {
        expect(isChildRegistered({ children, name: 'name-3' })).toBe(true);
    });
    it('should return false if children is not registered', () => {
        expect(isChildRegistered({ children, name: 'name-6' })).toBe(false);
    });
});
