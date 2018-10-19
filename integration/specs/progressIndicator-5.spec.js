const PageProgressIndicator = require('./../../src/components/ProgressIndicator/pageObject');

const PROGRESSINDICATOR = '#progressindicator-5';
const BACKBUTTON = '#backbutton-5';
const NEXTBUTTON = '#nextbutton-5';

describe('ProgressIndicator base example', () => {
    beforeEach(() => {
        browser.url('/#!/ProgressIndicator/5');
        browser.refresh();
    });

    it('should the third step have the error icon when the second is active and the next button is clicked', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep = progressindicator.getItem(2);
        browser.click(NEXTBUTTON);
        expect(progressStep.hasError()).toBe(true);
    });
    it('should be active the fourth step when the second is active and the next button is clicked twice', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep = progressindicator.getItem(3);
        browser.click(NEXTBUTTON);
        browser.click(NEXTBUTTON);
        expect(progressStep.isActive()).toBe(true);
    });
    it('should be completed the second step when is active and the next button is clicked', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep = progressindicator.getItem(1);
        browser.click(NEXTBUTTON);
        expect(progressStep.isCompleted()).toBe(true);
    });

    it('should be active the first step when the second is active and the back button is clicked', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep = progressindicator.getItem(0);
        browser.click(BACKBUTTON);
        expect(progressStep.isActive()).toBe(true);
    });
    it('should be completed the first step when the second is active', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep = progressindicator.getItem(0);
        expect(progressStep.isCompleted()).toBe(true);
    });
});
