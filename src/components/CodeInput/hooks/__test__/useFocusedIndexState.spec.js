import { renderHook } from '@testing-library/react-hooks';
import useFocusedIndexState from '../useFocusedIndexState';

describe('useFocusedIndexState', () => {
    it('should return index 0 (first position) when value array is empty and length is 4', () => {
        const length = 4;
        const disabled = false;
        const readOnly = false;
        const { result } = renderHook(() =>
            useFocusedIndexState(['', '', '', ''], length, disabled, readOnly),
        );
        expect(result.current).toBe(0);
    });
    it('should return index 2 when value array has two numbers and length is 4', () => {
        const length = 4;
        const disabled = false;
        const readOnly = false;
        const { result } = renderHook(() =>
            useFocusedIndexState(['3', '3', '', ''], length, disabled, readOnly),
        );
        expect(result.current).toBe(2);
    });
    it('should return index 3 (last position) when value array has 4 numbers and length is 4', () => {
        const length = 4;
        const disabled = false;
        const readOnly = false;
        const { result } = renderHook(() =>
            useFocusedIndexState(['3', '3', '3', '3'], length, disabled, readOnly),
        );
        expect(result.current).toBe(3);
    });
    it('should return index undefined (no focus) when disabled is true', () => {
        const length = 4;
        const disabled = true;
        const readOnly = false;
        const { result } = renderHook(() =>
            useFocusedIndexState(['3', '3', '3', '3'], length, disabled, readOnly),
        );
        expect(result.current).toBe(undefined);
    });
    it('should return index undefined (no focus) when readOnly is true', () => {
        const length = 4;
        const disabled = false;
        const readOnly = true;
        const { result } = renderHook(() =>
            useFocusedIndexState(['3', '3', '3', '3'], length, disabled, readOnly),
        );
        expect(result.current).toBe(undefined);
    });
});
