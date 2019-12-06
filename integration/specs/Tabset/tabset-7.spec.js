const PageTabset = require('../../../src/components/Tabset/pageObject');
const { ARROW_RIGHT_KEY } = require('../../constants');

const TABSET = '#tabset-7';

const addRecents = () => $('#button-icon_add-recents').click();

describe('Tabset with Tabs changed dynamically', () => {
    beforeAll(() => {
        browser.url('/#!/Tabset/7');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TABSET);
        component.waitForExist();
    });

    it('should select the new option with keyboard after it is added dynamically', () => {
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
    it('should select the second option with keyboard after it is added and remove dynamically a new element', () => {
        const tabset = new PageTabset(TABSET);
        addRecents();
        const firstTab = tabset.getItem(0);
        firstTab.click();
        browser.keys(ARROW_RIGHT_KEY);
        const secondTab = tabset.getItem(1);
        expect(secondTab.isSelected()).toBe(true);
        expect(secondTab.getLabelText()).toBe('RECENTS');
        addRecents();
        firstTab.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(secondTab.isSelected()).toBe(true);
        expect(secondTab.getLabelText()).toBe('SHARED');
    });
});
