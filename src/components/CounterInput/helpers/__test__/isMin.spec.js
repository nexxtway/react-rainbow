import isMin from '../isMin';

describe('isMax helper', () => {
    it('should return false when number - step > min', () => {
        const number = -2;
        const step = 3;
        const min = -6;
        const isMaxCondition = isMin(number, step, min);
        expect(isMaxCondition).toBe(false);
    });

    it('should return true when number - step < min', () => {
        const number = -4;
        const step = 3;
        const min = -6;
        const isMaxCondition = isMin(number, step, min);
        expect(isMaxCondition).toBe(true);
    });
});
