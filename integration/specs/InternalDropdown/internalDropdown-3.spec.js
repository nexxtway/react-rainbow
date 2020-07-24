const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');

const INTERNALDROPDOWN = '#internal-dropdown-3';

describe('InternalDropdown base example', () => {
    beforeAll(() => {
        browser.url('/#!/InternalDropdown/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(INTERNALDROPDOWN);
        component.waitForExist();
    });
    it('should render only filtered options when type in search', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        internalDropdown.clickInputSearch();
        internalDropdown.setSearchCriteria('c');
        expect(internalDropdown.getOptionsLength()).toBe(2);
    });
    it('should not render Arrow component when the list of options fits the container', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        internalDropdown.clickInputSearch();
        internalDropdown.setSearchCriteria('c');
        expect(internalDropdown.getOptionsLength()).toBe(2);
        expect(internalDropdown.arrowUpExists()).toBe(false);
        expect(internalDropdown.arrowDownExists()).toBe(false);
    });
    it('should render EmptyMessage component when no results found in the search.', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        internalDropdown.clickInputSearch();
        internalDropdown.setSearchCriteria('cx');
        expect(internalDropdown.emptyMessageExist()).toBe(true);
    });
    it('should not render EmptyMessage component when no results found in the search.', () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        expect(internalDropdown.getOptionsLength()).toBeGreaterThanOrEqual(1);
        expect(internalDropdown.emptyMessageExist()).toBe(false);
    });
});
