import { renderHook } from '@testing-library/react-hooks';
import useFocusedIndexState from '../useFocusedIndexState';

describe('useFocusedIndexState', () => {
    it('should return index 0 (first position) when value array is empty and length is 4', () => {
        const { result } = renderHook(() => useFocusedIndexState(['', '', '', ''], 4));
        expect(result.current).toBe(0);
    });
    it('should return index 2 when value array has two numbers and length is 4', () => {
        const { result } = renderHook(() => useFocusedIndexState(['3', '3', '', ''], 4));
        expect(result.current).toBe(2);
    });
    it('should return index 3 (last position) when value array has 4 numbers and length is 4', () => {
        const { result } = renderHook(() => useFocusedIndexState(['3', '3', '3', '3'], 4));
        expect(result.current).toBe(3);
    });
});
