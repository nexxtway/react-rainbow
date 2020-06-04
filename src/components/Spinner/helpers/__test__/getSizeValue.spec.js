import getSizeValue from '../getSizeValue';

describe('getSizeValue', () => {
    it('should return "16" when size is xx-small', () => {
        expect(getSizeValue('xx-small')).toBe('16');
    });
    it('should return "20" when size is x-small', () => {
        expect(getSizeValue('x-small')).toBe('20');
    });
    it('should return "26" when size is small', () => {
        expect(getSizeValue('small')).toBe('26');
    });
    it('should return "32" when size is medium', () => {
        expect(getSizeValue('medium')).toBe('32');
    });
    it('should return "48" when size is large', () => {
        expect(getSizeValue('large')).toBe('48');
    });
    it('should return "82" when size is x-large', () => {
        expect(getSizeValue('x-large')).toBe('82');
    });
    it('should return "32" when size is an incorrect value', () => {
        const values = ['xx-smal', 'x-smal', 'smal', 'mediu', 5, 'x-big'];
        values.forEach(value => {
            expect(getSizeValue(value)).toBe('32');
        });
    });
});
