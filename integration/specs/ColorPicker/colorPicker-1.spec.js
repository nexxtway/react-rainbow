/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
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
    beforeAll(async () => {
        await browser.url('/#!/ColorPicker/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(COLORPICKER);
        await component.waitForExist();
    });

    it('should focus the right common component when an tab key is pressed', async () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        await colorPicker.clickSaturation();
        await expect(await colorPicker.isSaturationFocused()).toBe(true);
        await browser.keys(TAB_KEY);
        await expect(await colorPicker.isHueFocused()).toBe(true);
        await browser.keys(TAB_KEY);
        await expect(await colorPicker.isAlphaFocused()).toBe(true);
        await browser.keys(TAB_KEY);
        await expect(await colorPicker.isHexFocused()).toBe(true);

        const arr = Array.from(Array(4));
        for (const [index] of arr.entries()) {
            await browser.keys(TAB_KEY);
            expect(await colorPicker.isRgbaFocused(index)).toBe(true);
        }
        await browser.keys(TAB_KEY);
        await expect(await colorPicker.isDefaultColorsFocused()).toBe(true);
    });

    it('should change color when saturation component is focused an arrow key is pressed', async () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        await colorPicker.clickDefaultColors();
        await expect(await colorPicker.getColor()).toBe('e3aaec');
        await colorPicker.clickSaturation();
        await browser.keys(ARROW_UP_KEY);
        await expect(await colorPicker.getColor()).toBe('e7adf0');
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await colorPicker.getColor()).toBe('e7aff0');
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await colorPicker.getColor()).toBe('e5aded');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await colorPicker.getColor()).toBe('e4abed');
    });

    it('should focus the right color in default colors component when an arrow key is pressed', async () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        await colorPicker.clickDefaultColors();
        await expect(await colorPicker.getColor()).toBe('e3aaec');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await colorPicker.getColor()).toBe('c3dbf7');
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await colorPicker.getColor()).toBe('e3aaec');
    });

    it('should change color when hue component is focused an arrow key is pressed', async () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        await colorPicker.clickDefaultColors();
        await colorPicker.clickHue();
        const initialColor = await colorPicker.getColor();
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await colorPicker.getColor()).not.toBe(initialColor);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await colorPicker.getColor()).toBe(initialColor);
    });

    it('should change color when alpha component is focused an arrow key is pressed', async () => {
        const colorPicker = new PageColorPicker(COLORPICKER);
        await colorPicker.clickSaturation();
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await colorPicker.getAlpha()).toBe('99');
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await colorPicker.getAlpha()).toBe('100');
    });
});
