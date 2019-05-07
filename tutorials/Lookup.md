Here is an overview about how to use the Lookup page object:

    const PageLookup = require('react-rainbow-components/components/Lookup/pageObject');

    const LOOKUP = '#lookup-1';

    describe('Lookup page object basic uasge', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(LOOKUP);
            component.waitForExist();
        });

        it('should open the menu with empty message when type a value that does not match any option', () => {
            const lookup = new PageLookup(LOOKUP);
            lookup.click();
            lookup.setValue('qwerty');
            lookup.waitUntilOpen();
            expect(lookup.isMenuOpen()).toBe(true);
            expect(lookup.isMenuEmpty()).toBe(true);
        });
        it('should render the right amount of matches', () => {
            const lookup = new PageLookup(LOOKUP);
            lookup.click();
            lookup.setValue('lo');
            lookup.waitUntilOpen();
            expect(lookup.getMatchedOptionsAmount()).toBe(3);
        });
        it('should close the menu, return focus to input and reset its value when click the close button while menu is open', () => {
            const lookup = new PageLookup(LOOKUP);
            lookup.click();
            lookup.setValue('qwerty');
            lookup.waitUntilOpen();
            lookup.clickCloseButton();
            expect(lookup.isMenuOpen()).toBe(false);
            expect(lookup.hasFocusInput()).toBe(true);
            expect(lookup.getValue()).toBe('');
        });
        it('should select Barcelona with keyboard', () => {
            const lookup = new PageLookup(LOOKUP);
            lookup.click();
            lookup.setValue('lo');
            lookup.waitUntilOpen();
            browser.keys(ARROW_DOWN_KEY);
            browser.keys(ENTER_KEY);
            expect(lookup.getSelectedOptionLabel()).toBe('Barcelona');
        });
        it('should select La Habana when click the item', () => {
            const lookup = new PageLookup(LOOKUP);
            lookup.click();
            lookup.setValue('l');
            lookup.waitUntilOpen();
            const item3 = lookup.getItem(2);
            item3.click();
            expect(lookup.getSelectedOptionLabel()).toBe('La Habana');
        });
    });
