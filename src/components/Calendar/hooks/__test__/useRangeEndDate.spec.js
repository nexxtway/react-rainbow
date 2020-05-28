import { renderHook } from '@testing-library/react-hooks';
import useRangeEndDate from '../useRangeEndDate';

describe('useRangeEndDate', () => {
    it('should return true', () => {
        const date = new Date(2019, 0, 15);
        const range = [new Date(2019, 0, 1), new Date(2019, 0, 15)];
        const { result } = renderHook(() => useRangeEndDate(date, range));
        expect(result.current).toBe(true);
    });
    it('should return false', () => {
        const date = new Date(2019, 0, 12);
        const ranges = [
            null,
            undefined,
            [],
            [new Date(2019, 0, 17)],
            [new Date(2019, 0, 1), new Date(2019, 0, 15)],
        ];
        ranges.forEach(range => {
            const { result } = renderHook(() => useRangeEndDate(date, range));
            expect(result.current).toBe(false);
        });
    });
});
