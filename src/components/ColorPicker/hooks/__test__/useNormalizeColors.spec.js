import { renderHook } from '@testing-library/react-hooks';
import useNormalizeColors, { defaultColors } from '../useNormalizeColors';

describe('useNormalizeColors', () => {
    it('should return empty array', () => {
        const values = ['', null, true, 0, {}, [], ['', 'qwww']];

        values.forEach(value => {
            const { result } = renderHook(() => useNormalizeColors({ defaultColors: value }));
            expect(result.current).toStrictEqual([]);
        });
    });

    it('should return array of valid colors', () => {
        const values = [
            ['#5ebbff', '#42d8be', '#3be282'],
            ['#5ebbff', 'qwe', '#42d8be', '#3be282'],
        ];

        values.forEach(value => {
            const { result } = renderHook(() => useNormalizeColors({ defaultColors: value }));
            expect(result.current).toStrictEqual(values[0]);
        });
    });

    it('should return default colors', () => {
        const values = [null, [], ['', 'qwww']];

        values.forEach(value => {
            const { result } = renderHook(() =>
                useNormalizeColors({ defaultColors: value, variant: 'colors-fixed' }),
            );
            expect(result.current).toStrictEqual(defaultColors);
        });
    });

    it('should return array of valid colors when the variant is colors-fixed', () => {
        const values = [
            ['#5ebbff', '#42d8be', '#3be282'],
            ['#5ebbff', 'qwe', '#42d8be', '#3be282'],
        ];

        values.forEach(value => {
            const { result } = renderHook(() =>
                useNormalizeColors({ defaultColors: value, variant: 'colors-fixed' }),
            );
            expect(result.current).toStrictEqual(values[0]);
        });
    });
});
