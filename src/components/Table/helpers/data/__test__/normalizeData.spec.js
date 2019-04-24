import { normalizeData } from '../';

describe('normalizeData', () => {
    it('should return the same data passed when it is an empty array', () => {
        expect(normalizeData([])).toEqual([]);
    });
    it('should return the same data passed when it is an array', () => {
        expect(normalizeData(['data-1', 'data-2'])).toEqual(['data-1', 'data-2']);
    });
    it('should return an empty array when data passed is not an array', () => {
        const values = [null, undefined, {}, 'asd', 123, () => {}];
        values.forEach(value => expect(normalizeData(value)).toEqual([]));
    });
});
