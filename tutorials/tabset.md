Here is an overview about how to use the Tabset page object:
    const PageTabset = require('react-rainbow-components/components/Tabset/pageObject');

    const TABSET = '#tabset-1';

    const LEFT_ARROW = 'Left arrow';
    const RIGHT_ARROW = 'Right arrow';

    describe('Tabset page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });

        it('should select the first tab when selected', () => {
            const tabset = new PageTabset(TABSET);
            const tabItem = tabset.getItem(0);
            tabItem.click();
            expect(tabItem.isSelected()).toBe(true);
        });
        it('should select the next tab when the first has focus and right arrow key is pressed', () => {
            const tabset = new PageTabset(TABSET);
            const tabItem1 = tabset.getItem(0);
            const tabItem2 = tabset.getItem(1);
            tabItem1.click();
            browser.keys(RIGHT_ARROW);
            expect(tabItem2.isSelected()).toBe(true);
        });
        it('should lost focus the first tab if second tab is selected', () => {
            const tabset = new PageTabset(TABSET);
            const tabItem1 = tabset.getItem(0);
            const tabItem2 = tabset.getItem(1);
            tabItem1.click();
            tabItem2.click();
            expect(tabItem1.hasFocus()).toBe(false);
        });
    });
