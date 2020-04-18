import normalizeMinutes from '../normalizeMinutes';

describe('normalizeMinutes', () => {
    it('should return an empty string when the value passed is other type than a number', () => {
        const values = ['', 'asd', '0asd123', null, undefined, {}, []];
        values.forEach(value => expect(normalizeMinutes(value, '12')).toBe(''));
    });
    it('should return "00"', () => {
        const values = ['0', '00', '000', '0000'];
        values.forEach(value => expect(normalizeMinutes(value, '23')).toBe('00'));
    });
    it('should prefix with 0 when the value is less than 10', () => {
        const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const expects = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        values.forEach((value, index) =>
            expect(normalizeMinutes(value, '35')).toBe(expects[index]),
        );
    });
    it('should return the same value when the value passed is between 10 and 59', () => {
        const values = ['10', '010', '25', '025', '50', '59', '059'];
        const expects = ['10', '10', '25', '25', '50', '59', '59'];
        values.forEach((value, index) =>
            expect(normalizeMinutes(value, '02')).toBe(expects[index]),
        );
    });
});
