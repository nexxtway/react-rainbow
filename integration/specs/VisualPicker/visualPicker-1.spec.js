const PageVisualPicker = require('../../../src/components/VisualPicker/pageObject');
const { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const VISUAL_PICKER = '#visual-picker-component-1';

describe('VisualPicker with single option selection', () => {
    beforeAll(() => {
        browser.url('/#!/VisualPicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(VISUAL_PICKER);
        component.waitForExist();
    });
    it(' set the focus on the item clicked', () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option = visualPicker.getItem(0);
        option.click();
        expect(option.hasFocus()).toBe(true);
    });
    it('should loose focus if another option is clicked', () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = visualPicker.getItem(0);
        const option2 = visualPicker.getItem(1);
        option1.click();
        option2.click();
        expect(option1.hasFocus()).toBe(false);
    });
    it('should set checked on the option when clicked', () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option = visualPicker.getItem(0);
        option.click();
        expect(option.isChecked()).toBe(true);
    });
    it('should not be checked if another option is clicked', () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = visualPicker.getItem(0);
        const option2 = visualPicker.getItem(1);
        option1.click();
        option2.click();
        expect(option1.isChecked()).toBe(false);
    });
    it(' should check the next option when press left arrow key', () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = visualPicker.getItem(0);
        const option2 = visualPicker.getItem(1);
        option2.click();
        browser.keys(ARROW_LEFT_KEY);
        expect(option1.isChecked()).toBe(true);
        expect(option2.isChecked()).toBe(false);
    });
    it(' should check the next option when press right arrow key', () => {
        const visualPicker = new PageVisualPicker(VISUAL_PICKER);
        const option1 = visualPicker.getItem(0);
        const option2 = visualPicker.getItem(1);
        option1.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(option1.isChecked()).toBe(false);
        expect(option2.isChecked()).toBe(true);
    });
});
