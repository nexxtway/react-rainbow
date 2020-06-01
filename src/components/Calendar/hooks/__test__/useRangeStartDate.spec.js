import { renderHook } from '@testing-library/react-hooks';
import useRangeStartDate from '../useRangeStartDate';

describe('useRangeStartDate', () => {
    it('should return true', () => {
        const date = new Date(2019, 0, 1);
        const range = [new Date(2019, 0, 1), new Date(2019, 0, 15)];
        const { result } = renderHook(() => useRangeStartDate(date, range));
        expect(result.current).toBe(true);
    });
    it('should return false', () => {
        const date = new Date(2019, 0, 13);
        const ranges = [
            null,
            undefined,
            [],
            [new Date(2019, 0, 17)],
            [new Date(2019, 0, 1), new Date(2019, 0, 15)],
        ];
        ranges.forEach(range => {
            const { result } = renderHook(() => useRangeStartDate(date, range));
            expect(result.current).toBe(false);
        });
    });
});
