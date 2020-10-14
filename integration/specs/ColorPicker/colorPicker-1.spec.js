const PageColorPicker = require('../../../src/components/ColorPicker/pageObject');
const {
    TAB_KEY,
    ARROW_UP_KEY,
    ARROW_LEFT_KEY,
    ARROW_DOWN_KEY,
    ARROW_RIGHT_KEY,
} = require('../../constants');

const COLORPICKER = '#picker-color-1';

describe('ColorPicker default variant', () => {
    beforeAll(() => {
        browser.url('/#!/ColorPicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(COLORPICKER);
        component.waitForExist();
    });

    it('should focus the right common component when an tab key is pressed', () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        colorPicker.clickSaturation();
        expect(colorPicker.isSaturationFocused()).toBe(true);
        browser.keys(TAB_KEY);
        expect(colorPicker.isHueFocused()).toBe(true);
        browser.keys(TAB_KEY);
        expect(colorPicker.isAlphaFocused()).toBe(true);
        browser.keys(TAB_KEY);
        expect(colorPicker.isHexFocused()).toBe(true);
        Array.from(Array(4)).forEach((_value, index) => {
            browser.keys(TAB_KEY);
            expect(colorPicker.isRgbaFocused(index)).toBe(true);
        });
        browser.keys(TAB_KEY);
        expect(colorPicker.isDefaultColorsFocused()).toBe(true);
    });

    it('should change color when saturation component is focused an arrow key is pressed', () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        colorPicker.clickDefaultColors();
        expect(colorPicker.getColor()).toBe('e3aaec');
        colorPicker.clickSaturation();
        browser.keys(ARROW_UP_KEY);
        expect(colorPicker.getColor()).toBe('e7adf0');
        browser.keys(ARROW_LEFT_KEY);
        expect(colorPicker.getColor()).toBe('e7aff0');
        browser.keys(ARROW_DOWN_KEY);
        expect(colorPicker.getColor()).toBe('e5aded');
        browser.keys(ARROW_RIGHT_KEY);
        expect(colorPicker.getColor()).toBe('e4abed');
    });

    it('should focus the right color in default colors component when an arrow key is pressed', () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        colorPicker.clickDefaultColors();
        expect(colorPicker.getColor()).toBe('e3aaec');
        browser.keys(ARROW_RIGHT_KEY);
        expect(colorPicker.getColor()).toBe('c3dbf7');
        browser.keys(ARROW_LEFT_KEY);
        expect(colorPicker.getColor()).toBe('e3aaec');
    });

    it('should change color when hue component is focused an arrow key is pressed', () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        colorPicker.clickDefaultColors();
        colorPicker.clickHue();
        const initialColor = colorPicker.getColor();
        browser.keys(ARROW_LEFT_KEY);
        expect(colorPicker.getColor()).not.toBe(initialColor);
        browser.keys(ARROW_RIGHT_KEY);
        expect(colorPicker.getColor()).toBe(initialColor);
    });

    it('should change color when alpha component is focused an arrow key is pressed', () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        colorPicker.clickSaturation();
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(ARROW_LEFT_KEY);
        expect(colorPicker.getAlpha()).toBe('99');
        browser.keys(ARROW_RIGHT_KEY);
        expect(colorPicker.getAlpha()).toBe('100');
    });
});
