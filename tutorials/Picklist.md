Here is an overview about how to use the Picklist page object:

    const PagePicklist = require('../../../src/components/Picklist/pageObject');

    const PICKLIST = '#picklist-1';

    describe('Picklist base example', () => {
        beforeAll(() => {
            browser.url('/#!/Picklist/1');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(PICKLIST);
            component.waitForExist();
        });
        it('should open menu and set focus to input when click it', () => {
            const picklist = new PagePicklist(PICKLIST);
            expect(picklist.hasFocusInput()).toBe(false);
            expect(picklist.isMenuOpen()).toBe(false);
            picklist.clickInput();
            picklist.waitUntilOpen();
            expect(picklist.isMenuOpen()).toBe(true);
            expect(picklist.hasFocusInput()).toBe(true);
        });
        it("should select 'Empire State' with keyboard", () => {
            const picklist = new PagePicklist(PICKLIST);
            picklist.clickInput();
            picklist.waitUntilOpen();
            browser.keys(ARROW_DOWN_KEY);
            browser.keys(ENTER_KEY);
            expect(picklist.getLabel()).toBe('Empire State');
        });
        it('should set active the first option when other is active and close the menu and open it again', () => {
            const picklist = new PagePicklist(PICKLIST);
            picklist.clickInput();
            picklist.waitUntilOpen();
            let option = picklist.getOption(0);
            expect(option.isActive()).toBe(true);
            browser.keys(ARROW_DOWN_KEY);
            browser.keys(ENTER_KEY);
            browser.keys(ARROW_DOWN_KEY);
            picklist.waitUntilOpen();
            option = picklist.getOption(0);
            expect(option.isActive()).toBe(true);
        });
        it('should hide the option selected', () => {
            const picklist = new PagePicklist(PICKLIST);
            picklist.clickInput();
            picklist.waitUntilOpen();
            const option = picklist.getOption(0);
            const optionLabel = option.getLabel();
            browser.keys(ENTER_KEY);
            const labels = [];
            for (let index = 0; index < picklist.getRegisteredOptionsLength(); index += 1) {
                const opt = picklist.getOption(index);
                labels.push(opt.getLabel());
            }
            expect(labels.includes(optionLabel)).toBe(false);
        });
    });
