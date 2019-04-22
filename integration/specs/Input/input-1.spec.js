const PageInput = require('../../../src/components/Input/pageObject');

const INPUT = '#input-component-1';

describe('Input base example', () => {
    beforeAll(() => {
        browser.url('/#!/Input/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(INPUT);
        component.waitForExist();
    });

    it('should put the input element focused when is clicked', () => {
        const input = new PageInput(INPUT);
        input.click();
        expect(input.hasFocusInput()).toBe(true);
    });
    it('should put the input element focused when the label element is clicked', () => {
        const input = new PageInput(INPUT);
        input.clickLabel();
        expect(input.hasFocusInput()).toBe(true);
    });
});
