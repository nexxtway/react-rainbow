import getTableWidth from '../getTableWidth';

describe('getTableWidth', () => {
    it('should return 0 when nothing is passed', () => {
        expect(getTableWidth()).toBe(0);
    });
    it('should return the right table width', () => {
        const columns = [{ computedWidth: 123 }, { computedWidth: 20 }, { computedWidth: 110 }];
        expect(getTableWidth(columns)).toBe(253);
    });
});
