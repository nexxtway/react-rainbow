const PageTabset = require('../../../src/components/Tabset/pageObject');
const { ARROW_RIGHT_KEY } = require('../../constants');

const TABSET = '#tabset-7';

const addRecents = () => $('#button-icon_add-recents').click();

describe('Tabset with Tabs changed dynamically', () => {
    it('should select the new option with keyboard after it is added dynamically', () => {
        browser.url('/#!/Tabset/7');
        const component = $(TABSET);
        component.waitForExist();
        const tabset = new PageTabset(TABSET);
        const firstTab = tabset.getItem(0);
        firstTab.click();
        browser.keys(ARROW_RIGHT_KEY);
        const secondTab = tabset.getItem(1);
        expect(secondTab.isSelected()).toBe(true);
        expect(secondTab.getLabelText()).toBe('SHARED');
        browser.refresh();
        addRecents();
        firstTab.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(secondTab.isSelected()).toBe(true);
        expect(secondTab.getLabelText()).toBe('RECENTS');
    });
});
