import hasChips from '../hasChips';

describe('hasChips', () => {
    it('should return true', () => {
        const values = [{ label: 'Label', name: 'Name' }, [{ label: 'Label', name: 'Name' }]];
        values.forEach(value => {
            expect(hasChips(value)).toBe(true);
        });
    });

    it('should return false', () => {
        const values = [undefined, null, 0, false, true, []];
        values.forEach(value => {
            expect(hasChips(value)).toBe(false);
        });
    });
});
