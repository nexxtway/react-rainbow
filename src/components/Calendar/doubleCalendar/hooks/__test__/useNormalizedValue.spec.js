import { renderHook } from '@testing-library/react-hooks';
import useNormalizedValue from '../useNormalizedValue';

describe('useNormalizedValue', () => {
    it('should return same value', () => {
        const date = new Date(2019, 0, 1);
        const { result } = renderHook(() => useNormalizedValue(date));
        expect(result.current).toEqual(date);
    });
    it('should return new changed value if value is not the same day', () => {
        const date1 = new Date(2019, 0, 1);
        const date2 = new Date(2019, 0, 1);
        const hook = renderHook(value => useNormalizedValue(value), {
            initialProps: date1,
        });
        expect(hook.result.current).toEqual(date1);
        hook.rerender(date2);
        expect(hook.result.current).toEqual(date2);
    });
    it('should return memoized value if value is the same day', () => {
        const date1 = new Date(2019, 0, 1);
        const date2 = new Date(2019, 0, 1, 23, 59, 59, 999);
        const hook = renderHook(value => useNormalizedValue(value), {
            initialProps: date1,
        });
        expect(hook.result.current).toEqual(date1);
        hook.rerender(date2);
        expect(hook.result.current).toEqual(date1);
    });
});
