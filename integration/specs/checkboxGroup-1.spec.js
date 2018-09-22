const PageCheckboxGroup = require('./../../src/components/CheckboxGroup/pageObject');

const CHECKBOX_GROUP = '#checkbox-group-1';
const TAB_KEY = '\uE004';
const SPACE_KEY = '\uE00D';

describe('CheckboxGroup base example', () => {
    beforeEach(() => {
        browser.url('/#!/CheckboxGroup/1');
        browser.refresh();
    });
    it('should set the focus on the checkbox clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        expect(checkboxGroup.hasFocusItem(0)).toBe(true);
    });
    it('should lost the focus if another checkbox is clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        checkboxGroup.clickItem(1);
        expect(checkboxGroup.hasFocusItem(0)).toBe(false);
    });
    it('should lost the focus when the checkbox is selected and press the key TAB', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        browser.keys(TAB_KEY);
        expect(checkboxGroup.hasFocusItem(0)).toBe(false);
    });
    it('should set the checked on the checkbox clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        expect(checkboxGroup.isCheckedItem(0)).toBe(true);
    });
    it('should not loose the checked if another checkbox is clicked', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        checkboxGroup.clickItem(1);
        expect(checkboxGroup.isCheckedItem(0)).toBe(true);
    });
    it('should not lost the checked when the checkbox is selected and select by keyboard other checkbox', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        browser.keys(TAB_KEY);
        browser.keys(SPACE_KEY);
        expect(checkboxGroup.isCheckedItem(0)).toBe(true);
    });
    it('should set the checked when the first checkbox is selected and select by keyboard other checkbox', () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        checkboxGroup.clickItem(0);
        browser.keys(TAB_KEY);
        browser.keys(SPACE_KEY);
        expect(checkboxGroup.isCheckedItem(1)).toBe(true);
    });
});
