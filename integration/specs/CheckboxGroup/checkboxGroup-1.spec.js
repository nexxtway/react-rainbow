const PageCheckboxGroup = require('../../../src/components/CheckboxGroup/pageObject');
const { TAB_KEY, SPACE_KEY } = require('../../constants');

const CHECKBOX_GROUP = '#checkbox-group-1';

describe('CheckboxGroup base example', () => {
    beforeAll(() => {
        browser.url('/#!/CheckboxGroup/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CHECKBOX_GROUP);
        component.waitForExist();
    });

    it('should set the focus on the checkbox clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = checkboxGroup.getItem(0);
        checkbox.click();
        expect(checkbox.hasFocus()).toBe(true);
    });
    it('should lost the focus if another checkbox is clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox1 = checkboxGroup.getItem(0);
        const checkbox2 = checkboxGroup.getItem(1);
        checkbox1.click();
        checkbox2.click();
        expect(checkbox1.hasFocus()).toBe(false);
    });
    it('should lost the focus when the checkbox is selected and press the key TAB', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = checkboxGroup.getItem(0);
        checkbox.click();
        // TODO: Use constant once PR merged.
        browser.keys('Tab');
        expect(checkbox.hasFocus()).toBe(false);
    });
    it('should set the checked on the checkbox clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = checkboxGroup.getItem(0);
        checkbox.click();
        expect(checkbox.isChecked()).toBe(true);
    });
    it('should not loose the checked if another checkbox is clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox1 = checkboxGroup.getItem(0);
        const checkbox2 = checkboxGroup.getItem(1);
        checkbox1.click();
        checkbox2.click();
        expect(checkbox1.isChecked()).toBe(true);
    });
    it('should not lost the checked when the checkbox is selected and select by keyboard other checkbox', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = checkboxGroup.getItem(0);
        checkbox.click();
        browser.keys(TAB_KEY);
        browser.keys(SPACE_KEY);
        expect(checkbox.isChecked()).toBe(true);
    });
    it('should set the checked when the first checkbox is selected and select by keyboard other checkbox', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox1 = checkboxGroup.getItem(0);
        const checkbox2 = checkboxGroup.getItem(1);
        checkbox1.click();
        // TODO: Use constant once PR merged
        browser.keys('Tab');
        browser.keys('Space');
        expect(checkbox2.isChecked()).toBe(true);
    });
});
