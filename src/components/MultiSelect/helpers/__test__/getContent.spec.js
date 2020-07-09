import getContent from '../getContent';

describe('getContent', () => {
    it('should return null', () => {
        const values = [false, true, undefined, null];
        values.forEach(value => {
            expect(getContent(value)).toBe(null);
        });
    });

    it('should return the right string', () => {
        const values = [{ label: 'Label' }, [{ label: 'Label 1' }, { label: 'Label 2' }]];
        const expected = ['Label', 'Label 1, Label 2'];
        values.forEach((value, index) => {
            expect(getContent(value)).toBe(expected[index]);
        });
    });
});
