import getValueArray from '../getValueArray';

describe('getValueArray', () => {
    it('should return an array with 2 empty positions when value is number and maxLength is 2', () => {
        const maxLength = 2;
        expect(getValueArray('', maxLength)).toEqual(['', '']);
    });
    it('should return an array with 3 positions filled with numbers when a mixed text and numbers are passed as value and maxLength is 3', () => {
        const maxLength = 3;
        expect(getValueArray('a1b2c3d4c5', maxLength)).toEqual(['1', '2', '3']);
    });
    it('should return an array with the last position empty when value is a string with two numbers and maxLength is 3', () => {
        const maxLength = 3;
        expect(getValueArray('12', maxLength)).toEqual(['1', '2', '']);
    });
});
