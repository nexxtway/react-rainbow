import isOptionChecked from '../isOptionChecked';

const option = { value: 'admin', label: 'Admin' };
const optionDisabled = { value: 'admin', label: 'Admin', disabled: true };

describe('isOptionChecked', () => {
    it('should return false when value is empty', () => {
        expect(isOptionChecked(option, undefined)).toBe(false);
        expect(isOptionChecked(option, null)).toBe(false);
        expect(isOptionChecked(option, '')).toBe(false);
        expect(isOptionChecked(option, 0)).toBe(false);
    });
    it('should return true when option is selected and it is not disabled', () => {
        expect(isOptionChecked(option, 'admin')).toBe(true);
        expect(isOptionChecked(optionDisabled, 'admin')).toBe(false);
    });
});
