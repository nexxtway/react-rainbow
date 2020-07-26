const PageMultiSelect = require('../../../src/components/MultiSelect/pageObject');

const MULTI_SELECT = '#multiselect-component-1';

describe('MultiSelect base', () => {
    beforeAll(() => {
        browser.url('/#!/MultiSelect/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(MULTI_SELECT);
        component.waitForExist();
    });

    it('should put the input element focused when clicked', () => {
        const input = new PageMultiSelect(MULTI_SELECT);
        input.click();
        expect(input.hasTriggerFocus()).toBe(true);
    });

    it('should put the input element focused when the label element is clicked', () => {
        const input = new PageMultiSelect(MULTI_SELECT);
        input.clickLabel();
        expect(input.hasTriggerFocus()).toBe(true);
    });
});
