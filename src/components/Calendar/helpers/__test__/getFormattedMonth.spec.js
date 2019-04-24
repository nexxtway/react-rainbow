import getFormattedMonth from './../getFormattedMonth';

describe('getFormattedMonth', () => {
    it('should return the right month', () => {
        const date = new Date(2019, 2, 21);
        expect(getFormattedMonth(date)).toBe('March');
    });
});
