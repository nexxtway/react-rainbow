Here is an overview about how to use the Input page object:

    const PageInput = require('react-rainbow-components/components/Input/pageObject');

    const INPUT = '#input-component-1';

    describe('Input page object basic uasge', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
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
