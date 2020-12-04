import isStepSelected from '../isStepSelected';

describe('getActiveStepIndex function', () => {
    it('should return false', () => {
        const paramsList = [
            { hoveredIndex: -1, selectedIndex: -1, index: 2, someStepHasError: false },
            { hoveredIndex: -1, selectedIndex: -1, index: 2, someStepHasError: true },
            { hoveredIndex: -1, selectedIndex: 2, index: 2, someStepHasError: true },
            { hoveredIndex: 5, selectedIndex: -1, index: 2, someStepHasError: true },
            { hoveredIndex: 5, selectedIndex: -1, index: 2, someStepHasError: false },
        ];
        paramsList.forEach(params => {
            expect(isStepSelected(params)).toBe(false);
        });
    });
    it('should return true', () => {
        expect(
            isStepSelected({
                hoveredIndex: -1,
                selectedIndex: 2,
                index: 2,
                someStepHasError: false,
            }),
        ).toBe(true);
    });
});
