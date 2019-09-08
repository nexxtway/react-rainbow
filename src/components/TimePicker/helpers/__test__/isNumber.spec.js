import isNumber from '../isNumber';

describe('isNumber', () => {
    it('should return true when the value paseed is an entery number, it is not an empty string and it is not an array', () => {
        const values = ['00', '01', '56', 99, 100];
        values.forEach(value => expect(isNumber(value)).toBe(true));
    });
    it('should return false when the value paseed is an decimal number or negative number or it is an empty string or it is an array', () => {
        const values = [0.23, '0,1', -100, [], ''];
        values.forEach(value => expect(isNumber(value)).toBe(false));
    });
});
