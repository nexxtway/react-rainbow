const PageCheckboxGroup = require('../../../src/components/CheckboxGroup/pageObject');
const { TAB_KEY, SPACE_KEY } = require('../../constants');

const CHECKBOX_GROUP = '#checkbox-group-1';

describe('CheckboxGroup base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/CheckboxGroup/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CHECKBOX_GROUP);
        await component.waitForExist();
    });

    it('should set the focus on the checkbox clicked', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = await checkboxGroup.getItem(0);
        await checkbox.click();
        await expect(await checkbox.hasFocus()).toBe(true);
    });
    it('should lost the focus if another checkbox is clicked', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox1 = await checkboxGroup.getItem(0);
        const checkbox2 = await checkboxGroup.getItem(1);
        await checkbox1.click();
        await checkbox2.click();
        await expect(await checkbox1.hasFocus()).toBe(false);
    });
    it('should lost the focus when the checkbox is selected and press the key TAB', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = await checkboxGroup.getItem(0);
        await checkbox.click();
        // TODO: Use constant once PR merged.
        await browser.keys('Tab');
        await expect(await checkbox.hasFocus()).toBe(false);
    });
    it('should set the checked on the checkbox clicked', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = await checkboxGroup.getItem(0);
        await checkbox.click();
        await expect(await checkbox.isChecked()).toBe(true);
    });
    it('should not loose the checked if another checkbox is clicked', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox1 = await checkboxGroup.getItem(0);
        const checkbox2 = await checkboxGroup.getItem(1);
        await checkbox1.click();
        await checkbox2.click();
        await expect(await checkbox1.isChecked()).toBe(true);
    });
    it('should not lost the checked when the checkbox is selected and select by keyboard other checkbox', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox = await checkboxGroup.getItem(0);
        await checkbox.click();
        await browser.keys(TAB_KEY);
        await browser.keys(SPACE_KEY);
        await expect(await checkbox.isChecked()).toBe(true);
    });
    it('should set the checked when the first checkbox is selected and select by keyboard other checkbox', async () => {
        const checkboxGroup = new PageCheckboxGroup(CHECKBOX_GROUP);
        const checkbox1 = await checkboxGroup.getItem(0);
        const checkbox2 = await checkboxGroup.getItem(1);
        await checkbox1.click();
        // TODO: Use constant once PR merged
        await browser.keys('Tab');
        await browser.keys('Space');
        await expect(await checkbox2.isChecked()).toBe(true);
    });
});
