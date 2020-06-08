import { renderHook } from '@testing-library/react-hooks';
import useFormatDate from '../useFormatDate';

describe('useFormatDate', () => {
    it('should return empty string when value is empty', () => {
        const params = [
            { value: null, selecttionType: 'single' },
            { value: undefined, selecttionType: 'single' },
            { value: null, selecttionType: 'range' },
            { value: undefined, selecttionType: 'range' },
            { value: [], selecttionType: 'range' },
        ];
        params.forEach(param => {
            const { result } = renderHook(() =>
                useFormatDate(param.value, 'large', 'en-US', param.selectionType),
            );
            expect(result.current).toBe('');
        });
    });
    it('should return single formatted date when selectionType is single', () => {
        const hook = renderHook(value => useFormatDate(value, 'large', 'en-US', 'single'), {
            initialProps: new Date(2018, 1, 1),
        });
        expect(hook.result.current).toBe('Thursday, 02/01/2018');
    });
    it('should return formatted range when selectionType is range', () => {
        const date1 = new Date(2018, 1, 1);
        const date2 = new Date(2018, 5, 4);
        const hook = renderHook(value => useFormatDate(value, 'large', 'en-US', 'range'), {
            initialProps: [date1],
        });
        hook.rerender([date1, date2]);
        expect(hook.result.current).toBe('Thursday, 02/01/2018 - Monday, 06/04/2018');
    });
});
