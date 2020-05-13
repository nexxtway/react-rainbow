import { renderHook } from '@testing-library/react-hooks';
import usePreviousIndex from '../usePreviousIndex';

describe('usePreviousIndex', () => {
    it('should return current undefined on hook initialization', () => {
        const { result } = renderHook(() => usePreviousIndex());
        expect(result.current).toBe(undefined);
    });
    it('should return 1 when focusedIndex is 1', () => {
        const { result, rerender } = renderHook(initialValue => usePreviousIndex(initialValue));
        expect(result.current).toBe(undefined);
        rerender(2);
        setTimeout(() => {
            expect(result.current).toEqual(2);
        }, 1000);
    });
});
