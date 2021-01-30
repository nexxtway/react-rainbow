const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');

const INTERNALDROPDOWN = '#internal-dropdown-5';

describe('InternalDropdown with custom search', () => {
    beforeAll(() => {
        browser.url('/#!/InternalDropdown/5');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(INTERNALDROPDOWN);
        component.waitForExist();
    });
    it('should filter based on custom search', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        internalDropdown.clickSearch();
        internalDropdown.setQuery('Picklist');
        browser.waitUntil(() => !internalDropdown.isLoading());
        expect(internalDropdown.getOptionsLength()).toBe(2);
    });
    it('should set first option as active after search', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        internalDropdown.clickSearch();
        internalDropdown.setQuery('Picklist');
        browser.waitUntil(() => !internalDropdown.isLoading());
        expect(internalDropdown.getOptionsLength()).toBe(2);
        const option = internalDropdown.getOption(0);
        expect(option.isActive()).toBe(true);
    });
    it('should render empty message when custom search has no results', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        internalDropdown.clickSearch();
        internalDropdown.setQuery('Xyz');
        browser.waitUntil(() => !internalDropdown.isLoading());
        expect(internalDropdown.emptyMessageExist()).toBe(true);
    });
});
