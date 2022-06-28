const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');

const INTERNALDROPDOWN = '#internal-dropdown-7';

describe('InternalDropdown with custom search', () => {
    beforeAll(async () => {
        await browser.url('/#!/InternalDropdown/7');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(INTERNALDROPDOWN);
        await component.waitForExist();
    });
    it('should filter based on custom search', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await internalDropdown.clickSearch();
        await internalDropdown.setQuery('Picklist');
        await browser.waitUntil(async () => internalDropdown.isLoading());
        await browser.waitUntil(async () => !(await internalDropdown.isLoading()));
        await expect(await internalDropdown.getOptionsLength()).toBe(2);
    });
    it('should set first option as active after search', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await internalDropdown.clickSearch();
        await internalDropdown.setQuery('Picklist');
        await browser.waitUntil(async () => internalDropdown.isLoading());
        await browser.waitUntil(async () => !(await internalDropdown.isLoading()));
        await expect(await internalDropdown.getOptionsLength()).toBe(2);
        const option = await internalDropdown.getOption(0);
        await expect(await option.isActive()).toBe(true);
    });
    it('should render empty message when custom search has no results', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNALDROPDOWN);
        await internalDropdown.clickSearch();
        await internalDropdown.setQuery('Xyz');
        await browser.waitUntil(async () => internalDropdown.isLoading());
        await browser.waitUntil(async () => !(await internalDropdown.isLoading()));
        await expect(await internalDropdown.emptyMessageExist()).toBe(true);
    });
});
