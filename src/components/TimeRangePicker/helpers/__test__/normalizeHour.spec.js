import normalizeHour from '../normalizeHour';

describe('normalizeHour', () => {
    it('should return an empty string when the value passed is other type than a number', () => {
        const values = ['', 'asd', '0asd123', null, undefined, {}, []];
        values.forEach(value => expect(normalizeHour(value)).toBe(''));
    });
    it('should return "12" when the value passed is "000"', () => {
        expect(normalizeHour('000')).toBe('12');
    });
    it('should return "00" when the value passed is "000" and hour24 is true', () => {
        expect(normalizeHour('000', true)).toBe('00');
    });
    it('should return "00"', () => {
        const values = ['0', '00', '0000'];
        values.forEach(value => expect(normalizeHour(value)).toBe('00'));
        values.forEach(value => expect(normalizeHour(value, true)).toBe('00'));
    });
    it('should prefix with 0 when the value is less than 10', () => {
        const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const expects = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        values.forEach((value, index) => expect(normalizeHour(value)).toBe(expects[index]));
        values.forEach((value, index) => expect(normalizeHour(value, true)).toBe(expects[index]));
    });
    it('should return the value passed minus 12 when the value is between 12 and 20', () => {
        const values = ['13', '14', '15', '16', '17', '18', '19'];
        const expects = ['01', '02', '03', '04', '05', '06', '07'];
        values.forEach((value, index) => expect(normalizeHour(value)).toBe(expects[index]));
    });
    it('should return the value passed when the value is between 12 and 20 and hour24 is true', () => {
        const values = ['13', '14', '15', '16', '17', '18', '19'];
        const expects = ['13', '14', '15', '16', '17', '18', '19'];
        values.forEach((value, index) => expect(normalizeHour(value, true)).toBe(expects[index]));
    });
    it('should return "11"', () => {
        expect(normalizeHour('011')).toBe('11');
    });
});
