import isSameDatesRange from '../isSameDatesRange';

describe('isSameMonth', () => {
    it('should return true', () => {
        const range1 = [
            null,
            undefined,
            [],
            [new Date(2019, 1, 1)],
            [new Date(2019, 1, 1), new Date(2019, 1, 10)],
        ];
        const range2 = [
            null,
            undefined,
            [],
            [new Date(2019, 1, 1)],
            [new Date(2019, 1, 1), new Date(2019, 1, 10)],
        ];

        range1.forEach((value, index) => {
            expect(isSameDatesRange(value, range2[index])).toBe(true);
        });
    });
    it('should return false', () => {
        const range1 = [
            null,
            undefined,
            [],
            [new Date(2019, 1, 1)],
            [new Date(2019, 1, 1), new Date(2019, 1, 10)],
        ];
        const range2 = [
            undefined,
            [],
            null,
            [new Date(2019, 1, 1), new Date(2019, 1, 10)],
            [new Date(2019, 1, 1)],
        ];

        range1.forEach((value, index) => {
            expect(isSameDatesRange(value, range2[index])).toBe(false);
        });
    });
});
