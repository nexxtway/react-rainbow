Here is an overview about how to use the Select page object:

    const PageSelect = require('react-rainbow-components/components/Select/pageObject');

    const SELECT = '#select-1';

    describe('Select page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });
        it('should put the select focused when clcik on it', () => {
            const select = new PageSelect(SELECT);
            select.click();
            expect(select.hasFocusSelect()).toBe(true);
        });
        it('should put the select focused when click on the label of the select', () => {
            const select = new PageSelect(SELECT);
            select.clickLabel();
            expect(select.hasFocusSelect()).toBe(true);
        });
    });
