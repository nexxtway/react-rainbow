
describe('simple buttons', () => {
    const NEUTRAL_BTN = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div:nth-child(2) > button';
    const OUTLINE_BTN = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div:nth-child(3) > button';

    beforeAll(() => {
        browser.url('/#!/Button/1');
    });
    it('should change the label to "Clicked!" when click the neutral btn', () => {
        browser.click(NEUTRAL_BTN);
        expect(browser.getText(NEUTRAL_BTN)).toBe('Clicked!');
    });
    it('should change the label to "Focused" when the Outline Brand button gets focused', () => {
        browser.click(OUTLINE_BTN);
        expect(browser.getText(OUTLINE_BTN)).toBe('Focused');
    });
    it('should change the label to "Button Outline Brand" when the button lost the focus', () => {
        browser.click(OUTLINE_BTN);
        browser.click(NEUTRAL_BTN);
        expect(browser.getText(OUTLINE_BTN)).toBe('Button Outline Brand');
    });
});
