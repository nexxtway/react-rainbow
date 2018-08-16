import normalizeValue from './../normalizeValue';

describe('<normalizeValue/>', () => {
    it('if value is >=0 and <=100 return the value', () => {
        expect(normalizeValue(34)).toBe(34);
    });
    it('if value is <0 return 0', () => {
        expect(normalizeValue(-34)).toBe(0);
    });
    it('if value is >100 return 100', () => {
        expect(normalizeValue(3434)).toBe(100);
    });
    it('if value is =100 return 100', () => {
        expect(normalizeValue(100)).toBe(100);
    });
    it('if value is =0 return 0', () => {
        expect(normalizeValue(0)).toBe(0);
    });
});
