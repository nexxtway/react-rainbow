import { renderHook } from '@testing-library/react-hooks';
import useRangeFromValue from '../useRangeFromValue';

jest.mock('../../helpers/normalizeDate', () => jest.fn(() => '2019-01-01'));
jest.mock('../../helpers/normalizeRange', () => jest.fn(() => ['2019-01-01']));

describe('useCurrentDateFromValue', () => {
    it('is should return undefined when selectionType is single', () => {
        const date = new Date(2019, 0, 15);
        const { result } = renderHook(() => useRangeFromValue(date, 'single'));
        expect(result.current).toBe(undefined);
    });
    it('is should return array with date when selectionType is range and value is null, undefined or not an array', () => {
        const dates = [null, undefined, new Date(2019, 0, 15), '2019-01-23'];
        dates.forEach(date => {
            const { result } = renderHook(() => useRangeFromValue(date, 'range'));
            expect(result.current).toEqual(['2019-01-01']);
        });
    });
    it('is should return empty array when selectionType is range and value is empty array', () => {
        const dates = [[], [undefined], [null], [undefined, undefined], [null, null]];
        dates.forEach(date => {
            const { result } = renderHook(() => useRangeFromValue(date, 'range'));
            expect(result.current).toEqual([]);
        });
    });
    it('is should return normalized range when selectionType is range and value is array of dates', () => {
        const dates = [[new Date()], [new Date(), new Date()]];
        dates.forEach(date => {
            const { result } = renderHook(() => useRangeFromValue(date, 'range'));
            expect(result.current).toEqual(['2019-01-01']);
        });
    });
});
