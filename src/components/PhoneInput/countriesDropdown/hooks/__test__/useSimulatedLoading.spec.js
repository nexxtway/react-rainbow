import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useSimulatedLoading } from '..';

const list = Array(90);

describe('useSimulatedLoading', () => {
    it('should return array with all elements ', async () => {
        const delta = 20;
        const { result } = renderHook(() => useSimulatedLoading(list, delta));
        expect(result.current).toEqual(list);
    });
    it('should return array with delta elements', async () => {
        jest.spyOn(React, 'useReducer').mockImplementation(() => ['', () => {}]);
        const delta = 20;
        const { result } = renderHook(() => useSimulatedLoading(list, delta));
        expect(result.current).toEqual(Array(delta));
    });
});
