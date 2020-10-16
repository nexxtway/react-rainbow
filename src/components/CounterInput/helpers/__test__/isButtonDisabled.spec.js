import isButtonDisabled from '../isButtonDisabled';

describe('isButtonDisabled helper', () => {
    it('should return true when isMinOrMax', () => {
        const isMinOrMax = true;
        const disabled = false;
        const readOnly = false;

        const disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
        expect(disable).toBe(true);
    });

    it('should return true when disabled', () => {
        const isMinOrMax = false;
        const disabled = true;
        const readOnly = false;

        const disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
        expect(disable).toBe(true);
    });

    it('should return true when readOnly', () => {
        const isMinOrMax = false;
        const disabled = false;
        const readOnly = true;

        const disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
        expect(disable).toBe(true);
    });

    it('should return false', () => {
        const isMinOrMax = false;
        const disabled = false;
        const readOnly = false;

        const disable = isButtonDisabled(isMinOrMax, disabled, readOnly);
        expect(disable).toBe(false);
    });
});
