import isMax from '../isMax';

describe('isMax helper', () => {
    it('should return false when number + step < max', () => {
        const number = 2;
        const step = 3;
        const max = 6;
        const isMaxCondition = isMax(number, step, max);
        expect(isMaxCondition).toBe(false);
    });

    it('should return false when number + step = max', () => {
        const number = 3;
        const step = 3;
        const max = 6;
        const isMaxCondition = isMax(number, step, max);
        expect(isMaxCondition).toBe(false);
    });

    it('should return true when number + step > max', () => {
        const number = 4;
        const step = 3;
        const max = 6;
        const isMaxCondition = isMax(number, step, max);
        expect(isMaxCondition).toBe(true);
    });
});
