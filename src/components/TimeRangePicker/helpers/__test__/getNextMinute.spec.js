import getNextMinute from '../getNextMinute';

describe('getNextMinute', () => {
    it('should return the string "0" when any value is passed', () => {
        expect(getNextMinute()).toBe('0');
    });
    it('should return the string "0" when value passed converted to Number is equal to 59', () => {
        const values = ['59', 59];
        values.forEach(value => expect(getNextMinute(value)).toBe('0'));
    });
    it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 59', () => {
        const values = ['0', '11', '22', '30', '44', 9, 21, 12, 38, 58];
        const expects = ['1', '12', '23', '31', '45', '10', '22', '13', '39', '59'];
        values.forEach((value, index) => expect(getNextMinute(value)).toBe(expects[index]));
    });
});
