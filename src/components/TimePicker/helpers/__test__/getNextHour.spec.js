import getNextHour from '../getNextHour';

describe('getNextHour', () => {
    it('should return the string "1" when any value is passed', () => {
        expect(getNextHour()).toBe('1');
    });
    it('should return the string "1" when value passed converted to Number is equal to 12', () => {
        const values = ['12', 12];
        values.forEach(value => expect(getNextHour(value)).toBe('1'));
    });
    it('should return the string of the value passed increased by 1 when value passed converted to Number is different to 12', () => {
        const values = ['0', '1', '2', '3', '4', 0, 1, 2, 3, 4];
        const expects = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5'];
        values.forEach((value, index) => expect(getNextHour(value)).toBe(expects[index]));
    });
});
