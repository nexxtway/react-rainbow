import getActiveStepIndex from '../getActiveStepIndex';

describe('getActiveStepIndex function', () => {
    it('should return correct index', () => {
        const paramsList = [
            { hoveredIndex: -1, selectedIndex: -1 },
            { hoveredIndex: -1, selectedIndex: 10 },
            { hoveredIndex: 5, selectedIndex: -1 },
            { hoveredIndex: 5, selectedIndex: 10 },
        ];
        const results = [-1, 10, 5, 5];
        paramsList.forEach((params, index) => {
            expect(getActiveStepIndex(params)).toBe(results[index]);
        });
    });
});
