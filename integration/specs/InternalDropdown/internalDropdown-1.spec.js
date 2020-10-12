const PageInternalDropdown = require('../../../src/components/InternalDropdown/pageObject');
const { ARROW_DOWN_KEY, ARROW_UP_KEY, ENTER_KEY } = require('../../constants');

const INTERNAL_DROPDOWN = '#internal-dropdown-1';

describe('InternalDropdown base example', () => {
    beforeAll(() => {
        browser.url('/#!/InternalDropdown/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(INTERNAL_DROPDOWN);
        component.waitForExist();
    });
    it('should render Arrow component at top of the list of options when scrolling down the list', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        internalDropdown.hoverScrollDownArrow();
        expect(internalDropdown.arrowUpExists()).toBe(true);
    });
    it('should not render Arrow component at top of the list of options when scroll is at top of the list', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        expect(internalDropdown.arrowUpExists()).toBe(false);
    });
    it('should render Arrow component at bottom of the list of options when scrolling up the list', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        internalDropdown.getOption(6).click();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(internalDropdown.arrowDownExists()).toBe(true);
    });
    it('should not render Arrow component at bottom of the list of options when last option is visible', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        internalDropdown.getOption(4).click();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(internalDropdown.arrowDownExists()).toBe(false);
    });
    it('should render Arrow component at top and bottom when first option and last options are not visible', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option4 = internalDropdown.getOption(5);
        option4.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(internalDropdown.arrowUpExists()).toBe(true);
        expect(internalDropdown.arrowDownExists()).toBe(true);
    });
    it('should set active next option when press arrow down key', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option1 = internalDropdown.getOption(0);
        const option2 = internalDropdown.getOption(1);
        option1.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(option2.isActive()).toBe(true);
    });
    it('should select the option active when press enter key', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option2 = internalDropdown.getOption(1);
        const option3 = internalDropdown.getOption(2);
        option2.click();
        browser.keys([ARROW_DOWN_KEY, ENTER_KEY]);
        expect(option3.isSelected()).toBe(true);
    });
    it('should select the option clicked', () => {
        const internalDropdown = new PageInternalDropdown(INTERNAL_DROPDOWN);
        const option1 = internalDropdown.getOption(0);
        option1.click();
        expect(option1.isSelected()).toBe(true);
    });
});
