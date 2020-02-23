import getNextHour from '../getNextHour';

describe('getNextHour', () => {
    it('should return the string "1" when no value is passed', () => {
        expect(getNextHour()).toBe('1');
    });
    it('should return the string "0" when no value is passed and hour24 is true', () => {
        expect(getNextHour(undefined, true)).toBe('0');
    });
    it('should return the string "1" when value passed converted to Number is equal to 12', () => {
        const values = ['12', 12];
        values.forEach(value => expect(getNextHour(value)).toBe('1'));
    });
    it('should return the string "0" when value passed converted to Number is equal to 23 and hour24 is true', () => {
        const values = ['23', 23];
        values.forEach(value => expect(getNextHour(value, true)).toBe('0'));
    });
    it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 12', () => {
        const values = ['0', '1', '2', '3', '4', 1, 2, 3, 4];
        const expects = ['1', '2', '3', '4', '5', '2', '3', '4', '5'];
        values.forEach((value, index) => expect(getNextHour(value)).toBe(expects[index]));
    });
    it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 23 and hour24 is true', () => {
        const values = ['12', '0', '1', '22', '3', '4', 1, 22, 3, 4];
        const expects = ['13', '1', '2', '23', '4', '5', '2', '23', '4', '5'];
        values.forEach((value, index) => expect(getNextHour(value, true)).toBe(expects[index]));
    });
});
