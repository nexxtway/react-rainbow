const PageSelect = require('../../../src/components/Select/pageObject');

const SELECT = '#example-select-1';

describe('Select base example', () => {
    beforeAll(() => {
        browser.url('/#!/Select/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(SELECT);
        component.waitForExist();
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
