import findValueByIndex from '../findValueByIndex';

describe('findValueByIndex', () => {
    it('should return undefined', () => {
        expect(findValueByIndex()).toBeUndefined();
        expect(findValueByIndex([])).toBeUndefined();
    });
    it('should return the right value', () => {
        const options = [
            { label: 'European Cities', type: 'header' },
            { label: 'London' },
            { label: 'Barcelona' },
            { label: 'American Cities', type: 'header' },
            { label: 'New York' },
            { label: 'Miami' },
            { label: 'Chicago' },
        ];
        const indexes = [0, 1, 2, 3, 4];
        const expects = ['London', 'Barcelona', 'New York', 'Miami', 'Chicago'];
        indexes.forEach((value, index) => {
            expect(findValueByIndex(options, value)).toEqual({
                label: expects[index],
            });
        });
    });
});
