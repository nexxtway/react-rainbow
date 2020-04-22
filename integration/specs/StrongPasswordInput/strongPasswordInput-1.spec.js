const PageStrongPasswordInput = require('../../../src/components/StrongPasswordInput/pageObject');

const INPUT = '#strong-password-input-1';

describe('StrongPasswordInput base example', () => {
    beforeAll(() => {
        browser.url('/#!/StrongPasswordInput/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(INPUT);
        component.waitForExist();
    });

    it('should put the input element focused when is clicked', () => {
        const input = new PageStrongPasswordInput(INPUT);
        input.click();
        expect(input.hasFocusInput()).toBe(true);
    });
    it('should put the input element focused when the label element is clicked', () => {
        const input = new PageStrongPasswordInput(INPUT);
        input.clickLabel();
        expect(input.hasFocusInput()).toBe(true);
    });
});
