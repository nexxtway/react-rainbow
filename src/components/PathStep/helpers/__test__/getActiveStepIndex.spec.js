import getActiveStepIndex from '../getActiveStepIndex';

describe('getActiveStepIndex function', () => {
    it('should return correct index', () => {
        const paramsList = [
            { hoveredIndex: -1, selectedIndex: -1, someStepHasError: false },
            { hoveredIndex: -1, selectedIndex: -1, someStepHasError: true },
            { hoveredIndex: -1, selectedIndex: 10, someStepHasError: false },
            { hoveredIndex: -1, selectedIndex: 10, someStepHasError: true },
            { hoveredIndex: 5, selectedIndex: -1, someStepHasError: false },
            { hoveredIndex: 5, selectedIndex: -1, someStepHasError: true },
            { hoveredIndex: 5, selectedIndex: 10, someStepHasError: false },
            { hoveredIndex: 5, selectedIndex: 10, someStepHasError: true },
        ];
        const results = [-1, -1, 10, -1, 5, 5, 5, 5];
        paramsList.forEach((params, index) => {
            expect(getActiveStepIndex(params)).toBe(results[index]);
        });
    });
});
