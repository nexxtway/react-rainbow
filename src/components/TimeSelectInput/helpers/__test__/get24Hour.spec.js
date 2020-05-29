import get24Hour from '../get24Hour';

describe('get24Hour', () => {
    it('should return an empty string with invalid hour values', () => {
        const values = ['-1', '24', '25', '77', 'as', undefined, null];
        values.forEach(value => expect(get24Hour(value)).toBe(''));
    });
    it('should return the same result regardless the AMPM case', () => {
        const values = ['am', 'AM', 'pm', 'PM'];
        const expected = ['00', '00', '12', '12'];
        values.forEach((ampm, index) => expect(get24Hour('12', ampm)).toBe(expected[index]));
    });
    it('should return the same hour when ampm is AM and hour <> 12 or hour is >= 12 and ampm is PM', () => {
        const values = [
            { ampm: 'AM', hour: '01' },
            { ampm: 'AM', hour: '02' },
            { ampm: 'AM', hour: '03' },
            { ampm: 'AM', hour: '04' },
            { ampm: 'AM', hour: '05' },
            { ampm: 'AM', hour: '06' },
            { ampm: 'AM', hour: '07' },
            { ampm: 'AM', hour: '08' },
            { ampm: 'AM', hour: '09' },
            { ampm: 'AM', hour: '10' },
            { ampm: 'AM', hour: '11' },
            { ampm: 'AM', hour: '13' },
            { ampm: 'AM', hour: '14' },
            { ampm: 'AM', hour: '15' },
            { ampm: 'AM', hour: '16' },
            { ampm: 'AM', hour: '17' },
            { ampm: 'AM', hour: '18' },
            { ampm: 'AM', hour: '19' },
            { ampm: 'AM', hour: '20' },
            { ampm: 'AM', hour: '21' },
            { ampm: 'AM', hour: '22' },
            { ampm: 'AM', hour: '23' },
            { ampm: 'PM', hour: '12' },
            { ampm: 'PM', hour: '13' },
            { ampm: 'PM', hour: '14' },
            { ampm: 'PM', hour: '15' },
            { ampm: 'PM', hour: '16' },
            { ampm: 'PM', hour: '17' },
            { ampm: 'PM', hour: '18' },
            { ampm: 'PM', hour: '19' },
            { ampm: 'PM', hour: '20' },
            { ampm: 'PM', hour: '21' },
            { ampm: 'PM', hour: '22' },
            { ampm: 'PM', hour: '23' },
        ];
        values.forEach(value => expect(get24Hour(value.hour, value.ampm)).toBe(value.hour));
    });
    it('should return the hour plus 12 when ampm is PM and hour < 12', () => {
        const values = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
        const expected = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        values.forEach((value, index) => expect(get24Hour(value, 'PM')).toBe(expected[index]));
    });
});
