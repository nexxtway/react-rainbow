import getSingleNewTypedValue from '../getSingleNewTypedValue';

describe('getSingleNewTypedValue', () => {
    it('should return null when a invalid prev value is passed', () => {
        const prevValues = [123, {}, []];
        prevValues.forEach(prevValue => expect(getSingleNewTypedValue(prevValue, '1')).toBe(null));
    });
    it('should return null when a invalid value is passed', () => {
        const values = [undefined, null, 123, {}, [], ''];
        values.forEach(value => expect(getSingleNewTypedValue('01', value)).toBe(null));
    });
    it('should return the same value passed when a prev value is not passed and a valid value is passed', () => {
        const values = [undefined, null, '', 0];
        values.forEach(value => expect(getSingleNewTypedValue(value, '12')).toBe('12'));
    });
    it('should return null when prev value and value are the same', () => {
        expect(getSingleNewTypedValue('01', '01')).toBe(null);
    });
    it('should return the "2" new value', () => {
        const values = ['012', '201', '021'];
        values.forEach(value => expect(getSingleNewTypedValue('01', value)).toBe('2'));
    });
    it('should return the "0" new value', () => {
        const values = ['002', '020'];
        values.forEach(value => expect(getSingleNewTypedValue('02', value)).toBe('0'));
    });
});
