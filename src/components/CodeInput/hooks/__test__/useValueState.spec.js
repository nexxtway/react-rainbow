import { renderHook } from '@testing-library/react-hooks';
import useValueState from '../useValueState';

describe('useValueState', () => {
    it('should return array of four values when value is "1234" and length is 4', () => {
        const { result } = renderHook(() => useValueState('1234', 4));
        expect(result.current).toEqual(['1', '2', '3', '4']);
    });
});
