Here is an overview about how to use the Tabset page object:
    const PageTabset = require('./../../src/components/Tabset/pageObject');

    const TABSET = '#tabset-1';

    const LEFT_ARROW = 'Left arrow';
    const RIGHT_ARROW = 'Right arrow';

    describe('Tabset base example', () => {
        beforeEach(() => {
            browser.url('/#!/Tabset/1');
            browser.refresh();
        });

        it('should select the first tab when selected', () => {
            const tabset = new PageTabset(TABSET);
            const tabItem = tabset.getItem(0);
            tabItem.click();
            expect(tabItem.isSelected()).toBe(true);
        });
        });
        it('should select the next tab when the first has focus and right arrow key is pressed', () => {
            const tabset = new PageTabset(TABSET);
            const tabItem = tabset.getItem(0);
            const tabItem2 = tabset.getItem(1);
            tabItem.click();
            browser.keys(RIGHT_ARROW);
            expect(tabItem2.isSelected()).toBe(true);
        });
        it('should loose focus if other tab is selected', () => {
            const tabset = new PageTabset(TABSET);
            const tabItem = tabset.getItem(0);
            const tabItem2 = tabset.getItem(1);
            tabItem.click();
            tabItem2.click();
            expect(tabItem.hasFocus()).toBe(false);
        });
    });
