import buildNewRangeFromValue from '../buildNewRangeFromValue';

describe('buildNewRangeFromValue', () => {
    it('should return array with single date', () => {
        const value = new Date();
        const ranges = [undefined, null, []];
        ranges.forEach(range => {
            expect(buildNewRangeFromValue(value, range)).toEqual({
                range: [value],
            });
        });
    });
    it('should return array with two dates', () => {
        const date1 = new Date(2019, 2, 1);
        const date2 = new Date(2019, 21, 1, 23, 59, 59, 999);
        const range = [date1];
        expect(buildNewRangeFromValue(date2, range)).toEqual({
            range: [date1, date2],
        });
    });
    it('should return array with two dates and date3 as first date', () => {
        const date1 = new Date(2019, 0, 2);
        const date2 = new Date(2019, 0, 21, 23, 59, 59, 999);
        const date3 = new Date(2019, 0, 15);
        const range = [date1, date2];
        expect(buildNewRangeFromValue(date3, range)).toEqual({
            range: [date3, date2],
            nextUpdatePosition: 1,
        });
    });
});
