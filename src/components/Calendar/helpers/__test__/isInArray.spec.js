import isInArray from '../isInArray';

describe('isInArray', () => {
    it('should return true', () => {
        const array = ['09/07/2022', new Date('09/08/2022')];
        expect(isInArray(new Date('09/07/2022'), array)).toBe(true);
        expect(isInArray('09/08/2022', array)).toBe(true);
    });
    it('should return false', () => {
        const array = ['09/07/2022', new Date('09/08/2022')];
        expect(isInArray(new Date('10/07/2022'), array)).toBe(false);
        expect(isInArray('09/08/2022', undefined)).toBe(false);
    });
});
