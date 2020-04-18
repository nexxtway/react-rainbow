import getPrevMinute from '../getPrevMinute';

describe('getPrevMinute', () => {
    it('should return the string "59" when any value is passed', () => {
        expect(getPrevMinute()).toBe('59');
    });
    it('should return the string "59" when value passed converted to Number is equal to 0', () => {
        const values = ['0', 0];
        values.forEach(value => expect(getPrevMinute(value)).toBe('59'));
    });
    it('should return the string of the value passed decreased by 1 when value passed converted to Number is different to 0', () => {
        const values = ['1', '22', '30', '44', '59', 9, 21, 12, 38, 58, 60];
        const expects = ['0', '21', '29', '43', '58', '8', '20', '11', '37', '57', '59'];
        values.forEach((value, index) => expect(getPrevMinute(value)).toBe(expects[index]));
    });
});
