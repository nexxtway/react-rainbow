import isChildRegistered from '../isChildRegistered';

describe('isChildRegistered', () => {
    it('should return true if children is alredy registered', () => {
        const children = [{ ref: 'ref-1' }, { ref: 'ref-2' }, { ref: 'ref-3' }, { ref: 'ref-4' }];
        const child1 = 'ref-3';
        const child2 = 'ref-6';
        expect(isChildRegistered(child1, children)).toBe(true);
        expect(isChildRegistered(child2, children)).toBe(false);
    });
});
