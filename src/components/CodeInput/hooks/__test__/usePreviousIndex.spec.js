import { renderHook } from '@testing-library/react-hooks';
import usePreviousIndex from '../usePreviousIndex';

describe('usePreviousIndex', () => {
    it('should return current undefined on hook initialization', () => {
        const { result } = renderHook(() => usePreviousIndex());
        expect(result.current).toBe(undefined);
    });
    it('should return previous focused index after focusedIndex is updated; it is controlled by useRef internally inside usePreviousIndex hook', () => {
        const { result, rerender } = renderHook(focusedIndex => usePreviousIndex(focusedIndex));
        rerender(1);
        expect(result.current).toBe(undefined);
        rerender(2);
        expect(result.current).toEqual(1);
        rerender(3);
        expect(result.current).toEqual(2);
    });
});
