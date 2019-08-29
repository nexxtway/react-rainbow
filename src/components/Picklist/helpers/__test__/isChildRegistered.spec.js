import isChildRegistered from '../isChildRegistered';

describe('isChildRegistered', () => {
    it('should return true if children is already registered', () => {
        const children = [{ ref: 'ref-1' }, { ref: 'ref-2' }, { ref: 'ref-3' }, { ref: 'ref-4' }];
        const child = 'ref-3';
        expect(isChildRegistered(child, children)).toBe(true);
    });
    it('should return false if children is not registered', () => {
        const children = [{ ref: 'ref-1' }, { ref: 'ref-2' }, { ref: 'ref-3' }, { ref: 'ref-4' }];
        const child = 'ref-6';
        expect(isChildRegistered(child, children)).toBe(false);
    });
});
