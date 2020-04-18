import get24HourTime from '../get24HourTime';

describe('get24HourTime', () => {
    it('should return the right 24 hour for AM time', () => {
        const values = [
            { hour: '12', minutes: '12', ampm: 'AM' },
            { hour: '01', minutes: '35', ampm: 'AM' },
            { hour: '02', minutes: '59', ampm: 'AM' },
            { hour: '03', minutes: '50', ampm: 'AM' },
            { hour: '04', minutes: '00', ampm: 'AM' },
            { hour: '05', minutes: '56', ampm: 'AM' },
            { hour: '06', minutes: '30', ampm: 'AM' },
            { hour: '07', minutes: '08', ampm: 'AM' },
            { hour: '08', minutes: '45', ampm: 'AM' },
            { hour: '09', minutes: '20', ampm: 'AM' },
            { hour: '10', minutes: '34', ampm: 'AM' },
            { hour: '11', minutes: '16', ampm: 'AM' },
        ];
        const expects = [
            '00:12',
            '01:35',
            '02:59',
            '03:50',
            '04:00',
            '05:56',
            '06:30',
            '07:08',
            '08:45',
            '09:20',
            '10:34',
            '11:16',
        ];
        values.forEach((value, index) => expect(get24HourTime(value)).toBe(expects[index]));
    });
    it('should return the right 24 hour for PM time', () => {
        const values = [
            { hour: '12', minutes: '12', ampm: 'PM' },
            { hour: '01', minutes: '35', ampm: 'PM' },
            { hour: '02', minutes: '59', ampm: 'PM' },
            { hour: '03', minutes: '50', ampm: 'PM' },
            { hour: '04', minutes: '00', ampm: 'PM' },
            { hour: '05', minutes: '56', ampm: 'PM' },
            { hour: '06', minutes: '30', ampm: 'PM' },
            { hour: '07', minutes: '08', ampm: 'PM' },
            { hour: '08', minutes: '20', ampm: 'PM' },
            { hour: '09', minutes: '34', ampm: 'PM' },
            { hour: '10', minutes: '16', ampm: 'PM' },
            { hour: '11', minutes: '02', ampm: 'PM' },
        ];
        const expects = [
            '12:12',
            '13:35',
            '14:59',
            '15:50',
            '16:00',
            '17:56',
            '18:30',
            '19:08',
            '20:20',
            '21:34',
            '22:16',
            '23:02',
        ];
        values.forEach((value, index) => expect(get24HourTime(value)).toBe(expects[index]));
    });
    it('should return the right 24 hour when ampm has incorrect value', () => {
        const values = [
            { hour: '04', minutes: '35', ampm: false },
            { hour: '14', minutes: '35', ampm: undefined },
            { hour: '16', minutes: '35', ampm: 'am' },
            { hour: '23', minutes: '35' },
        ];
        const expects = ['04:35', '14:35', '16:35', '23:35'];
        values.forEach((value, index) => expect(get24HourTime(value)).toBe(expects[index]));
    });
});
