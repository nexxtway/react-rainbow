import getWidthStyle from '../getWidthStyle';

describe('resizer helper', () => {
    describe('getWidthStyle', () => {
        it('should return an empty string when value passed is not great than zero', () => {
            const values = [0, -1, undefined];
            values.forEach(value => expect(getWidthStyle(value)).toBe(''));
        });
        it('should return the right width style', () => {
            expect(getWidthStyle(32)).toBe('width: 32px');
        });
    });
});
