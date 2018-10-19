const PageProgressIndicator = require('./../../src/components/ProgressIndicator/pageObject');

const PROGRESSINDICATOR = '#progressindicator-7';

describe('ProgressIndicator base example', () => {
    beforeEach(() => {
        browser.url('/#!/ProgressIndicator/7');
        browser.refresh();
    });

    it('should be active the second step when is clicked', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep = progressindicator.getItem(1);
        progressStep.click();
        expect(progressStep.isActive()).toBe(true);
    });
    it('should be completed the first step when the second step is clicked', () => {
        const progressindicator = new PageProgressIndicator(PROGRESSINDICATOR);
        const progressStep1 = progressindicator.getItem(0);
        const progressStep2 = progressindicator.getItem(1);
        progressStep2.click();
        expect(progressStep1.isCompleted()).toBe(true);
    });
});
