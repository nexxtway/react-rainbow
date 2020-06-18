import hasChips from '../hasChips';

describe('hasChips', () => {
    it('should return true', () => {
        const values = [{ label: 'Label', name: 'Name' }, [{ label: 'Label', name: 'Name' }]];
        values.forEach(val => {
            expect(hasChips(val)).toBe(true);
        });
    });

    it('should return false', () => {
        const values = [undefined, null, 0, false, true, []];
        values.forEach((val, index) => {
            expect(hasChips(val)).toBe(false);
        });
    });
});
