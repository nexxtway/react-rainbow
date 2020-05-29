import normalizeValue from '../normalizeValue';

jest.mock('../getHour', () => value => {
    if (value) {
        return value.split(':')[0];
    }
    return '';
});

jest.mock('../getMinutes', () => value => {
    if (value) {
        return value.split(':')[1].split(' ')[0];
    }
    return '';
});

jest.mock('../getAmPm', () => value => {
    if (value) {
        return value.split(' ')[1];
    }
    return undefined;
});

jest.mock('../getAmPmValue', () => value => {
    return +value > 11 ? 'PM' : 'AM';
});

jest.mock('../get24Hour', () => (hour, ampm) => {
    if (!ampm) {
        return hour;
    }
    if (ampm === 'AM') {
        if (+hour === 12) {
            return '00';
        }
        return hour;
    }
    if (ampm === 'PM' && +hour < 13) {
        if (+hour === 12) {
            return '12';
        }
        return String(+hour + 12);
    }
    return hour;
});

jest.mock('../get12Hour', () => hour => {
    if (+hour === 0) {
        return '12';
    }
    if (+hour > 12) {
        if (+hour < 22) {
            return `0${String(+hour - 12)}`;
        }
        return String(+hour - 12);
    }
    return hour;
});

jest.mock('../normalizeHour', () => (value, hour24) => {
    if (+value === 0 && !hour24) {
        return '12';
    }
    if (+value < 10) {
        return `0${+value}`;
    }
    if (+value > 12 && +value < 20 && !hour24) {
        return `0${+value - 12}`;
    }
    return String(+value);
});

jest.mock('../normalizeMinutes', () => value => {
    if (+value < 10) {
        return `0${+value}`;
    }
    return String(+value);
});

describe('normalizeValue', () => {
    const expectedInvalidValue = {
        hour: '',
        minutes: '',
        ampm: '',
    };

    it('should return object with empty properties when value does not exists', () => {
        const values = [undefined, null, ''];
        values.forEach(value => expect(normalizeValue(value, true)).toEqual(expectedInvalidValue));
    });
    it('should return object with empty properties when hour24 is not a valid boolean', () => {
        const values = [undefined, null, '', 'text', 55];
        values.forEach(hour24 =>
            expect(normalizeValue('08:55', hour24)).toEqual(expectedInvalidValue),
        );
    });
    it('should return object with empty properties when invalid hour is passed', () => {
        const values = [':55', 'a:55', '34:55'];
        values.forEach(value => expect(normalizeValue(value, true)).toEqual(expectedInvalidValue));
    });
    it('should return object with empty properties when invalid minutes are passed', () => {
        const values = ['08:', '08:a', '08:88'];
        values.forEach(value => expect(normalizeValue(value, true)).toEqual(expectedInvalidValue));
    });
    it('should return object with empty properties when invalid ampm is passed', () => {
        const values = ['08:55 PP', '08:55 A', '08:55 AMP'];
        values.forEach(value => expect(normalizeValue(value, true)).toEqual(expectedInvalidValue));
    });
    it('should return the right value when hour24 is true', () => {
        const values = ['08:55', '18:05', '00:00', '12:12', '08:55 AM', '08:55 PM'];
        const expected = [
            { hour: '08', minutes: '55', ampm: '' },
            { hour: '18', minutes: '05', ampm: '' },
            { hour: '00', minutes: '00', ampm: '' },
            { hour: '12', minutes: '12', ampm: '' },
            { hour: '08', minutes: '55', ampm: '' },
            { hour: '20', minutes: '55', ampm: '' },
        ];
        values.forEach((value, index) =>
            expect(normalizeValue(value, true)).toEqual(expected[index]),
        );
    });
    it('should return the right value when hour24 is false', () => {
        const values = ['08:55', '18:05', '00:00', '12:12', '08:55 AM', '08:55 PM'];
        const expected = [
            { hour: '08', minutes: '55', ampm: 'AM' },
            { hour: '06', minutes: '05', ampm: 'PM' },
            { hour: '12', minutes: '00', ampm: 'AM' },
            { hour: '12', minutes: '12', ampm: 'PM' },
            { hour: '08', minutes: '55', ampm: 'AM' },
            { hour: '08', minutes: '55', ampm: 'PM' },
        ];
        values.forEach((value, index) =>
            expect(normalizeValue(value, false)).toEqual(expected[index]),
        );
    });
});
