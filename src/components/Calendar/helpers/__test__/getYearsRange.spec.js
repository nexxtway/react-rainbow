import getYearsRange from './../getYearsRange';

describe('getYearsRange', () => {
    it('should return the right years range when only currentMonth is passed', () => {
        const params = {
            currentMonth: 3,
        };
        expect(getYearsRange(params).length).toEqual(201);
    });
    it('should return the right years range when minDate and maxDate are passed', () => {
        const params = {
            currentMonth: 3,
            minDate: new Date(2018, 0, 4),
            maxDate: new Date(2020, 0, 4),
        };
        expect(getYearsRange(params)).toEqual([
            { disabled: false, label: 2018, value: 2018 },
            { disabled: false, label: 2019, value: 2019 },
            { disabled: true, label: 2020, value: 2020 },
        ]);
    });
});
