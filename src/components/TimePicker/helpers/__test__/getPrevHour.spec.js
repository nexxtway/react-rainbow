import getPrevHour from '../getPrevHour';

describe('getPrevHour', () => {
    it('should return the string "12" when any value is passed', () => {
        expect(getPrevHour()).toBe('12');
    });
    it('should return the string "12" when value passed converted to Number is equal to 1', () => {
        const values = ['1', 1];
        values.forEach(value => expect(getPrevHour(value)).toBe('12'));
    });
    it('should return the string of the value passed decreased by 1 when value passed converted to Number is different to 1', () => {
        const values = ['0', '11', '22', '30', '44', 9, 21, 12, 38, 58];
        const expects = ['-1', '10', '21', '29', '43', '8', '20', '11', '37', '57'];
        values.forEach((value, index) => expect(getPrevHour(value)).toBe(expects[index]));
    });
});
