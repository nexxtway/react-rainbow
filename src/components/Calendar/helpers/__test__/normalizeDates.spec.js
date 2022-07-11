import normalizeDates from '../normalizeDates';

describe('normalizeDates', () => {
    it('should return normalize the array of dates', () => {
        const array = [undefined, '09/07/2022', new Date('09/08/2022'), 1];
        const expected = [new Date('09/07/2022'), new Date('09/08/2022')];
        expect(normalizeDates(array)).toEqual(expected);
    });
});
