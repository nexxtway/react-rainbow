import { eachShouldBeOneOrFunction } from './../utils';

describe('eachShouldBeOneOrFunction', () => {
    it('should return true when all items in the array passed are 1 or function', () => {
        const results = [1, 1, 1, 'function', 'function'];
        expect(eachShouldBeOneOrFunction(results)).toBe(true);
    });
    it('should return false when one item in the array passed is not 1 or function', () => {
        const results = [
            [1, 1, 0, 'function', 'function'],
            [1, 1, 1, '', 'function'],
            [1, 1, 1, 'object', 'function'],
            [1, 1, 1, undefined, 'function'],
            [2, 1, 1, 'function', 'function'],
            [1, 1, null, 'function', 'function'],
            [1, 1, [], 'function', 'function'],
            [1, 1, 1, {}, 'function'],
        ];
        results.forEach(result => expect(eachShouldBeOneOrFunction(result)).toBe(false));
    });
});
