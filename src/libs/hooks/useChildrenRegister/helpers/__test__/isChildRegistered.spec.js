import isChildRegistered from '../isChildRegistered';

const children = [{ id: 'name-1' }, { id: 'name-2' }, { id: 'name-3' }, { id: 'name-4' }];

describe('isChildRegistered', () => {
    it('should return true if children is already registered', () => {
        expect(isChildRegistered({ children, id: 'name-3' })).toBe(true);
    });
    it('should return false if children is not registered', () => {
        expect(isChildRegistered({ children, id: 'name-6' })).toBe(false);
    });
});
