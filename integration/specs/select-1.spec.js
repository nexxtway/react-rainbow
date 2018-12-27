const PageSelect = require('./../../src/components/Select/pageObject');

const SELECT = '#example-select-1';

describe('Textarea base example', () => {
    beforeEach(() => {
        browser.url('/#!/Select/1');
        browser.refresh();
    });
    it('should put the select focused when clcik on it', () => {
        const select = new PageSelect(SELECT);
        select.click();
        expect(select.hasFocusSelect()).toBe(true);
    });
    it('should put the select focused when click on the label of the select', () => {
        const select = new PageSelect(SELECT);
        select.clickLabel();
        expect(select.hasFocusSelect()).toBe(true);
    });
});
