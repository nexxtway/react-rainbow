import isValidMaxRowSelection from '../isValidMaxRowSelection';

describe('isValidMaxRowSelection', () => {
    it('should return false when any arguments are passed', () => {
        expect(isValidMaxRowSelection()).toBe(false);
    });
    it('should return true when maxRowSelection and rowsLength are the same', () => {
        const values = [0, 1, 2];
        values.forEach(value => {
            expect(isValidMaxRowSelection(value, value)).toBe(true);
        });
    });
    it('should return true when maxRowSelection is less than rowsLength', () => {
        const values = [2, 3, 4];
        values.forEach(value => {
            const maxRowSelection = 1;
            const rowsLength = value;
            expect(isValidMaxRowSelection(maxRowSelection, rowsLength)).toBe(true);
        });
    });
    it('should return false when maxRowSelection is greater than rowsLength', () => {
        const values = [3, 4, 5, '3', '4', '5'];
        values.forEach(value => {
            const maxRowSelection = value;
            const rowsLength = 2;
            expect(isValidMaxRowSelection(maxRowSelection, rowsLength)).toBe(false);
        });
    });
    it('should return false when maxRowSelection value is other than number', () => {
        const values = [{}, [], 'asd', undefined, null];
        values.forEach(value => {
            const maxRowSelection = value;
            const rowsLength = 3;
            expect(isValidMaxRowSelection(maxRowSelection, rowsLength)).toBe(false);
        });
    });
});
