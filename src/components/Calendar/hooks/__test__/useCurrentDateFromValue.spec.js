import { renderHook } from '@testing-library/react-hooks';
import useCurrentDateFromValue from '../useCurrentDateFromValue';

describe('useCurrentDateFromValue', () => {
    it('should return same value', () => {
        const date1 = new Date(2019, 0, 1);
        const values = [null, undefined, date1];
        values.forEach(value => {
            const { result } = renderHook(() => useCurrentDateFromValue(value));
            expect(result.current).toBe(value);
        });
    });
    it('should return right value', () => {
        const date1 = new Date(2019, 0, 1);
        const date2 = new Date(2019, 0, 10);
        const values = [
            [undefined],
            [undefined, undefined],
            [null],
            [null, null],
            [date1],
            [date1, date2],
        ];
        const results = [undefined, undefined, undefined, null, date1, date1];
        values.forEach((value, index) => {
            const { result } = renderHook(() => useCurrentDateFromValue(value));
            expect(result.current).toBe(results[index]);
        });
    });
});
