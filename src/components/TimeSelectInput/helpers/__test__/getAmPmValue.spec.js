import getAmPmValue from '../getAmPmValue';

describe('getAmPmValue', () => {
    it('should return AM if hour is < than 12, otherwise, return PM', () => {
        const values = [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
        ];
        const expected = [
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'AM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
            'PM',
        ];
        values.forEach((value, index) => expect(getAmPmValue(value)).toBe(expected[index]));
    });
});
