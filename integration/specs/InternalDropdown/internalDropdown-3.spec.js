const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');

const INTERNALDROPDOWN = '#internal-dropdown-3';

describe('InternalDropdown base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/InternalDropdown/3');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(INTERNALDROPDOWN);
        await component.waitForExist();
    });
    it('should render only filtered options when type in search', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await internalDropdown.clickSearch();
        await internalDropdown.setQuery('c');
        await expect(await internalDropdown.getOptionsLength()).toBe(2);
    });
    it('should not render Arrow component when the list of options fits the container', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await internalDropdown.clickSearch();
        await internalDropdown.setQuery('c');
        await expect(await internalDropdown.getOptionsLength()).toBe(2);
        await expect(await internalDropdown.arrowUpExists()).toBe(false);
        await expect(await internalDropdown.arrowDownExists()).toBe(false);
    });
    it('should render EmptyMessage component when no results found in the search.', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await internalDropdown.clickSearch();
        await internalDropdown.setQuery('cx');
        await expect(await internalDropdown.emptyMessageExist()).toBe(true);
    });
    it('should not render EmptyMessage component when no results found in the search.', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await expect(await internalDropdown.getOptionsLength()).toBeGreaterThanOrEqual(1);
        await expect(await internalDropdown.emptyMessageExist()).toBe(false);
    });
});
