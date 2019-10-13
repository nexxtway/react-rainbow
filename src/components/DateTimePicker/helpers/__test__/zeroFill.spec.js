import zeroFill from '../zeroFill';

describe('zeroFill', () => {
    it('should return empty string', () => {
        const values = [undefined, null, ''];
        values.forEach(value => {
            expect(zeroFill(value, 2)).toBe('');
        });
    });
    it('should return correct values string', () => {
        const values = [1, 3, '4', 0];
        const expectedResult = ['01', '03', '04', '00'];
        values.forEach((value, index) => {
            expect(zeroFill(value, 2)).toBe(expectedResult[index]);
        });
    });
});
