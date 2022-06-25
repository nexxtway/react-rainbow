const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');
const { ARROW_DOWN_KEY, ARROW_UP_KEY, ENTER_KEY } = require('../../constants');

const INTERNAL_DROPDOWN = '#internal-dropdown-1';

describe('InternalDropdown base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/InternalDropdown/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(INTERNAL_DROPDOWN);
        await component.waitForExist();
    });
    it('should render Arrow component at top of the list of options when scrolling down the list', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        await internalDropdown.hoverScrollDownArrow();
        await expect(await internalDropdown.arrowUpExists()).toBe(true);
    });
    it('should not render Arrow component at top of the list of options when scroll is at top of the list', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        await expect(await internalDropdown.arrowUpExists()).toBe(false);
    });
    it('should render Arrow component at bottom of the list of options when scrolling up the list', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        await (await internalDropdown.getOption(6)).click();
        await browser.keys(ARROW_UP_KEY);
        await browser.keys(ARROW_UP_KEY);
        await expect(await internalDropdown.arrowDownExists()).toBe(true);
    });
    it('should not render Arrow component at bottom of the list of options when last option is visible', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        await (await internalDropdown.getOption(4)).click();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await internalDropdown.arrowDownExists()).toBe(false);
    });
    it('should render Arrow component at top and bottom when first option and last options are not visible', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option4 = await internalDropdown.getOption(5);
        await option4.click();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await internalDropdown.arrowUpExists()).toBe(true);
        await expect(await internalDropdown.arrowDownExists()).toBe(true);
    });
    it('should set active next option when press arrow down key', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option1 = await internalDropdown.getOption(0);
        const option2 = await internalDropdown.getOption(1);
        await option1.click();
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await option2.isActive()).toBe(true);
    });
    it('should select the option active when press enter key', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option2 = await internalDropdown.getOption(1);
        const option3 = await internalDropdown.getOption(2);
        await option2.click();
        await browser.keys([ARROW_DOWN_KEY, ENTER_KEY]);
        await expect(await option3.isSelected()).toBe(true);
    });
    it('should select the option clicked', async () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option1 = await internalDropdown.getOption(0);
        await option1.click();
        await expect(await option1.isSelected()).toBe(true);
    });
});
