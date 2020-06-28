import isFunction from '../isFunction';

describe('isFunction', () => {
    it('should return true', () => {
        const values = [
            () => {},
            // eslint-disable-next-line func-names
            function() {},
        ];
        values.forEach(value => {
            expect(isFunction(value)).toBe(true);
        });
    });
    it('should return false', () => {
        const values = [null, undefined, {}];
        values.forEach(value => {
            expect(isFunction(value)).toBe(false);
        });
    });
});
